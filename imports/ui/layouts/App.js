import React from 'react';
import AppNavigation from '../containers/AppNavigation.js';

const App = ({ children }) => (
  <div>
    <AppNavigation />
    { children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
