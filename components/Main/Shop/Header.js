import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

import icLogo from '../../../src/media/appIcon/ic_logo.png';
import icMenu from '../../../src/media/appIcon/ic_menu.png';
const { height } = Dimensions.get('window');
export default class Header extends Component {
    render() {
        const { topbar, header1, textInput, icon, title } = styles;
        return (
            <View style={topbar} >
                <View style={header1} >
                    <TouchableOpacity onPress={this.props.onOpen} >
                        <Image source={icMenu} style={icon} />
                    </TouchableOpacity>
                    <Text style={title} >Wearing a Dress</Text>
                    <Image source={icLogo} style={icon} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder='What do you want to buy?' underlineColorAndroid='transparent' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topbar: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        height: height / 8,
        backgroundColor: '#38A277',
        justifyContent: 'space-around'
    },
    header1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        padding: 5,
        paddingLeft: 10,
        height: height / 10 / 2,
        backgroundColor: 'white',
    },
    icon: {
        width: 25,
        height: 25
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic'
    }
});
