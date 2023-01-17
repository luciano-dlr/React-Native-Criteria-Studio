
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import styles from "../Styles/Styles";
import { firebaseConfig } from "../firebase-config.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React from "react";
import { Text, View, Alert, Button } from 'react-native';
import { Input } from '@rneui/themed';







export const RegisterScreen = () => {

    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const crearCuenta = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("cuenta creada");
                const user = auth.currentUser;
                console.log(user)
                Alert.alert("bienvenido " + user.email);

            })
            .catch(() => {
                // console.log("error")
            })
    }
    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setError(' Las contraseñas no coinciden ');
        } else {
            setError('');
            // Perform other actions
            crearCuenta();
        }
    };

    return (

        <View style={styles.container}>

            <Input type='email' id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={(text) => setEmail(text)} />

            <Input secureTextEntry={true} id='password' style={styles.imputs} placeholder='Ingresar Contraseña' onChangeText={(text) => setPassword(text)} />

            {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}
            <Input placeholder="Confirmar Contraseña" value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} secureTextEntry={true} />

            <View >
                <Text style={{ color: 'white', fontSize: 12, }}>Contraseña minimo 6 caracteres</Text>

                <Button title="Registrarse" onPress={handleSubmit} />

            </View>
            <View>

                <Button title="Regresar al login " onPress={() => { navigation.navigate("login") }} ></Button>
            </View>

        </View>

    );

};
