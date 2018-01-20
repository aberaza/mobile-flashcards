import React from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import styles from './utils/styles';
import reducer from './reducers';
import actions from './actions';

import AppDeckNav from './components/RootNavigator'

import AppStatusBar from './components/StatusBar'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));




export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, enhancer)}>
        <View style={{flex:1}}>
          <AppStatusBar backgroundColor='blue' barStyle="light-content"/>
          <AppDeckNav />
        </View>
      </Provider>
    );
  }
}
