import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Courses from '.';

Meteor.publish('courses.list', () => Courses.find());

Meteor.publish('courses.view', (_id) => {
  check(_id, String);
  return Courses.find(_id);
});
