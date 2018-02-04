import React from 'react'
import {connect} from 'react-redux'
import {View, Text } from 'react-native'

import Question from '../components/Question'
import Answer from '../components/Answer'
import Results from '../components/Results'
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

    answerQuestion = (correct) => {
        if(this.state.current +1 >= this.state.questions.length){
            clearLocalNotification().then(setLocalNotification)
            const score = (this.state.correct + (correct? 1 : 0))*100/this.state.questions.length
            this.updateHeader(`${Math.floor(score)}%`)
        }else{
            this.updateHeader(`${this.state.current + 1}/${this.state.questions.length}`)
        }

        this.setState((state) => {
            return {
                current : ++state.current,
                showAnswer: false,
                correct: correct?++state.correct:state.correct,
            }
        })
    }

    showAnswer = _ => this.setState({showAnswer:true})

    nextQuestion = _=> this.setState({current : this.state.current + 1, showAnswer:false})

    goHome = _ => this.props.navigation.goBack()

    restart = _ => this.props.navigation.goBack('DeckTest')

    updateHeader = (value) => {
        this.props.navigation.setParams({title: `${this.state.name} ${value}`})
    }

    render(){
        const {questions, current } = this.state;
        const finished = current >= questions.length
        const showAnswer = !finished && this.state.showAnswer
        const showQuestion = !finished && this.state.showQuestion
        
        return (
            <View style={styles.appContainer}>
                {!finished && (this.state.showAnswer
                    ? (<Answer answerQuestion={this.answerQuestion} {...questions[current]} />)
                    : (<Question showAnswer={this.showAnswer} {...questions[current]} />)
                )}
                {finished && (<Results goHome={this.goHome} restart={this.restart} {...this.state} />
)}
            </View>
        )
    }
}

const mapStateToProps = ({decks}, props) => ({
    deck : decks[props.navigation.state.params.title]
})

export default connect(mapStateToProps)(TestDeck)