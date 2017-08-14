import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Authentication extends Component {
    static navigationOptions = {
        header: null
        // headerTitle: 'Authentication ABC',
        // headerStyle:{
        //     backgroundColor: '#00000000'
        // },
        // headerTitleStyle:{
        //     alignSelf: 'center'
        // }
    }
    render() {
        const { container, text } = styles;
        return (
            <View style={container} >
                <Text>Authentication</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d6d6d6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30
    }
});