import { StackNavigator } from 'react-navigation'

import DeckListNavigator from '../components/DecksListNavigator'
import ScreenNewCard from '../components/ScreenNewCard'
import ScreenTestDeck from '../components/ScreenTestDeck'

const routeConfig = {
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
}

export default StackNavigator(routeConfig, navConfig)