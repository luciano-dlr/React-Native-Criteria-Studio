import React from "react";
import styles from "../Styles/Styles";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config.js";
import { useNavigation } from "@react-navigation/native";
import { Dialog, CheckBox, Button, Input, ButtonGroup, Switch, Label } from '@rneui/themed';
import { collection, addDoc, getFirestore, setDoc, doc, getDocs, query, where } from "firebase/firestore";
import { Text, View, SafeAreaView, ScrollView, Alert, TextInput } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { TouchableOpacity } from "react-native-gesture-handler";

export const DropDawn = (valor) => {
    const [expandedGoogleMiNegocio, setExpandedGoogleMiNegocio] = useState(false);
    // Drop Google Mi Negocio
    const [googleMiNegocio1, setGoogleMiNegocio1] = useState(false);
    const [googleMiNegocio2, setGoogleMiNegocio2] = useState(false);
    const [googleMiNegocio3, setGoogleMiNegocio3] = useState(false);
    const [googleMiNegocioValor, setGoogleMiNegocioValor] = useState('')

    const googleMiNegocio1Button = () => {
        setGoogleMiNegocio1(!googleMiNegocio1);
        setGoogleMiNegocio2(false);
        setGoogleMiNegocio3(false);
    }
    const googleMiNegocio1Valor = googleMiNegocio1 ? 10.000 : '';

    const googleMiNegocio2Button = () => {
        setGoogleMiNegocio1(false);
        setGoogleMiNegocio2(!googleMiNegocio2);
        setGoogleMiNegocio3(false);
    }
    const googleMiNegocio2Valor = googleMiNegocio2 ? 11.000 : '';

    const googleMiNegocio3Button = () => {
        setGoogleMiNegocio1(false);
        setGoogleMiNegocio2(false);
        setGoogleMiNegocio3(!googleMiNegocio3);
    }
    const googleMiNegocio3Valor = googleMiNegocio3 ? 12.000 : '';
    console.log(googleMiNegocio3Valor)


    return (
        <View>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Google Mi Negocio</ListItem.Title>
                        <ListItem.Subtitle>Opcion 1, Opcion 2 Opcion 3</ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expandedGoogleMiNegocio}
                onPress={() => {
                    setExpandedGoogleMiNegocio(!expandedGoogleMiNegocio);
                }}>

                <View style={styles.containerDropDawn}>

                    <CheckBox title="Opcion 1" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={googleMiNegocio1} onPress={googleMiNegocio1Button} />
                    <CheckBox title="Opcion 2" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={googleMiNegocio2} onPress={googleMiNegocio2Button} />
                    <CheckBox title="Opcion 3" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={googleMiNegocio3} onPress={googleMiNegocio3Button} />


                    {googleMiNegocio1 === true && (
                        <View>
                            <Input disabled label={'Resultado Google Mi Empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                        </View>
                    )}
                    {googleMiNegocio2 === true && (
                        <View>
                            <Input disabled label={'Resultado Google Mi Empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                        </View>
                    )}
                    {googleMiNegocio3 === true && (
                        <View>
                            <Input disabled label={'Resultado Google Mi Empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                        </View>
                    )}
                </View>
            </ListItem.Accordion>


        </View>
    );
};