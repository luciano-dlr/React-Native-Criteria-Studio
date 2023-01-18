import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { firebaseConfig } from "../firebase-config.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { View, Image, Alert, Button } from 'react-native';
import { Input } from '@rneui/themed';
import styles from "../Styles/Styles";

export const LoginScreen = () => {

    //Navigation para pasar de pantalla
    const navigation = useNavigation();

    // Variables para ingresar
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    //variables para llevar la informacion a firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const ingresarCuenta = () => {

        //funcion importada de firebase para login con email y password
        signInWithEmailAndPassword(auth, email, password)

            .then(() => {

                //auth para controlar el usuario en console log
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

    return (
        <View style={styles.container}>

            <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagen} />

            <Input type='email' id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={(text) => setEmail(text)} />

            <Input secureTextEntry={true} id='password' style={styles.imputs} placeholder='Ingresar Contraseña' onChangeText={(text) => setPassword(text)} />

            <View >

                <Button title="Login" onPress={ingresarCuenta} />

            </View>

            <View>

                <Button title="registerScreen" onPress={() => { navigation.navigate("registerScreen") }} />

            </View>

        </View>
    );

};


