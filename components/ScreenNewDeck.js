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

    addDeck = _ => {
      this.props.submitDeck(this.state.name)
        .then(_ => {
          this.setState({name:""})
          this.props.navigation.goBack()
        })
      //this.props.navigation.goBack();
    }

    render() {
      return (
        <View >
          <Text>How should we name your new deck?</Text>
          <TextInput 
            style={styles.standardInput} 
            placeholder="Sample Deck Name"
            value={this.state.name}
            onChangeText={this.updateName}
            onSubmitEditing={this.addDeck}
            returnKeyType="send"
            editable={true}
            autoFocus={false} />
          <Button title="Submit" onPress={this.addDeck} />
        </View >
      )
    }
  }
  
const mapDispatchToProps = {
  submitDeck : appAddDeck
}

export default connect(null, mapDispatchToProps)(NewDeck)