import React from 'react';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';

import AppDeckList from './DeckList'
import AppNewDeck from './NewDeck'



export const HomeRouter = TabNavigator({
  List: {
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
    order: ['List', 'NewDeck'],
    backBehavior: 'initialRoute',
    tabBarOptions: {

    }
  })

export default class DeckHome extends React.Component {
  render() {
    return (
      <HomeRouter navigation={this.props.navigation} />
    )
  }
}

DeckHome.router = HomeRouter.router;