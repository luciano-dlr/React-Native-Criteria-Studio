import React, { useEffect, useState } from "react";
import { Text, View, Image } from 'react-native';
import styles from "../Styles/Styles";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";


// Una vez en UserScreen traigo las props de app.js 

const UserScreen = ({ states }) => {

    const redirect = useNavigation();

    const [values, setValues] = useState([])

    useEffect(() => {

        const lowerCase = states.map((item) => {
            return item.toLowerCase()
        });

        setValues(lowerCase)

    }, [states])

    // console.log(values)


    return (
        <View style={styles.containerUser}>

            <Text style={styles.UserTitle}>
                Bienvenido A Criteria
            </Text>

            <View>
                <Text style={styles.UserTitle_childs} > {values[0]}</Text>
            </View>

            <View>

                <Text style={styles.UserTitle_childs_email} >{values[1]}</Text>
            </View>

            <View style={styles.containerButton_user}>

                <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagenUser} />

                <Button onPress={() => { redirect.navigate("Home") }} type="clear" styles={styles.buttonContainer} >

                    <Text style={styles.titleButtonUser} > ↩  </Text>

                </Button>
            </View>
        </View>

    )

};

export default UserScreen;