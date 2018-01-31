import React from 'react'
import { Text, View, Button } from 'react-native'

export default (props)=>{
    const {answerQuestion, a} = props
    return (
        <View>
            <Text>Answer:</Text>
            <Text>{a}</Text>
            <Button title="Correct" onPress={()=>answerQuestion(true)} />
            <Button title="Wrong" onPress={()=>answerQuestion(false)} />
        </View>
    )
}