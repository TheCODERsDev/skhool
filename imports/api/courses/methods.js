import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Courses from '.';
import rateLimit from '../../modules/rate-limit';

export const upsertCourse = new ValidatedMethod({
  name: 'courses.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
    picture: { type: String, optional: true },
    thumbnail: { type: String, optional: true },
  }).validator(),
  run(course) {
    return Courses.upsert({ _id: course._id }, { $set: course });
  },
});

export const removeCourse = new ValidatedMethod({
  name: 'courses.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Courses.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertCourse,
    removeCourse,
  ],
  limit: 5,
  timeRange: 1000,
});
