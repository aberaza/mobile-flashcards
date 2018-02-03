import React from 'react'
import { Text } from 'react-native'

import styles from '../utils/styles'
import { Card, CardTitle, CardContent, CardActions } from './MCards'
import MButton from './MButton'

export default (props) => (
    <Card>
        <CardTitle>Your Score!</CardTitle>
        <CardContent>
            <Text style={styles.textStandard}>You scored {props.correct} out of {props.questions.length} ({Math.floor(props.correct*100/props.questions.length)}%)</Text>

        </CardContent>
        <CardActions>
            <MButton title="Change deck" onPress={props.goHome} />
            <MButton title="Start Over" onPress={props.restart} />
        </CardActions>
    </Card>
)