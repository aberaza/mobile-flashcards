import React from 'react';
import { TabNavigator } from 'react-navigation';

import AppDeckList from './DeckList'
import AppNewDeck from './NewDeck'

const HomeRouter = TabNavigator({
    Home: {
      screen: AppDeckList,
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
      //swipeEnabled: true,
      order: ['Home', 'NewDeck'],
      backBehavior: 'initialRoute',
      tabBarOptions: {
  
    }
  })

  export default class DeckHome extends React.Component {
      render () {
          return (
              <HomeRouter />
          )
      }
  }