
// import HomeScreen from "./Screens/HomeScreen.js";
import UserScreen from "./Screens/UserScreen.js";
// import { RegisterScreen } from './Screens/RegisterScreen';



import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import styles from "./Styles/Styles";
import { firebaseConfig } from "./firebase-config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React from "react";
import { Text, View, Image, TouchableOpacity, Alert, TextInput, Button } from 'react-native';
import { Input } from '@rneui/themed';



// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs()

const LoginScreen = () => {

  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);


  // const crearCuenta = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(() => {
  //       console.log("cuenta creada");
  //       const user = auth.currentUser;
  //       console.log(user)
  //       Alert.alert("bienvenido " + user.email)

  //     })
  //     .catch(() => {
  //       console.log("error")
  //     })

  // }

  const ingresarCuenta = () => {
    signInWithEmailAndPassword(auth, email, password)

      .then(() => {

        const user = auth.currentUser;
        console.log({ user });
        console.log("logeado papa!");
        navigation.navigate("home")
        Alert.alert("Ya estas logueado" + " " + user.email)

      })
      .catch(() => {
        console.log("error en funtion")


      })
  };

  return (
    <View style={styles.container}>

      <Image source={require('./assets/logoCriteria.jpg')} style={styles.imagen} />

      <Input type='email' id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={(text) => setEmail(text)} />
      <Input secureTextEntry={true} id='password' style={styles.imputs} placeholder='Ingresar Contraseña' onChangeText={(text) => setPassword(text)} />


      <View >
        <Button title="Login" onPress={ingresarCuenta} />

      </View>

      <View>
        <Button title="registerScreen" onPress={() => { navigation.navigate("registerScreen") }} >
          <Text>Pepe
          </Text>
        </Button>

      </View>

    </View>


  );

}


const RegisterScreen = () => {

  return (
    <View>
      <Text>

      </Text>

    </View>
  )
};


const HomeScreen = () => {

  return (
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
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="registerScreen" component={RegisterScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
