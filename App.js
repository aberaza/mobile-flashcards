import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

/* COMPONENTS */

const DeckItem = ({deck="", questions=[]}) => (
  <View>
    <Text>{deck}</Text>
    <Text>#{questions.length} cards</Text>
  </View>
  )
  
/*

const DrawerNav = DrawerNavigator({
  Home: {
    screen: Home
  },
  Settings: {
    screen: Settings
  }
})



const Home = ({navigation, decks }) =>(
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          { decks.length && decks.map( deck => (<DeckItem {...deck} />)) }
          { (decks.length === 0) && (<Text> You don't have any deck </Text>) }
        </View>
)
*/
const Settings = ({navigation}) => (
  <View>
    <Text>This vies has not yet been implemented</Text>
  </View>
)

export default class App extends React.Component {
  render() {
    return ( 
      <View style={styles.container}>

        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        < DeckItem style={styles.deckItem} deck="Preguntas Chorras 2" /> 

        {/* decks.length && decks.map( deck => (<DeckItem {...deck} />)) */}
        {/* (decks.length === 0) && (<Text> You don't have any deck </Text>) */}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckItem: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor : '#f26f28' 
  },
  deckName : {
    color: '#0ff',
    fontWeight : 'bold',
  },
  deckQuestionNb : {
    color : '#0ff',
    fontWeight : 'normal',
    fontStyle : 'italic'
  }

});
