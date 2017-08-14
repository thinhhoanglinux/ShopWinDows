import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import Authentication from './Authentication/Authentication';

import Main from './Main/Main';
import Menu from './Main/Menu';
import Shop from './Main/Shop/Shop';

import ChangeInfo from './ChangeInfo/ChangeInfo';

import OrderHistory from './OrderHistory/OrderHistory';

export const MainStack = StackNavigator({
    Main_Screen: {
        screen: Main,
        navigationOptions:{
            header: null
        }
    },
    Authentication_Screen: { screen: Authentication },
    ChangeInfo_Screen: { screen: ChangeInfo },
    OrderHistory_Screen: { screen: OrderHistory },
    Shop_Screen:{ screen: Shop }
});

export const Drawer = DrawerNavigator({
    Menu: {
        screen: MainStack
    }
}, {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);