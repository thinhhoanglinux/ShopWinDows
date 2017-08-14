import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
    render() {
        const { container, textButton } = styles;
        const { navigate } = this.props.navigation;
        return (
            <View style={container} >
                <TouchableOpacity onPress={() => {navigate('Authentication_Screen')}} >
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigate('ChangeInfo_Screen')}} >
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigate('OrderHistory_Screen')}} >
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
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
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    }
});