import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'

import styles from '../utils/styles'

export const Card = (props) => (
    <KeyboardAvoidingView style={[styles.cardContainer, styles.card]} behavior='height'>
        {props.children}
    </KeyboardAvoidingView>
)

export const CardTitle = (props) => (
    <View style={styles.cardTitle}>
        <Text style={styles.cardTitleText}>{props.children}</Text>
    </View>
)

export const CardContent = (props) => (
    <View style={[styles.cardContent]}>
        {props.children}
    </View>
)

export const CardActions = (props) => (
    <View>
        <View style={styles.separator} />
        <View style={styles.cardActions}>
            {props.children}
        </View>
    </View>
)