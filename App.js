
import HomeScreen from "./Screens/HomeScreen.js";
import UserScreen from "./Screens/UserScreen.js";


import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import styles from "./Styles/Styles";
import { firebaseConfig } from "./firebase-config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React from "react";
import { Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';

import { Input } from '@rneui/themed';


import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs()

const LoginScreen = () => {

  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  const crearCuenta =  () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then( () => {
        console.log("cuenta creada");
        const user = auth.currentUser;
        console.log(user)
        email === user.email
        Alert.alert("bienvenido" + " " +  user.email)

    })
    .catch(error=>{
      
     
    })

  }
  const ingresarCuenta = () => {
    signInWithEmailAndPassword(auth,email,password)
    .then(() =>{
      const user = auth.currentUser;
      console.log("logeado papa!");
      navigation.navigate('home')
      Alert.alert("Ya estas logueado" + " " + user.email)
    })
      .catch(error =>{
        
        

      })
    };
  

return(
<View style={styles.container}>

<Image source={require('./assets/logoCriteria.jpg')} style={styles.imagen} />

<Input type='email' id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={(text) => setEmail(text)} />

<Input secureTextEntry={true} id='password' style={styles.imputs} placeholder='Ingresar Contraseña'onChangeText={(text) => setPassword(text)} />


<View >
    <TouchableOpacity onPress={ingresarCuenta()}>
      
        <Text style={styles.titleButton} >Ingresar</Text>

    </TouchableOpacity>

    <TouchableOpacity onPress={crearCuenta()} >
        <Text style={styles.titleButton} >Registrarse</Text>

    </TouchableOpacity>

titleButton


</View>
</View >


  );

}

const homeScreen = () =>{

  return(
    <View>
      <Text>Bienvenido Usuario</Text>
    </View>
  )
}

const App = () => {

  const Stack = createNativeStackNavigator();

  
  return (
    <NavigationContainer>
      <Stack.Navigator Container initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="home" component={homeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer styles={styles.displayNone}>
    //   <Stack.Navigator initialRouteName="Home" >

    //     <Stack.Screen name='Home' styles={styles.displayNone}>
    //       {() => <HomeScreen states={[{ name: "Contraseña", value: password, setValue: setPassword }, { name: "Email", value: email, setValue: setEmail }]} />}
    //     </Stack.Screen>

    //     <Stack.Screen name='User' styles={styles.displayNone}>
    //       {() => <UserScreen states={[password, email]} />}
    //     </Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>

)
};

export default App;



  //1 instalar firebase npm firebae, en el proyecto

  // Crear una cuenta en firebase 

  // firebase web, (no firebase hosting) 

  // firebase.js

  // documentacion de firebase, autentication de usuarios, crear usuario, (web)

  //importar el auth del archivo del ale

  // utentication de 0 

  // quest, login y registrer con firebase, utilizar la autentication 


  //Navigation, navigate