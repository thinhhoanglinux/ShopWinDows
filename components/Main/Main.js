import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Shop from './Shop/Shop';
export default class Main extends Component {
    openMenu() {
        const { navigate } = this.props.navigation;
        navigate('DrawerOpen');
    }
    render() {
        return (
            <Shop onOpen={() => { this.openMenu() }} />
        );
    }
}