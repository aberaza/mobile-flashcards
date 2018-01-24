import React from 'react'
import {connect} from 'react-redux'
import {View, Text, Button } from 'react-native'

import Question from '../components/Question'
import Answer from '../components/Answer'

class TestDeck extends React.Component {
    state = {
        name : "",
        current : 0,
        showAnswer : false,
        correct : 0,
        questions : [],
    }

    constructor(props){
        super(props)
        this.state = {
            name : props.deck.title,
            current : 0,
            showAnswer : false,
            correct : 0,
            questions : props.deck.questions || [],
        }
    }

    answerQuestion = (correct) => {
        this.setState((state) => {
            return {
                current : ++state.current,
                showAnswer: false,
                correct: correct?++state.correct:state.correct,
            }
        })

        if(this.state.current >= this.state.questions.length){
            console.log("the end")
        }
    }

    showAnswer = _ => this.setState({showAnswer:true})

    nextQuestion = _=> this.setState({current : this.state.current + 1, showAnswer:false})

    render(){
        const {questions, current } = this.state;
        const finished = current >= questions.length
        return (
            <View>
                <Text>Pregunta {this.state.current + 1}/{this.state.questions.length}:</Text>
                {this.state.showAnswer
                    ? (<Answer {...questions[current]} />)
                    : (<Question {...questions[current]} />)
                }
            </View>
        )
    }
}

const mapStateToProps = ({decks}, props) => ({
    deck : decks[props.navigation.state.params.title]
})

export default connect(mapStateToProps)(TestDeck)