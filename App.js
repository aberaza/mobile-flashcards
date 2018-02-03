import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import styles from './utils/styles';
import nav from './reducers/navigation';
import decks from './reducers/decks'
import actions from './actions';

import {DARK} from './utils/colors'
import { setLocalNotification } from './utils/helpers'

import AppNavigator from './components/AppNavigator'
import AppStatusBar from './components/StatusBar'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const reducer = combineReducers({
  nav,
  decks
})


export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, enhancer)}>
        <View style={styles.appContainer}>
          <AppStatusBar backgroundColor={DARK} barStyle="light-content"/>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
