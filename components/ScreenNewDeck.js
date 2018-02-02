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
        this.setState({ name: "" })
        this.props.navigation.goBack()
      })
    //this.props.navigation.goBack();
  }

  /*

            <TextInput
              style={styles.standardInput}
              placeholder="Sample Deck Name"
              value={this.state.name}
              onChangeText={this.updateName}
              onSubmitEditing={this.addDeck}
              returnKeyType="send"
              editable={true}
              autoFocus={false} />

              <TextInput style={styles.standardInput}
                            placeholder="What do you want to ask?"
                            value={this.state.q}
                            onChangeText={this.updateQ}
                            returnKeyType="next"
                            editable={true}
                            autoFocus={false} />
                            
                            <MTextInput placeholder="Sample Deck Name"
                              value={this.state.name}
                              onChangeText={this.updateName}
                              onSubmitEditing={this.addDeck}
                              returnKeyType="send"
                              editable={true}
                              autoFocus={false}
                              /> 
                            

  */
  render() {
    return (
      <Card>
          <CardTitle>How should we name your new deck?
          </CardTitle>
          <CardContent>
          <TextInput
              style={styles.standardInput}
              placeholder="Sample Deck Name"
              value={this.state.name}
              onChangeText={this.updateName}
              onSubmitEditing={this.addDeck}
              returnKeyType="send"
              editable={true}
              autoFocus={false} />

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