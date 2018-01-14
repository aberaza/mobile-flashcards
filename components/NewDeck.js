import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';

import styles from '../utils/styles'


export default class AppNewDeck extends React.Component {
    state = {
        name : ""
    }

    updateName = (name) => this.setState({name})



    render() {
      return (
        <View >
          <Text>How should we name your new deck?</Text>
          <TextInput 
            style={styles.standardInput} 
            placeholder="Sample Deck Name"
            value={this.state.text}
            onChangeText={this.updateName}
            editable={true}
            autoFocus={true} />
          <Button title="Submit" />
        </View >
      )
    }
  }
  