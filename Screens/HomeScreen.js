import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import { firebaseConfig } from "../firebase-config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";



// Denomino las props a los imputs

const HomeScreen = ({ states }) => {

    const redirect = useNavigation();

    const [password, email] = states;

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)

    const crearCuenta = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.warn("cuenta creada");
                const user = userCredential.user;
                console.log(user)
            })
            .catch(error => {
                console.warn("error al registrar")
            })
    }

    const ingresarCuenta = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.warn("cuenta logueada");
                const user = userCredential.user;
                console.log(user)
            })
            .catch(error => {
                console.warn("error al registrar")
            })
    }

    return (

        <View style={styles.container} >

            <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagen} />

            <Input id='email' style={styles.imputs} placeholder='Ingresar Email' defaultValue={email.value} onChangeText={(value) => email.setValue(value)} />

            <Input id='password' style={styles.imputs} placeholder='Ingresar Contraseña' defaultValue={password.value} onChangeText={(value) => password.setValue(value)} />


            <View >
                <Button
                    onPress={() => { redirect.navigate("User") }}
                    type="clear" styles={styles.buttonContainer} >

                    <Text style={styles.titleButton} >Ingresar</Text>
                    {/* {() => { states }} */}

                </Button>

                <TouchableOpacity onPress={ingresarCuenta()}>
                    <Text style={styles.titleButton} >Ingresar cuenta 2.0</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={crearCuenta()}>
                    <Text style={styles.titleButton} >Registrar 2.0</Text>

                </TouchableOpacity>




            </View>

        </View >

    )

};



export default HomeScreen;



