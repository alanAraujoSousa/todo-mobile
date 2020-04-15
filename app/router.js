import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthStack from "./routes/auth.route";
import HomeStack from "./routes/home.route";

import AuthLoading from "./scenes/auth/AuthLoading";
import AuthProvider from "./providers/auth.provider";

const AppStack = createSwitchNavigator(
    {
        Loading: AuthLoading,
        Auth: AuthStack,
        App: HomeStack,
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