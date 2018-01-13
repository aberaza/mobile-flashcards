import React from 'react';
import { Text, View } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import styles from './utils/styles';
import reducer from './reducers';

import AppHome from './components/Home'
import AppNewDeck from './components/NewDeck'

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
      <Provider store={createStore(reducer)}>
        <AppMain />
      </Provider>
    );
  }
}
