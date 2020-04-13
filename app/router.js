import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthStack from "./routes/auth";

import AuthLoading from "./scenes/auth/AuthLoading";
import AuthProvider from "./providers/auth";

//APP ROUTES STACK
const AppStack = createSwitchNavigator(
    {
        Loading: AuthLoading,
        Auth: AuthStack,
    },
    {initialRouteName: 'Loading'}
);

const Navigator = createAppContainer(AppStack);

export default function Router(props) {
    return (
        <AuthProvider>
            <Navigator/>
        </AuthProvider>
    );
}