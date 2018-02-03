import React from 'react'
import { View, TextInput } from 'react-native'

import * as C from '../utils/colors'
import styles from '../utils/styles'

export default MTextInput = (props) => (
        <View style={{
        flexDirection:'column',
        alignItems: 'stretch',
        justifyContent: 'center'
    }}>
        <TextInput style={styles.standardInput} 
            underlineColorAndroid='rgba(0,0,0,0)'
            editable={true}
            autoFocus={false}
            placeholderTextColor={C.YELLOW}
            {...props} 
        />
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: C.RED_LIGHT
        }}></View>
    </View>
)
