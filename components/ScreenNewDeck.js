import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, KeyboardAvoidingView } from 'react-native';

import MTextInput from './MTextInput'
import MButton from './MButton'
import styles from '../utils/styles'
import { appAddDeck } from '../actions'
import { Card, CardTitle, CardContent, CardActions } from './MCards'

class NewDeck extends React.Component {
  state = {
    name: ""
  }

  updateName = name => this.setState({ name })

  addDeck = _ => {
    this.props.submitDeck(this.state.name)
      .then(_ => {
        this.props.navigation.navigate('DeckHub', {title:this.state.name})
        this.setState({ name: "" })
      })
  }

  render() {
    return (
      <Card>
          <CardTitle>How should we name your new deck?
          </CardTitle>
          <CardContent>
          
          <MTextInput placeholder="Sample Deck Name"
                              value={this.state.name}
                              onChangeText={this.updateName}
                              onSubmitEditing={this.addDeck}
                              returnKeyType="send"
                              editable={true}
                              autoFocus={false}
                              /> 

          </CardContent>
          <CardActions>
              <MButton title="Submit" onPress={this.addDeck} />
         </CardActions> 
        </Card>
    )
  }
}

const mapDispatchToProps = {
  submitDeck: appAddDeck
}

export default connect(null, mapDispatchToProps)(NewDeck)