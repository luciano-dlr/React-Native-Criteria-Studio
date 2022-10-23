import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

//screens
import HomeScreen, { name } from "./Screens/HomeScreen";
import UserScreen from "./Screens/UserScreen";


const tab = createBottomTabNavigator();

function MyTabs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    console.log(name)


    return (<NavigationContainer>

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

            <tab.Screen name='Home'>
                {() => <HomeScreen name={name} setName={setName} email={email} setEmail={setEmail} />}
            </tab.Screen>
            <tab.Screen name='User'>
                {() => <UserScreen name={name} email={email} />}
            </tab.Screen>


        </tab.Navigator>
    </NavigationContainer>

    )
}
export default MyTabs;
