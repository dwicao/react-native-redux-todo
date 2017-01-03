import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import Main from './src/components/Main';

const store = configureStore();

class todo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('todo', () => todo);