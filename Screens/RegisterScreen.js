// import React from 'react';
// import { useState } from 'react';
// import { Text, View, Image, TouchableOpacity, Button, Input } from 'react-native';
// import { useNavigation } from "@react-navigation/native";
// import styles from "../Styles/Styles";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "../firebase-config.js";






// export const RegisterScreen = () => {

//     // states = [email, password]
//     // console.log(states)
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');

//     const app = initializeApp(firebaseConfig);

//     const auth = getAuth(app);

//     const crearCuenta = () => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(() => {
//                 console.log("cuenta creada");
//                 const user = auth.currentUser;
//                 console.log(user)
//                 Alert.alert("bienvenido " + user.email)

//             })
//             .catch(() => {
//                 console.log("error")
//             })
//     }

//     return (
//         <View>
//             <View>
//                 <Input type='email' id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={(text) => setEmail(text)} />
//                 <Input secureTextEntry={true} id='password' style={styles.imputs} placeholder='Ingresar Contraseña' onChangeText={(text) => setPassword(text)} />
//             </View>
//             <View >
//                 <Button title="Registrar" />
//             </View>
//         </View>
//     )
// };



import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import styles from "../Styles/Styles";
import { firebaseConfig } from "../firebase-config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Cre } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React from "react";
import { Text, View, Image, TouchableOpacity, Alert, TextInput, Button } from 'react-native';
import { Input } from '@rneui/themed';

import { registerScreen } from "./RegisterScreen.js";
import { HomeScreen } from "./HomeScreen.js";




export const RegisterScreen = () => {

    // const [password, email] = states;

    // states = [email, password]
    // console.log(states)

    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);




    // const ingresarCuenta = () => {
    //     signInWithEmailAndPassword(auth, email, password)

    //         .then(() => {

    //             const user = auth.currentUser;
    //             console.log({ user });
    //             console.log("logeado papa!");
    //             navigation.navigate("home")
    //             Alert.alert("Ya estas logueado" + " " + user.email)

    //         })
    //         .catch(() => {

    //             console.log("error en login ")
    //             Alert.alert("Usuario y contraseña no registrados")
    //         })
    // };

    const crearCuenta = () => {
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(() => {
                console.log("cuenta creada");
                const user = auth.currentUser;
                console.log(user)
                Alert.alert("bienvenido " + user.email)

            })
            .catch(() => {
                console.log("error")
            })
    }

    return (
        <View style={styles.container}>

            {/* <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagen} /> */}

            <Input type='email' id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={(text) => setEmail(text)} />
            <Input secureTextEntry={true} id='password' style={styles.imputs} placeholder='Ingresar Contraseña' onChangeText={(text) => setPassword(text)} />
            <Input id='name' style={styles.imputs} placeholder='Ingresar Nombre' onChangeText={(text) => setName(text)} />


            <View >
                <Button title="Registrarse" onPress={crearCuenta} />
            </View>
            <View>
                <Button title="Regresar al login " onPress={() => { navigation.navigate("login") }} ></Button>
            </View>
        </View>
    );

};
