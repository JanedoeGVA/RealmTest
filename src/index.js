import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ApplicationNavigator from './navigation/containers';
import myStore from './reduxStore';
export default class MyApp extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <ApplicationNavigator />
      </Provider>
    );
  }
}
