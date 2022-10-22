import React from "react";
import { Text, View } from 'react-native';
import styles from "../Styles/Styles";
import { loginName } from "./HomeScreen";



const UserScreen = () => {



    return (<View style={styles.container}>

        <Text style={styles.title}>
            Datos de Usuario
        </Text>

        <Text style={styles.title}>{loginName}</Text>

    </View>)

};


export default UserScreen;