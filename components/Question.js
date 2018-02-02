import React from 'react'
import { Text } from 'react-native'

import styles from '../utils/styles'
import { Card, CardTitle, CardContent, CardActions } from './MCards'
import MButton from './MButton'

export default (props)=>{
    return (
        <Card>
            <CardTitle>Question:</CardTitle>
            <CardContent>
                <Text style={styles.textQuestion}>{props.q}</Text>
            </CardContent>
            <CardActions>
                <MButton title="Answer" onPress={props.showAnswer} />
            </CardActions>
        </Card>
    )
}