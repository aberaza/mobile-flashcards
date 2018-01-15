import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, Button, View } from 'react-native';

import styles from '../utils/styles'
import { appAddDeck } from '../actions'

class NewDeck extends React.Component {
    state = {
        name : ""
    }

    updateName = name => this.setState({name})

    addDeck = _ => this.props.submitDeck(this.state.name)
      .then(this.setState({name:""}))

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
          <Button title="Submit" onPress={this.addDeck} />
        </View >
      )
    }
  }
  
const mapDispatchToProps = {
  submitDeck : appAddDeck
}

export default connect(null, mapDispatchToProps)(NewDeck)