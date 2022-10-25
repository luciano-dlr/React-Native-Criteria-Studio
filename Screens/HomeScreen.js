import React from "react";
import { Text, View, Image } from 'react-native';
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";



// Denomino las props a los imputs

const HomeScreen = ({ name, setName, email, setEmail }) => {


    // Le doy la funcion navigation a la constante redirect para crear el boton de cambio de pantalla
    const redirect = useNavigation();

    return (

        <View style={styles.container}>

            <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagen} />

            <Input id='name' style={styles.imputs} placeholder='Ingresar Nombre' onChangeText={newName => setName(newName)} defaultValue={name} />

            <Input id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={newEmail => setEmail(newEmail)} defaultValue={email} />

            <View >
                <Button onPress={() => { redirect.navigate("User") }} type="clear" styles={styles.buttonContainer} >

                    <Text style={styles.titleButton} >Ingresar Cuenta</Text>

                </Button>
            </View>

        </View >

    )

};

export default HomeScreen;



