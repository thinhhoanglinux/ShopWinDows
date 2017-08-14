import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class OrderHistory extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { container, text } = styles;
        return (
            <View style={container} >
                <Text>OrderHistory</Text>
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