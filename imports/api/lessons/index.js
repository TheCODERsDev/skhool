import { Mongo } from 'meteor/mongo';

const Lessons = new Mongo.Collection('lessons');
export default Lessons;

Lessons.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Lessons.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
