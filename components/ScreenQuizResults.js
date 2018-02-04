import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Results from '../components/Results'
import styles from '../utils/styles'
import { getKeyForScreen } from '../utils/helpers'

class QuizResults extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            ...props.navigation.state.params,
            total : props.deck.questions.length//props.total,
        }

        this.updateHeader(`${Math.floor(this.state.correct*100/this.state.total)}%`)
    }

    updateHeader = (value) => this.props.navigation.setParams({title: `${this.state.title} ${value}`})
    
    goHome = _ => this.props.navigation.goBack(getKeyForScreen('DeckTest', this.props.nav.routes))

    restart = _ => this.props.navigation.navigate('DeckTest', {title:this.state.title})

    render() {
        return (
            <View style={styles.appContainer}>
                <Results goHome={this.goHome} restart={this.restart} {...this.state}/>
            </View>
        )
    }
}

const mapStateToProps = ({decks, nav}, props) => ({
    nav,
    deck : decks[props.navigation.state.params.title] //.questions.length
})

export default connect(mapStateToProps)(QuizResults)