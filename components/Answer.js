import React from 'react'

import { Text } from 'react-native'
import styles from '../utils/styles'
import { Card, CardTitle, CardContent, CardActions } from './MCards'
import MButton from './MButton'

export default (props)=>{
    const {answerQuestion, a} = props
    return (
        <Card>
            <CardTitle>Answer:</CardTitle>
            <CardContent>
                <Text style={styles.textAnswer}>{a}</Text>
            </CardContent>
            <CardActions>
                <MButton style={[styles.buttonBasic,styles.buttonGreen]} title="Correct" onPress={()=>answerQuestion(true)} />
                <MButton style={[styles.buttonBasic,styles.buttonRed]} title="Wrong" onPress={()=>answerQuestion(false)} />
            </CardActions>
        </Card>
    )
}