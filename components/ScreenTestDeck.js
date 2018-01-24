import React from 'react'
import {connect} from 'react-redux'

import Question from '../components/Question'
import Answer from '../components/Answer'

class TestDeck extends React.Component {
    state = {
        current : 0,
        showAnswer : false,
        correct : 0,
        questions : [],
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

    render(){
        const {questions, current } = this.state;
        return (
            <View>
                <Text>Pregunta:</Text>
                {this.state.showAnswer
                    ? (<Answer {...questions[current]} />)
                    : (<Questions {...questions[current]} />)
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(TestDeck)