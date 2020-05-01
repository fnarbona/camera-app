import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import LoginScreen from './src/screens/screen.login';
import HomeScreen from './src/screens/screen.home';
import CameraScreen from './src/screens/screen.camera';
import CameraRollScreen from './src/screens/screen.camera-roll';

const navigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: true,
        headerBackTitle: 'Sign Out'
      },
    },
    CameraScreen: {
      screen: CameraScreen,
    },
    CameraRollScreen: {
      screen: CameraRollScreen,
      navigationOptions: {
        headerShown: true,
        headerBackTitle: 'Back'
      },
    }
  },
  {
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
      title: 'KAMERA',
      headerShown: false,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        backgroundColor: 'rgb(41, 43, 45)'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'rgb(251, 70, 69)'
    }
  }
);

export default createAppContainer(navigator);
