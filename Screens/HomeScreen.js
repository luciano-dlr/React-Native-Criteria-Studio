import React from "react";
import { Text, View, Image } from 'react-native';
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";






// Denomino las props a los imputs

const HomeScreen = ({ name, setName, email, setEmail, array }) => {

    const redirect = useNavigation();

    useEffect(() => {

        // const lowerCase = array.map((item) => {
        //     item = item.toLowerCase();
        // })

    }, [array])


    // console.log({ array });

    return (

        <View style={styles.container}>

            <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagen} />

            <Input id='name' style={styles.imputs} placeholder='Ingresar Nombre' onChangeText={newName => setName(newName)} defaultValue={name} />

            <Input id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={newEmail => setEmail(newEmail)} defaultValue={email} />

            <View >
                <Button onPress={() => { redirect.navigate("User") }} type="clear" styles={styles.buttonContainer} >

                    <Text style={styles.titleButton} >Ingresar</Text>

                </Button>
                <Button
                    //type="outline"
                    title='Ingresar'
                    titleStyle={{ color: '#065555', fontSize: 20 }}
                    onPress={() => { redirect.navigate("User") }} type="clear" styles={styles.buttonContainer}>
                    {() => { array }}
                </Button>


            </View>

        </View >

    )

};



export default HomeScreen;



