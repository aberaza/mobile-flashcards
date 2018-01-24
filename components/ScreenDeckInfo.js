import React from 'react'
import {connect} from 'react-redux'
import { Text, View, Button } from 'react-native'

import Question from '../components/Question'
import Answer from '../components/Answer'

class ScreenDeckInfo extends React.Component {
    state = {
        name : "",
        correct : 0,
        questions : [],
    }

    addCard = _ => this.props.navigation.navigate('AddCard', {title: this.props.deck.title})

    playDeck = _ => this.props.navigation.navigate('DeckTest', {title: this.props.deck.title})

    render(){
        const { title="", questions=[] } = this.props.deck;
        return (
            <View>
                <Text>Dec: {title} </Text>
                <Text>{questions.length} cards</Text>
                <Button title="Add Card" onPress={this.addCard} />
                <Button title="Play Deck!" onPress={this.playDeck} />
            </View>
        )
    }
}

const mapStateToProps = ({decks}, props) => ({
    deck : decks[props.navigation.state.params.title]
})

export default connect(mapStateToProps)(ScreenDeckInfo)