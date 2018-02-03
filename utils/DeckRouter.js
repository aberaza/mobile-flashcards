import { StackNavigator } from 'react-navigation'

import DeckListNavigator from '../components/DecksListNavigator'
import ScreenDeckInfo from '../components/ScreenDeckInfo'
import ScreenNewCard from '../components/ScreenNewCard'
import ScreenTestDeck from '../components/ScreenTestDeck'
import styles from '../utils/styles'
import {DARK, YELLOW, RED_LIGHT } from '../utils/colors'

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
  initialRouteName : 'DeckInfo',
  navigationOptions : {
    headerTintColor : RED_LIGHT,
    headerStyle : { backgroundColor:DARK },
    headerTitleStyle : {color : YELLOW},
  }
}

export default StackNavigator(routeConfig, navConfig)