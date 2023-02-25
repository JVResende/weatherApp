import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { Login } from "../screens/login";

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Navigator >
    )
}