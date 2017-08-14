import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Menu from './Menu';
import Main from './Main';

export const MenuStack = StackNavigator({
    Menu_Screen: {
        screen: Menu,
        navigationOptions: {
            header: null
        }
    },
    Authentication_Screen: { screen: Authentication },
    ChangeInfo_Screen: { screen: ChangeInfo },
    OrderHistory_Screen: { screen: OrderHistory }
});