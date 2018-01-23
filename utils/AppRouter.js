import { StackNavigator } from 'react-navigation'

import DeckHome from '../components/Home'
import AppDeckHub from '../components/DeckHub'
import AppTestDeck from '../components/TestDeck'

const routeConfig = {
    Home : {
      screen : DeckHome,
      navigationOptions : {
      }
    },
    DeckHub : {
        screen : AppDeckHub,
        navigationOptions : ({navigation}) => ({
          title : `${navigation.state.params.title} Deck`,
          headerMode : 'float'
        })

    },
    DeckTest : {
      path : 'deck/:title',
      screen : AppTestDeck,
      navigationOptions : ({navigation}) => ({title : `${navigation.state.params.title} Deck`})
    }
  }

const navConfig = {
    headerMode: 'float',
    initialRouteName : 'Home'
}

export default StackNavigator(routeConfig, navConfig)