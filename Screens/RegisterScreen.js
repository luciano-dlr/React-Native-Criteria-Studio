import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { firebaseConfig } from "../firebase-config.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Text, View, Alert, Button } from 'react-native';
import { Input } from '@rneui/themed';
import styles from "../Styles/Styles";

export const RegisterScreen = () => {

    //Navigation para pasar de pantalla
    const navigation = useNavigation();

    // Variables para crear cuenta
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    //variables para llevar la informacion a firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // funcion para registrarse que utiliza la funcion de creacion de cuenta dentro de un else para confirmar contraseña primero
    const registrase = () => {

        // validacion para que el usuario cree 2 contraseñas iguales para confirmar la contraseña ingresada

        if (password !== confirmPassword) {

            setError(' Las contraseñas no coinciden ');

        } else {

            setError('');
            // Llamado a la funcion crearCuenta para pushear la informacion ingresada por el usuario a firebase
            crearCuenta();
        }
    };

    // funcion Creacion de cuenta 
    const crearCuenta = () => {

        //funcion importada de firebase para registrar con email y password
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {

                //auth para controlar el usuario en console log
                const user = auth.currentUser;
                console.log("cuenta creada");
                console.log(user)
                Alert.alert("bienvenido " + user.email);
                navigation.navigate("login")
            })
            .catch(() => {
                // console.log("error")
            })
    }

    return (

        <View style={styles.container}>

            <Input type='email' id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={(text) => setEmail(text)} />

            <Input secureTextEntry={true} id='password' style={styles.imputs} placeholder='Ingresar Contraseña' onChangeText={(text) => setPassword(text)} />

            {/*TEXTO ERROR COLOR ROJO "contraseñas no coinciden"*/}
            {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}

            <Input placeholder="Confirmar Contraseña" style={styles.imputs} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} secureTextEntry={true} />

            <View >

                <Text style={{ color: 'white', fontSize: 12, }}>Contraseña minimo 6 caracteres</Text>

                <Button title="Registrarse" onPress={registrase} />

            </View>
            <View>

                <Button title="Regresar al login " onPress={() => { navigation.navigate("login") }} ></Button>

            </View>

        </View>

    );

};
