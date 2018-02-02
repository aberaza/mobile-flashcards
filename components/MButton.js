import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import * as C from '../utils/colors'
import styles from '../utils/styles'

export default MButton = (props) => (
    <View style={{flex:1, flexDirection:'column', alignItems:'stretch'}}>
        <TouchableOpacity style={styles.buttonBasic} {...props}> 
            <Text style={styles.buttonText}>{props.title.toUpperCase()}</Text>
        </TouchableOpacity>
    </View>
)