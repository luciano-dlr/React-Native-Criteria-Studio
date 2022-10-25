import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import styles from "./Styles/Styles";


//screens de la app

import HomeScreen from "./Screens/HomeScreen";
import UserScreen from "./Screens/UserScreen";

//creo la constante tab = funcion de navigation,  para crear los componentes tab.(propiedades de la libreria navigation)

const tab = createBottomTabNavigator();

function MyTabs() {

    //  Creo los estados de los imputs con un valor inicial vacio '' debido a que los voy a exportar por props a las rutas inferiores

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    return (

        // Todo dentro de Navigation Container, por documentacion se debe utilizar para poder usar la funcion createBottomTabNavigator(); = tab

        <NavigationContainer styles={styles.displayNone}>
            <tab.Navigator screenOptions={({ route }) => ({

                // Utilizo la constante tab parausar la funcion importada navigator, y crear el componente tab.navigator

                tabBarIcon: ({ focused, color, size }) => {

                    // Con codigo sacado de la documentacion denomino los iconos con el if / else 

                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'information-circle'
                            : 'information-circle-outline';
                    } else if (route.name === 'User') {
                        iconName = focused ? 'list' : 'list';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;

                },

                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',

            })}
            // Creo las screens partiendo de la constante tab usando la propiedad .screen
            // y por otro lado paso los estados por props a las pantallas/rutas hijas 
            >

                <tab.Screen name='Home' styles={styles.displayNone}>
                    {() => <HomeScreen name={name} setName={setName} email={email} setEmail={setEmail} />}
                </tab.Screen>

                <tab.Screen name='User' styles={styles.displayNone}>
                    {() => <UserScreen name={name} email={email} />}
                </tab.Screen>

            </tab.Navigator>
        </NavigationContainer>

    )
}

export default MyTabs;
