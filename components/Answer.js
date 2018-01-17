import React from 'react'
import { Text, View, Button } from 'react-native'

export default ()=>{
    return (
        <View>
            <Text>Answer:</Text>
            <Text>{this.props.a}</Text>
            <Button title="Correct" onPress={console.log} />
            <Button title="Wrong" onPress={console.log} />
        </View>
    )
}