import React from "react";
import { useState, useEffect } from "react";
import styles from "../Styles/Styles";
import { Text, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Dialog, CheckBox, Button, Input } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config.js";

import { getFirestore } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";







export const CotizacionScreen = () => {

    const [localTime, setLocalTime] = useState('');
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];
    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const minuto = now.getMinutes();
            const hora = now.getHours();
            const day = now.getDate();
            const month = months[now.getMonth()];
            const year = now.getFullYear();
            setLocalTime(`${day}-${month}-${year}-${hora + ':' + minuto + ' horas'}`);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    //Navigation para pasar de pantalla
    const navigation = useNavigation();

    //variables para traer el nombre de usuario al formulario que está cotizando 
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const user = auth.currentUser;
    const criteriaEmail = user.email;

    // base de datos

    const db = getFirestore(app);

    // const collectionRef = firestore().collection('Cotizaciones');


    //estado de los inputs 
    const [marca, setMarca] = useState('');
    const [rubro, setRubro] = useState('');
    const [nombreContacto, setNombreContacto] = useState('');
    const [apellidoContacto, setApellidoContacto] = useState('');
    const [cargo, setCargo] = useState('');
    const [emailContacto, setEmailContacto] = useState('');
    const [telefonoContacto, setTelefonoContacto] = useState('')

    //Nivel Cliente Empresa   
    const [granOrganizacion, setGranOrganizacion] = useState(false)
    const [medianaOrganizacion, setMedianaOrganizacion] = useState(false)
    const [pequeOrganizacion, setPequeOrganizacion] = useState(false)
    const [microOrganizacion, setMicroOrganizacion] = useState(false)
    const [osflOrganizacion, setOsflOrganizacion] = useState(false)


    //funciones de los botones de empresa para desactivar las otras
    const granOrganizacionButton = (isChecked) => {
        setGranOrganizacion(!granOrganizacion);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        if (isChecked) {
            setGranOrganizacion(0.9);
        } else {
            setGranOrganizacion(0);
        }
    }

    const medianaOrganizacionButton = (isChecked) => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(!medianaOrganizacion);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        if (isChecked) {
            setMedianaOrganizacion(0.7);
        } else {
            setMedianaOrganizacion(0);
        }
    }
    const pequeOrganizacionButton = (isChecked) => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(!pequeOrganizacion)
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        if (isChecked) {
            setPequeOrganizacion(0.4);
        } else {
            setPequeOrganizacion(0);
        }
    }
    const microeOrganizacionButton = (isChecked) => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false)
        setMicroOrganizacion(!microOrganizacion)
        setOsflOrganizacion(false);
        if (isChecked) {
            setMicroOrganizacion(0.2);
        } else {
            setMicroOrganizacion(0);
        }
    }
    const osflOrganizacionButton = (isChecked) => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(!osflOrganizacion);
        if (isChecked) {
            setOsflOrganizacion(0.1);
        } else {
            setOsflOrganizacion(0);
        }
    }

    //PopUp SocialMedia
    const [socialMedia, setSocialMedia] = useState(false);

    const socialMediaPopUp = () => {
        setSocialMedia(!socialMedia);
    };

    //Check-Box dentro de popup 'RDS'
    const [pirdBasica, setPirdBasica] = useState(false)
    const [pirdCompleja, setPirdCompleja] = useState(false)

    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive 
    const pirdBasicaButton = () => {
        setPirdBasica(!pirdBasica);
        setPirdCompleja(false)
    }

    const pirdComplejaButton = () => {
        setPirdBasica(false);
        setPirdCompleja(!pirdCompleja)
    }


    const enviarFormulario = () => {

        //Categorizacion de data ingresada en familia, sea redes como tambien data general 
        // const formData = [localTime,

        //     { marca, rubro, nombreContacto, apellidoContacto, cargo, emailContacto, telefonoContacto, criteriaEmail },
        //     { granOrganizacion, pequeOrganizacion, medianaOrganizacion, microOrganizacion, osflOrganizacion },
        //     { pirdBasica, pirdCompleja }];

        // console.log(formData);
        // Alert.alert(localTime + " Cotizacion Confirmada")

        // Enviar petición al servidor

        // try {
        //     const docRef = addDoc(collection(db, "users"), {
        //         first: "Ada",
        //         last: "Lovelace",
        //         born: 1815
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }

        try {

            const formData = addDoc(collection(db, "Cotizacion-fabri"),

                { localTime, marca, rubro, nombreContacto, apellidoContacto, cargo, emailContacto, telefonoContacto, criteriaEmail },
                { granOrganizacion, pequeOrganizacion, medianaOrganizacion, microOrganizacion, osflOrganizacion },
                { pirdBasica, pirdCompleja });

            console.log("Document written with ID: ", formData.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }


    }


    return (
        <SafeAreaView  >
            <ScrollView style={styles.scrollView}>

                <View style={styles.containerCoti}>

                    <Input label={'Marca'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Ingresar marca' value={marca} onChangeText={(text) => setMarca(text)} />

                    <Input label={'Rubro'} type='rubro' id='rubro' style={styles.imputsCotizacion} placeholder='Rubro' value={rubro} onChangeText={(text) => setRubro(text)} />

                    <Input label={'Nombre de Contacto'} type='contacto' id='contacto' style={styles.imputsCotizacion} placeholder='Nombre de Contacto' value={nombreContacto} onChangeText={(text) => setNombreContacto(text)} />

                    <Input label={'Apellido Contacto'} type='apellidoContacto' id='apellidoContacto' style={styles.imputsCotizacion} placeholder='Apellido de Contacto' value={apellidoContacto} onChangeText={(text) => setApellidoContacto(text)} />

                    <Input label={'Cargo'} type='cargo' id='cargo' style={styles.imputsCotizacion} placeholder='Cargo' value={cargo} onChangeText={(text) => setCargo(text)} />

                    <Input label={'Email Contacto'} type='email' id='email' style={styles.imputsCotizacion} placeholder='Email de Contacto' value={emailContacto} onChangeText={(text) => setEmailContacto(text)} />

                    <Input label={'Telefono Contacto'} type='phone' id='telefono' style={styles.imputsCotizacion} placeholder='Telefono de Contacto' value={telefonoContacto} onChangeText={(text) => setTelefonoContacto(text)} />

                    <Text > Nivel del cliente como empresa </Text>

                    <Button title="Gran Organizacion (+50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={granOrganizacionButton} />
                    <Button title="Mediana Organizacion (20-50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={medianaOrganizacionButton} />
                    <Button title="Pequeña Organizacion (5-20 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={pequeOrganizacionButton} />
                    <Button title="Micro Organizacion (5-5 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={microeOrganizacionButton} />
                    <Button title="Particular OSFL" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={osflOrganizacionButton} />

                    {/*

                     Dependiendo el boton seleccionado, representa true o false , y al ser true pasa a un valor numerico por un if / else
                     Si un input es igual al valor seleccionado muestra el valor en pantalla ejemplo, granOrganizacion === 0.9 se muestra el input

                     */}

                    {granOrganizacion === 0.9 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.9'} />
                    )}

                    {medianaOrganizacion === 0.7 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.7'} />
                    )}

                    {pequeOrganizacion === 0.4 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.4'} />
                    )}

                    {microOrganizacion === 0.2 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.2'} />
                    )}

                    {osflOrganizacion === 0.1 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='valorOSFL' style={styles.imputsCotizacion} placeholder='Marca' value={'0.1'} />
                    )}

                    {/*

                     Si todos los botones de empresa estan en false, el input a mostrar es 0
                     
                     */}
                    {granOrganizacion === false && medianaOrganizacion === false && pequeOrganizacion === false && microOrganizacion === false && osflOrganizacion === false && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0'} />
                    )}


                    <Input disabled label={'Vista Dolar Hoy'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'www.dolarhoy.com'} />


                    <Input label={'Valor Dolar Blue'} type='Dolar' id='telefono' style={styles.imputsCotizacion} placeholder='Valor dolar BLUE' />

                    <Input disabled label={'Cotizacion Realizada por'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={user.email} />

                    <Text style={styles.titleNegro}>Social Media</Text>

                    <Button title="Parametros Inicial RDS" onPress={socialMediaPopUp} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                    <Dialog isVisible={socialMedia} onBackdropPress={socialMediaPopUp}>

                        {/* Opciones Social Media*/}
                        <Dialog.Title title="Parametros Inicial RDS" />

                        <CheckBox title="PIRD Básica" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdBasica} onPress={pirdBasicaButton} />
                        <CheckBox title="PIRD Compleja" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdCompleja} onPress={pirdComplejaButton} />

                        <Button title="Confirmar" onPress={socialMediaPopUp} />

                    </Dialog>

                    {pirdBasica === true && (

                        <View>

                            <Input label={'Resultado de PIRD Básica 1'} type='text' id='text' style={styles.imputsCotizacion} placeholder='PIRD Básica' />
                            <Input label={'Resultado de PIRD Básica 2'} type='text' id='text' style={styles.imputsCotizacion} placeholder='PIRD Básica' />

                        </View>

                    )}

                    {pirdCompleja === true && (

                        <View>

                            <Input label={'Resultado de PIRD Compleja 1'} type='text' id='text' style={styles.imputsCotizacion} placeholder='PIRD Compleja' />
                            <Input label={'Resultado de PIRD Compleja 2'} type='text' id='text' style={styles.imputsCotizacion} placeholder='PIRD Compleja' />

                        </View>

                    )}

                    <Input type='contacto' id='contacto' style={styles.imputsCotizacion} placeholder='Nombre de Contacto' value={nombreContacto} onChangeText={(text) => setNombreContacto(text)} />

                    <Input type='apellidoContacto' id='apellidoContacto' style={styles.imputsCotizacion} placeholder='Apellido de Contacto' value={apellidoContacto} onChangeText={(text) => setApellidoContacto(text)} />

                    <Input type='cargo' id='cargo' style={styles.imputsCotizacion} placeholder='Cargo' value={cargo} onChangeText={(text) => setCargo(text)} />

                    <Input type='email' id='email' style={styles.imputsCotizacion} placeholder='Email de Contacto' value={emailContacto} onChangeText={(text) => setEmailContacto(text)} />

                    <Input type='phone' id='telefono' style={styles.imputsCotizacion} placeholder='Telefono de Contacto' value={telefonoContacto} onChangeText={(text) => setTelefonoContacto(text)} />

                    <Button title='Cotizar' titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }}

                        onPress={() => {

                            enviarFormulario();
                            navigation.navigate("home");

                        }} />

                </View>

            </ScrollView>
        </SafeAreaView>
    );
};
