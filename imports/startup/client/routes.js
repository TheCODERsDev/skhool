/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App';
import Index from '../../ui/pages/Index';
import Login from '../../ui/pages/Login';
import NotFound from '../../ui/pages/NotFound';
import RecoverPassword from '../../ui/pages/RecoverPassword';
import ResetPassword from '../../ui/pages/ResetPassword';
import Signup from '../../ui/pages/Signup';

import ViewCourse from '../../ui/pages/ViewCourse';

import CourseNew from '../../ui/pages/CourseNew';
import CourseList from '../../ui/pages/CourseList';
import CourseView from '../../ui/containers/CourseView';
import CourseEdit from '../../ui/containers/CourseEdit';

import LessonView from '../../ui/pages/LessonView';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route name="LessonView" path="/courses/:courseId/lessons/:_id" component={ LessonView } />
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />

        <Route name="CourseNew" path="courses/new" component={ CourseNew } onEnter={ authenticate } />
        <Route name="CourseList" path="courses" component={ CourseList } />
        <Route name="CourseView" path="courses/:_id" component={ CourseView } />
        <Route name="CourseEdit" path="courses/:_id/edit" component={ CourseEdit } onEnter={ authenticate } />

        <Route name="viewCourse" path="/course" component={ ViewCourse } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
