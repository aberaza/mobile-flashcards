import { StackNavigator } from 'react-navigation';

import DeckHome from './Home'
import AppTestDeck from './TestDeck'

export default AppDeckNav = StackNavigator({
    Home : {
     // path : 'decks/',
      screen : DeckHome,
      navigationOptions : {
      }
    },
    Deck : {
      path : 'decks/:title',
      screen : 'TestDeck',
      navigationOptions : ({navigation}) => ({title : `${navigation.state.params.title} Deck`})
    }
  },{
    headerMode: 'none'
  }
)