import React from 'react';
import { Text, View } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import styles from './utils/styles';
import reducer from './reducers';
import actions from './actions';

import AppHome from './components/Home'
import AppNewDeck from './components/NewDeck'
import AppStatusBar from './components/StatusBar'

/*
const AppMain = DrawerNavigator({
  Home: {
    screen: Home,

  },
  Settings: {
    screen: Settings
  }
})
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));


const AppMain = TabNavigator({
  Home: {
    screen: AppHome,
    navigationOptions: {
      
      tabBarLabel: 'Decks List'
    }
  },
  NewDeck: {
    screen: AppNewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    order: ['Home', 'NewDeck'],
    backBehavior: 'initialRoute',
    tabBarOptions: {

  }
})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, enhancer)}>
        <View style={{flex:1}}>
          <AppStatusBar backgroundColor='blue' barStyle="light-content"/>
          <AppMain />
        </View>
      </Provider>
    );
  }
}
