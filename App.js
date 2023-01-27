import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas 
import { HomeScreen } from "./Screens/HomeScreen.js";
import { LoginScreen } from './Screens/LoginScreen.js';
import { RegisterScreen } from "./Screens/RegisterScreen.js";
import { CotizacionScreen } from './Screens/CotizacionScreen.js'


const App = () => {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator Container initialRouteName="login">

        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="registerScreen" component={RegisterScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="cotizacion" component={CotizacionScreen} />

      </Stack.Navigator>
    </NavigationContainer >
  )
};

export default App;
