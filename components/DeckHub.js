import React from 'react'
import {connect} from 'react-redux'
import { Text, View } from 'react-native'

import Question from '../components/Question'
import Answer from '../components/Answer'

class DeckHub extends React.Component {
    state = {
        name : "",
        correct : 0,
        questions : [],
    }

    render(){
        const {questions, current } = this.state;
        return (
            <View>
                <Text>Dec:kHUB</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(DeckHub)