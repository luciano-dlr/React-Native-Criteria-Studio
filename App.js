import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from "react";

// Pantallas 
import { HomeScreen } from "./Screens/HomeScreen.js";
import { LoginScreen } from './Screens/LoginScreen.js';
import { RegisterScreen } from "./Screens/RegisterScreen.js";


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator Container initialRouteName="login">

        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="registerScreen" component={RegisterScreen} />
        <Stack.Screen name="home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer >
  )
};

export default App;



// carpeta de rutas, si un suario se loguea, necesitas rutas publicas


//                app con usuarios

//rutas publicas son aquellas que el usuario puede acceder sin estar logueado. registre y login

//rutas privadas son aquellas rutas que necesitan una auth para que el usuario pueda acceder a ellas, ej home prifle cotizacion etc