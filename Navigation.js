import React from "react";
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens

import Home from "./Screens/HomeScreen";
import UserScreen from "./Screens/UserScreen";

const tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <tab.Navigator>
            <tab.Screen name='Home' component={Home} />
            <tab.Screen name='User' component={UserScreen} />
        </tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}



// barba.aviso.piba