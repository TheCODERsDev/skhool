import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Courses from '../../api/courses';
import Lessons from '../../api/lessons';
import CourseEdit from '../pages/CourseEdit';
import Loading from '../components/Loading';

const composer = ({ params }, onData) => {
  const courseSubscription = Meteor.subscribe('courses.view', params._id);
  const lessonSubscription = Meteor.subscribe('lessons.course', params._id);

  if (courseSubscription.ready() && lessonSubscription.ready()) {
    const doc = Courses.findOne(params._id);
    const lessons = Lessons.find().fetch();
    onData(null, { doc, lessons });
  }
};

export default composeWithTracker(composer, Loading)(CourseEdit);
