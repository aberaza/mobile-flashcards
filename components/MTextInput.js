import React from 'react'
import { View, TextInput } from 'react-native'

import * as C from '../utils/colors'
import styles from '../utils/styles'

export default MTextInput = (props) => (
    <View style={{ backgroundColor:'cyan', alignSelf : 'stretch'}}>
    <View style={{
        flex:1,
        flexDirection:'column',
        justifyContent: 'space-around',
        height : 48,
        backgroundColor : "green"
    }}>
        <TextInput style={styles.standardInput} {...props} underlineColorAndroid='red'/>
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: C.BLACK
        }}></View>
    </View>
    </View>
)
