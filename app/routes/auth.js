import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import RegisterScreen from "../scenes/auth/Register";
import LoginScreen from "../scenes/auth/Login";

import {headerStyle, headerTitleStyle} from '../theme'

const AuthStack = createStackNavigator(
    {
        Register: RegisterScreen,
        Login: LoginScreen
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: () => ({headerStyle, headerTitleStyle})
    }
);

export default AuthStack;