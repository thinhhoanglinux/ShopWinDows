import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Tabs } from './RouteShop';
import Header from './Header';
import icMenu from '../../../src/media/appIcon/ic_menu.png';
export default class Shop extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container} >
                <Header onOpen={this.props.onOpen} />
                <Tabs />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});