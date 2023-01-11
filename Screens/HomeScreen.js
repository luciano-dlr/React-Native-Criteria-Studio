import React from "react";
import { Text, View, Image } from 'react-native';
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";


// Denomino las props a los imputs

const HomeScreen = ({ states }) => {

    const redirect = useNavigation();

    const [name, email] = states;

    return (

        <View style={styles.container}>

            <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagen} />

            <Input id='name' style={styles.imputs} placeholder='Ingresar Nombre' defaultValue={name.value} onChangeText={(value) => name.setValue(value)} />

            <Input id='email' style={styles.imputs} placeholder='Ingresar Email' defaultValue={email.value} onChangeText={(value) => email.setValue(value)} />

            <View >
                <Button
                    onPress={() => { redirect.navigate("User") }}
                    type="clear" styles={styles.buttonContainer} >

                    <Text style={styles.titleButton} >Ingresar</Text>
                    {/* {() => { states }} */}

                </Button>
                {/* <Button
                    //type="outline"
                    title='Ingresar'
                    titleStyle={{ color: '#fff', fontSize: 20 }}
                    onPress={() => { redirect.navigate("User") }} type="clear" styles={styles.buttonContainer}>
                </Button> */}

            </View>

        </View >

    )

};



export default HomeScreen;



console.log("asd")