import React from "react";
import { Text, View } from 'react-native';
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';



const Home = () => {

    const [loginName, setText] = useState('');

    return (
        <View style={styles.container}>


            <Text style={styles.title}> Ingrese Sus Datos </Text>

            <Input id='name' style={styles.title} placeholder='Nombre' onChangeText={newText => setText(newText)} defaultValue={loginName} />

            <Input id='email' style={styles.title} placeholder='Email' />

            <Text style={styles.title}> datos:{loginName}</Text>


        </View>
    )

};


export default Home;