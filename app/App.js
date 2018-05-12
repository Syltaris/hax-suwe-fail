/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import HomeScreen from './Screens/HomeScreen';
import NetworkScreen from './Screens/NetworkScreen';
import ChatScreen from './Screens/ChatScreen';
import LogbookScreen from './Screens/LogbookScreen';

import CustomDrawerComponent from './Components/CustomDrawerComponent';

export default RootNavigator = DrawerNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  // LoginScreen: {
  //   screen: LoginScreen,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  // RegisterScreen: {
  //   screen: RegisterScreen,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  NetworkScreen: {
    screen: NetworkScreen,
    navigationOptions: {
      header: null,
    },
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      header: null,
    }
  },
  LogbookScreen: {
    screen: LogbookScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  contentComponent: CustomDrawerComponent,
})
