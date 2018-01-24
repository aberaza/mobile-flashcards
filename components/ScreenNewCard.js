import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, Button, View } from 'react-native';


import styles from '../utils/styles'
import { appAddCard } from '../actions'

class NewCard extends React.Component {
    state = {
        q : "",
        a : ""
    }

    updateQ = q => this.setState({q})
    updateA = a => this.setState({a})
    addCard = _ => appAddCard(this.props.navigation.state.params.deck, this.state)
        .then(this.setState({q:"", a:""}))

    render(){
        return (
            <View>
                <Text>Question:</Text>
                <TextInput style={styles.standardInput} 
                    placeholder="What do you want to ask?"
                    value={this.state.q}
                    onChangeText={this.updateQ}
                    returnKeyType="next"
                    editable={true}
                    autoFocus={false} />
                <Text>Answer:</Text>
                <TextInput style={styles.standardInput} 
                    placeholder="...and what should be the answer?"
                    value={this.state.q}
                    onChangeText={this.updateA}
                    returnKeyType="submit"
                    onSubmitEditing={this.addCard}
                    editable={true}
                    autoFocus={false} />
                <Button title="Submit" onPress={this.addCard} />
            </View>
        )
    }
}