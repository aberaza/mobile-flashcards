import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View } from 'react-native';


import styles from '../utils/styles'
import * as C from '../utils/colors'
import { appAddCard } from '../actions'
import { Card, CardTitle, CardContent, CardActions } from './MCards'
import MButton from './MButton'
import MTextInput from './MTextInput'

class NewCard extends React.Component {
    state = {
        q: "",
        a: ""
    }

    updateQ = q => this.setState({ q })
    updateA = a => this.setState({ a })
    addCard = _ => {
        return this.props.appAddCard(this.props.navigation.state.params.title, this.state)
            .then(_=> this.props.navigation.goBack())
    }
    render() {
        return (
            <View style={styles.appContainer}>
                <Card>
                    <CardTitle>Question</CardTitle>
                    <CardContent>
                        <MTextInput 
                            placeholder="What do you want to ask?"
                            value={this.state.q}
                            onChangeText={this.updateQ}
                            returnKeyType="next"
                            multiline = {true}
                            />
                    </CardContent>
                    <CardTitle>Answer</CardTitle>
                    <CardContent>
                        <MTextInput 
                            placeholder="...and what should be the answer?"
                            value={this.state.a}
                            onChangeText={this.updateA}
                            returnKeyType="done"
                            onSubmitEditing={this.addCard}
                            multiline = {true}
                             />
                    </CardContent>

                <CardActions>
                    <MButton title="Submit" onPress={this.addCard} />
                </CardActions>
                </Card>
            </View>
        )
    }
}

export default connect(null, {appAddCard})(NewCard)