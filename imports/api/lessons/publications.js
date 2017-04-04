import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Lessons from '.';

Meteor.publish('lessons.list', () => Lessons.find());

Meteor.publish('lessons.view', (_id) => {
  check(_id, String);
  return Lessons.find(_id);
});

Meteor.publish('lessons.course', (course) => {
  check(course, String);
  return Lessons.find({ course });
});
