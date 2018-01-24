import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, Button, View } from 'react-native';


import styles from '../utils/styles'
import { appAddCard } from '../actions'

export default class NewCard extends React.Component {
    state = {
        q : "",
        a : ""
    }

    updateQ = q => this.setState({q})
    updateA = a => this.setState({a})
    addCard = _ => {
        return appAddCard(this.props.navigation.state.params.title, this.state)
        //.then(this.props.navigation.Back)
    }
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
                    value={this.state.a}
                    onChangeText={this.updateA}
                    returnKeyType="done"
                    onSubmitEditing={this.addCard}
                    editable={true}
                    autoFocus={false} />
                <Button title="Submit" onPress={this.addCard} />
            </View>
        )
    }
}