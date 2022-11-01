import React from "react";
import HomeScreen from "./Screens/HomeScreen.js";
import UserScreen from "./Screens/UserScreen.js";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import styles from "./Styles/Styles";


const App = () => {

  const Stack = createNativeStackNavigator();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const array = [{ usuario: name }, { email: email }];


  // console.warn({ array })


  return (

    <NavigationContainer styles={styles.displayNone}>
      <Stack.Navigator initialRouteName="Home" >

        <Stack.Screen name='Home' styles={styles.displayNone}>
          {() => <HomeScreen name={name} setName={setName} email={email} setEmail={setEmail} array={array} />}
        </Stack.Screen>

        <Stack.Screen name='User' styles={styles.displayNone}>
          {() => <UserScreen name={name} email={email} array={array} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  )
};

export default App;

