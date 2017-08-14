import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Cart from './Cart/Cart';
import Home from './Home/Home';
import Search from './Search/Search';
import Contact from './Contact/Contact';

import home0 from '../../../src/media/appIcon/home0.png';
import cart0 from '../../../src/media/appIcon/cart0.png';
import search0 from '../../../src/media/appIcon/search0.png';
import contact0 from '../../../src/media/appIcon/contact0.png';
export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={home0}
                    style={[{ width: 30, height: 30 }, { tintColor: tintColor }]}
                />
            )
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            tabBarLabel: 'Cart',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={cart0}
                    style={[{ width: 30, height: 30 }, { tintColor: tintColor }]}
                />
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={search0}
                    style={[{ width: 30, height: 30 }, { tintColor: tintColor }]}
                />
            )
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarLabel: 'Contact',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={contact0}
                    style={[{ width: 30, height: 30 }, { tintColor: tintColor }]}
                />
            )
        }
    }
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: '#F6F5F7'
            },
            labelStyle: {
                fontSize: 10,
            },
            tabStyle: {
                height: 50,
                paddingTop: 20
            },
            activeTintColor: '#38A277',
            inactiveTintColor: '#a5a4a5',
            showIcon: true,
            indicatorStyle: {
                backgroundColor: '#38A277'
            }
        }
    }
);