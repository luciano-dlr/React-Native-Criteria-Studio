import React from "react";
import { Text, View, Image } from 'react-native';
import styles from "../Styles/Styles";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

// Una vez en UserScreen traigo las props de navigation.js para renderizarlos nuevamente

const UserScreen = ({ name, email }) => {

    // Denomino la funcion navigation a la constante redirect para crear el boton de cambio de pantalla
    const redirect = useNavigation();

    return (<View style={styles.containerUser}>

        <Text style={styles.UserTitle}>
            Bienvenido A Criteria
        </Text>

        <View>
            <Text style={styles.UserTitle_childs} > {name}</Text>
        </View>

        <View>
            <Text style={styles.UserTitle_childs_email} >{email}</Text>
        </View>
        <View style={styles.containerButton_user}>

            <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagenUser} />

            <Button onPress={() => { redirect.navigate("Home") }} type="clear" styles={styles.buttonContainer} >

                <Text style={styles.titleButtonUser} > ↩  </Text>

            </Button>
        </View>


    </View>)

};

export default UserScreen;