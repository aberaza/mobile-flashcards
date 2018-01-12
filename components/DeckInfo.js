import React from 'react'
import { Text, View } from 'react-native'

import styles from '../utils/styles'

export default ({title="", questions=[]}) => {
    return (
        <View style={styles.deckItem}>
            <Text style={styles.deckName}>{title}</Text>
            <Text style={styles.deckQuestionNb}>#{questions.length} cards</Text>
        </View>
    )
}
