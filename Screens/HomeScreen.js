import React from "react";
import { Text, View } from 'react-native';
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';



const Home = () => {



    return (
        <View style={styles.container}>


            <Text style={styles.title}>
                Ingrese Sus Datos
            </Text>

            <Input id='name' style={styles.title}
                placeholder='Nombre'
            />
            <Input id='email' style={styles.title}
                placeholder='Email'
            />


        </View>
    )

};


export default Home;