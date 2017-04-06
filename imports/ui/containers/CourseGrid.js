import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Course from '../../api/courses';
import CourseGrid from '../components/CourseGrid';
import Loading from '../components/Loading';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('courses.list');
  if (subscription.ready()) {
    const courses = Course.find().fetch();
    onData(null, { courses });
  }
};

export default composeWithTracker(composer, Loading)(CourseGrid);
