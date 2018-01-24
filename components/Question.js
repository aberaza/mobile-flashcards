import React from 'react'
import { Text, View, Button } from 'react-native'

export default (props)=>{
    return (
        <View>
            <Text>{props.q}</Text>
            <Button title="Answer" onPress={console.log} />
        </View>
    )
}