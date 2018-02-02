import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View } from 'react-native';


import styles from '../utils/styles'
import * as C from '../utils/colors'
import { appAddCard } from '../actions'
import { Card, CardTitle, CardContent, CardActions } from './MCards'
import MButton from './MButton'

class NewCard extends React.Component {
    state = {
        q: "",
        a: ""
    }

    updateQ = q => this.setState({ q })
    updateA = a => this.setState({ a })
    addCard = _ => {
        return this.props.appAddCard(this.props.navigation.state.params.title, this.state)
            .then(this.props.navigation.Back)
    }
    render() {
        console.log("new card props", this.props)
        return (
            <View style={styles.appContainer}>
                <Card>
                    <CardTitle>Question</CardTitle>
                    <CardContent>
                        <TextInput style={styles.standardInput}
                            placeholder="What do you want to ask?"
                            placeholderTextColor={C.YELLOW}
                            value={this.state.q}
                            onChangeText={this.updateQ}
                            returnKeyType="next"
                            underlineColorAndroid='rgba(0,0,0,0)'
                            multiline = {true}
                            editable={true}
                            autoFocus={false} />
                    </CardContent>
                </Card>

                <Card>
                    <CardTitle>Answer</CardTitle>
                    <CardContent>
                        <TextInput style={styles.standardInput}
                            placeholder="...and what should be the answer?"
                            value={this.state.a}
                            onChangeText={this.updateA}
                            returnKeyType="done"
                            onSubmitEditing={this.addCard}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            multiline = {true}
                            editable={true}
                            autoFocus={false} />

                    </CardContent>
                </Card>

                <CardActions>
                    <MButton title="Submit" onPress={this.addCard} />
                </CardActions>
            </View>
        )
    }
}

const mapDispatchToProps = {
    appAddCard
}

export default connect(null, mapDispatchToProps)(NewCard)