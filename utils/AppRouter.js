import { StackNavigator } from 'react-navigation'

import DeckListNavigator from '../components/DecksListNavigator'
import ScreenDeckInfo from '../components/ScreenDeckInfo'
import ScreenTestDeck from '../components/ScreenTestDeck'

const routeConfig = {
    Home : {
      screen : DeckListNavigator,
      navigationOptions : {
      }
    },
    DeckInfo : {
        screen : ScreenDeckInfo,
        navigationOptions : ({navigation}) => ({
          title : `${navigation.state.params.title} Deck`
        })

    },
    DeckTest : {
      screen : ScreenTestDeck,
      navigationOptions : ({navigation}) => ({title : `${navigation.state.params.title} Deck`})
    }
  }

const navConfig = {
    headerMode: 'none',
    initialRouteName : 'Home'
}

export default StackNavigator(routeConfig, navConfig)