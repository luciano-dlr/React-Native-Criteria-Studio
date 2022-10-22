import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';


//screens

import Home from "./Screens/HomeScreen";
import UserScreen from "./Screens/UserScreen";

const tab = createBottomTabNavigator();

function MyTabs() {



    return (
        <tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'information-circle'
                        : 'information-circle-outline';
                } else if (route.name === 'User') {
                    iconName = focused ? 'list' : 'list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
        })}
        >
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