import React from "react";
import { Text, View } from 'react-native';
import styles from "../Styles/Styles";

import { Input } from '@rneui/themed';




const HomeScreen = ({ name, setName, email, setEmail }) => {





    return (

        <View style={styles.container}>
            <Text style={styles.title}> Ingrese Sus Datos </Text>
            <Input id='name' style={styles.title} placeholder='Nombre' onChangeText={newName => setName(newName)} defaultValue={name} />
            <Input id='email' style={styles.title} placeholder='Email' onChangeText={newEmail => setEmail(newEmail)} defaultValue={email} />
            <View>
                <Text style={styles.title} ></Text>
            </View>

        </View>

    )

};



export default HomeScreen;

