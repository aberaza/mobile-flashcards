import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../utils/styles'

export default ({title="", questions=[], onPressItem, ...props}) => {

    return (
        <TouchableOpacity onPress={_=> onPressItem(title)}>
            <View style={styles.deckItem}>
                <Text style={styles.deckName}>{title}</Text>
                <Text style={styles.deckQuestionNb}>#{questions.length} cards</Text>
            </View>
        </TouchableOpacity>
    )
}
