import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import URL from 'url-parse';
import qs from 'qs';
import rp from 'request-promise';
import Lessons from '.';

export const formatLesson = new ValidatedMethod({
  name: 'lessons.format',
  mixins: [CallPromiseMixin],
  validate: new SimpleSchema({
    course: { type: String, optional: true },
    link: { type: String, optional: true },
  }).validator(),
  run({ course, link }) {
    const url = new URL(link);
    const query = qs.parse(url.query.substr(1, url.query.length - 1));
    const id = query.v;
    const key = process.env.GOOGLE_API_KEY;
    return rp(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`)
    .then((res) => {
      const response = JSON.parse(res);
      if (response.items.length === 1) {
        const { snippet } = response.items[0];
        return {
          course,
          link: `https://www.youtube.com/watch?v=${id}`,
          title: snippet.title,
          description: snippet.description,
          image: snippet.thumbnails.standard.url,
          thumbnail: snippet.thumbnails.medium.url,
          data: snippet,
        };
      }
      throw new Meteor.Error('VIDEONOTFOUND', link);
    });
  },
});

export const upsertLesson = new ValidatedMethod({
  name: 'lessons.upsert',
  mixins: [CallPromiseMixin],
  validate: null,
  run: lesson => Lessons.upsert({ course: lesson.course, link: lesson.link }, { $set: lesson }),
});

export const removeLesson = new ValidatedMethod({
  name: 'lessons.remove',
  mixins: [CallPromiseMixin],
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Lessons.remove(_id);
  },
});
