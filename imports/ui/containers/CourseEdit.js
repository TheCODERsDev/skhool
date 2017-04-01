import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Courses from '../../api/courses';
import CourseEdit from '../pages/CourseEdit';
import Loading from '../components/Loading';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('courses.view', params._id);

  if (subscription.ready()) {
    const doc = Courses.findOne(params._id);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(CourseEdit);
