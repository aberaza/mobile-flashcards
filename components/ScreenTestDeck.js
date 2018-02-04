import React from 'react'
import {connect} from 'react-redux'
import {View, Text } from 'react-native'

import Question from '../components/Question'
import Answer from '../components/Answer'

import styles from '../utils/styles'

import {clearLocalNotification, setLocalNotification} from '../utils/helpers'

import { Card, CardTitle, CardContent, CardActions } from './MCards'

class TestDeck extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name : props.deck.title,
            current : 0,
            showAnswer : false,
            correct : 0,
            questions : props.deck.questions || [],
        }
        this.updateHeader(`0/${props.deck.questions.length}`)
    }

    updateProgress = _ => {
        if(this.state.current >= this.state.questions.length){
            clearLocalNotification().then(setLocalNotification)
            this.props.navigation.navigate('QuizResults', {title: this.state.name, correct: this.state.correct})
        }
        this.updateHeader(`${this.state.current}/${this.state.questions.length}`)
    }

    answerQuestion = (correct) => {
        this.setState((state) => {
            return {
                current : ++state.current,
                showAnswer: false,
                correct: correct?++state.correct:state.correct,
            }
        }, this.updateProgress)
    }

    showResults = _ => this.props.navigation.navigate('QuizResults', )

    showAnswer = _ => this.setState({showAnswer:true})

    nextQuestion = _=> this.setState({current : this.state.current + 1, showAnswer:false})

    updateHeader = (value) => this.props.navigation.setParams({title: `${this.state.name} ${value}`})

    render(){
        const {questions, current, showAnswer } = this.state
        
        return (
            <View style={styles.appContainer}>
                {this.state.showAnswer
                    ? (<Answer answerQuestion={this.answerQuestion} {...questions[current]} />)
                    : (<Question showAnswer={this.showAnswer} {...questions[current]} />)
                }
            </View>
        )
    }
}

const mapStateToProps = ({decks}, props) => ({
    deck : decks[props.navigation.state.params.title]
})

export default connect(mapStateToProps)(TestDeck)