import React from "react";
import MyTabs from "./Navigation.js";
import HomeScreen from "./Screens/HomeScreen.js";
import UserScreen from "./Screens/UserScreen.js";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import styles from "./Styles/Styles";




const App = () => {

  //Renderizo MyTabs en la app js porque es el componente mas alto en el agoritmo de rutas de la app luego de la misma app.js

  const Stack = createNativeStackNavigator();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (

    <NavigationContainer styles={styles.displayNone}>
      <Stack.Navigator initialRouteName="Home" >

        <Stack.Screen name='Home' styles={styles.displayNone}>
          {() => <HomeScreen name={name} setName={setName} email={email} setEmail={setEmail} />}
        </Stack.Screen>

        <Stack.Screen name='User' styles={styles.displayNone}>
          {() => <UserScreen name={name} email={email} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  )
};

export default App;

