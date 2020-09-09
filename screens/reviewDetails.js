import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

export default function ReviewDetails(stackProps) {

    const pressHandler = () => {
        // stackProps.navigation.navigate('Home')
        stackProps.navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>ReviewDetails Screen</Text>
            <Button title='Back to Home' onPress={pressHandler}/>
        </View>
    )
}