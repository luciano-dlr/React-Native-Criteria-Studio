import React from "react";
import { Text, View } from 'react-native';
import styles from "../Styles/Styles";
import Home, { name } from "./HomeScreen";



const UserScreen = ({ name, email }) => {





    return (<View style={styles.container}>

        <Text style={styles.title}>
            Usuariosss
        </Text>
        <View>
            <Text style={styles.title} > User:{name}</Text>
        </View>
        <View>
            <Text style={styles.title} > Email:{email}</Text>
        </View>





    </View>)

};



export default UserScreen;