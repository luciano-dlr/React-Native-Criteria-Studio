import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Input } from "@rneui/base";
import styles from "./Styles/Styles";
import { Text, View } from 'react-native';

//screens
import Home from "./Screens/HomeScreen";
import UserScreen from "./Screens/UserScreen";

const tab = createBottomTabNavigator();

function MyTabs() {

    const [loginName, setText] = useState('');

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
                <View style={styles.container}>


                    <Text style={styles.title}> Ingrese Sus Datos </Text>

                    <Input id='name' style={styles.title} placeholder='Nombre' onChangeText={newText => setText(newText)} defaultValue={loginName} />

                    <Input id='email' style={styles.title} placeholder='Email' />

                    <View>
                        <Text style={styles.title}> datos:{loginName}</Text>
                    </View>

                </View>
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
        })}
        >
            <tab.Screen name='Home' component={Home} />
            <tab.Screen name='User' component={UserScreen} />
        </tab.Navigator>
    </NavigationContainer>

    )
}
export default MyTabs;

// {


//     return (
//         <NavigationContainer>
//             <MyTabs />
//         </NavigationContainer>
//     );
// }



// barba.aviso.piba