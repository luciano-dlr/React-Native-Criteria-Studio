import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import styles from "../Styles/Styles";
import { firebaseConfig } from "../firebase-config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React from "react";
import { Text, View, Image, TouchableOpacity, Alert, TextInput, Button } from 'react-native';
import { Input } from '@rneui/themed';

import { registerScreen } from "./RegisterScreen.js";
import { HomeScreen } from "./HomeScreen.js";

import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";





export const LoginScreen = ({ states }) => {

    // const [password, email] = states;

    // states = [email, password]
    // console.log(states)

    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();




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

                console.log("error en login ")
                Alert.alert("Usuario y contraseña no registrados")
            })
    };

    const googleBoton = () => {

        signInWithRedirect(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <View style={styles.container}>

            <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagen} />

            <Input type='email' id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={(text) => setEmail(text)} />
            <Input secureTextEntry={true} id='password' style={styles.imputs} placeholder='Ingresar Contraseña' onChangeText={(text) => setPassword(text)} />

            <View >
                <Button title="Login" onPress={ingresarCuenta} />
            </View>
            <View >
                <Button title="Google" onPress={googleBoton} />
            </View>
            <View>
                <Button title="registerScreen" onPress={() => { navigation.navigate("registerScreen") }} ></Button>
            </View>
        </View>
    );

};


