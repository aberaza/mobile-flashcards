import React from 'react'
import { Text, View, Button } from 'react-native'

export default ()=>{
    return (
        <View>
            <Text>this.props.q</Text>
            <Button title="Answer" onPress={console.log} />
        </View>
    )
}