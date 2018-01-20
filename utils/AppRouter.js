import { StackNavigator } from 'react-navigation'

import DeckHome from '../components/Home'
import AppTestDeck from '../components/TestDeck'

const routeConfig = {
    Home : {
      screen : DeckHome,
      navigationOptions : {
      }
    },
    Deck : {
      path : 'decks/:title',
      screen : 'TestDeck',
      navigationOptions : ({navigation}) => ({title : `${navigation.state.params.title} Deck`})
    }
  }

const navConfig = {
    headerMode: 'none',
    initialRouteName : 'Home'
}

export default StackNavigator(routeConfig, navConfig)