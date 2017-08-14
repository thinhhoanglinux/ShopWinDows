import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Search extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container} >
                <Text>Search</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});