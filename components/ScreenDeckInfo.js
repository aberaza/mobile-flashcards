import React from 'react'
import {connect} from 'react-redux'
import { Text } from 'react-native'

import styles from '../utils/styles'
import { Card, CardTitle, CardContent, CardActions } from './MCards'
import MButton from './MButton'

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
            <Card>
                <CardTitle>{title} </CardTitle>
                <CardContent>
                    <Text style={styles.textStandard}>{questions.length} cards</Text>
                </CardContent>
                <CardActions>
                    <MButton title="Add Card" onPress={this.addCard} />
                    {questions.length > 0 && (<MButton title="Play Deck!" onPress={this.playDeck} />)}
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = ({decks}, props) => ({
    deck : decks[props.navigation.state.params.title]
})

export default connect(mapStateToProps)(ScreenDeckInfo)