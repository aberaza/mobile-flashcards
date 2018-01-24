import { StackNavigator } from 'react-navigation'

import DeckListNavigator from '../components/DecksListNavigator'
import ScreenDeckInfo from '../components/ScreenDeckInfo'
import ScreenNewCard from '../components/ScreenNewCard'
import ScreenTestDeck from '../components/ScreenTestDeck'

const routeConfig = {
    DeckInfo : {
      screen : ScreenDeckInfo,
      navigationOptions : ({navigation}) => ({title: `${navigation.state.params.title} Deck Info`})
    },
    AddCard : {
        screen : ScreenNewCard,
        navigationOptions : {
          title : 'Add Card'
        }
    },
    DeckTest : {
      screen : ScreenTestDeck,
      navigationOptions : ({navigation}) => ({title : `${navigation.state.params.title} Deck`})
    }
  }

const navConfig = {
  initialRouteName : 'DeckInfo'
}

export default StackNavigator(routeConfig, navConfig)