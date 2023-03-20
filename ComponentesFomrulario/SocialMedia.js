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

import { useRoute } from "@react-navigation/native";
export const SocialMedia = () => {

    // SI / NO Abono integral RDS
    const [socialMedia, setSocialMedia] = useState(false);

    //Funcion onpress para cambiar el valor de 'socialMedia'
    const botonSocialMedia = (value) => {
        setSocialMedia(value);
    }

    //Imput nombreSocialMedia
    const [nombreSocialMedia, setNombreSocialMedia] = useState('');

    //Imput Descripcion nombreSocialMedia
    const [descriptcionSocialMedia, setDescriptcionSocialMedia] = useState('');

    const [expandedGoogleMiNegocio, setExpandedGoogleMiNegocio] = useState(false);

    // Drop Servicio Social Media
    const [socialMediaUnico, setSocialMediaUnico] = useState(false);
    const [socialMediaMensual, setSocialMediaMensual] = useState(false);

    const [socialMediacioValor, setSocialMediaValor] = useState('')


    const socialMediaButton = () => {
        setSocialMediaUnico(!socialMediaUnico);
        setSocialMediaMensual(false);
        setSocialMediaValor(10.000)
    }


    const socialMediaButton2 = () => {
        setSocialMediaUnico(false);
        setSocialMediaMensual(!socialMediaMensual);
        setSocialMediaValor(11.000);
    }





    return (
        <>
            <ButtonGroup
                buttons={['Si', 'No']}
                selectedIndex={socialMedia}
                onPress={botonSocialMedia}
                containerStyle={{ marginBottom: 20, marginTop: 20 }}
            />

            {/* Sea valor 0 o 1 por el boton se muestran los campos indicados  */}
            {socialMedia === 0 && (


                <View>
                    <Input

                        label={'Nombre del Servicio'}
                        type='Servicio'
                        id='Servicio'
                        style={styles.imputsCotizacion}
                        placeholder='Ingresar Nombre del Servicio'
                        value={nombreSocialMedia}
                        onChangeText={(text) => setNombreSocialMedia(text)}
                    />

                    <Input

                        label={'Descripcion del Servicio'}
                        type='Servicio'
                        id='Servicio'
                        style={styles.imputsCotizacion}
                        placeholder='Descripcion'
                        value={descriptcionSocialMedia}
                        onChangeText={(text) => setDescriptcionSocialMedia(text)}
                    />

                    <ListItem.Accordion
                        content={
                            <ListItem.Content>
                                <ListItem.Title>Periodo del Servicio</ListItem.Title>
                                <ListItem.Subtitle>Unico, Mensual</ListItem.Subtitle>
                            </ListItem.Content>
                        }
                        isExpanded={expandedGoogleMiNegocio}
                        onPress={() => {
                            setExpandedGoogleMiNegocio(!expandedGoogleMiNegocio);
                        }}>

                        <View style={styles.containerDropDawn}>

                            <CheckBox title="Opcion 1" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={socialMediaUnico} onPress={() => { socialMediaButton() }} />
                            <CheckBox title="Opcion 2" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={socialMediaMensual} onPress={socialMediaButton2} />
                            {socialMediaUnico === true && (
                                <View>
                                    <Input disabled label={'Resultado Social Media Unica'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                </View>
                            )}
                            {socialMediaMensual === true && (
                                <View>
                                    <Input disabled label={'Resultado Social Media Mensual'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                </View>
                            )}
                        </View>
                    </ListItem.Accordion>
                </View>
            )}

            {socialMedia === 1 && (

                <View>

                </View>

            )}
        </>
    )
}