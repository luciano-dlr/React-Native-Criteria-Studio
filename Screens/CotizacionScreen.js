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

// Componentes 
import { Marca } from "../ComponentesFomrulario/Marca";
import { Rubro } from "../ComponentesFomrulario/Rubro";
import { NombreContacto } from "../ComponentesFomrulario/NombreContacto";
import { ApellidoContacto } from "../ComponentesFomrulario/ApellidoContacto";
import { Cargo } from "../ComponentesFomrulario/Cargo";
import { EmailContacto } from "../ComponentesFomrulario/EmailContacto";
import { TelefonoContacto } from "../ComponentesFomrulario/TelefonoContacto";
import { TipoEmpresa } from "../ComponentesFomrulario/TipoEmpresa";
import { PrecioDolar } from "../ComponentesFomrulario/PrecioDolar";
import { DropDawnRDS } from "../ComponentesFomrulario/DropDawnRDS";
import { AdministracionAnuncios } from "../ComponentesFomrulario/AdministracionAnuncios";
import { AdministracionIntegralRedes } from "../ComponentesFomrulario/AdministracionIntegralRedes";
import { DiseñoAdministracionRedes } from "../ComponentesFomrulario/DiseñoAdministracionRedes";
import { Campañas } from "../ComponentesFomrulario/Campañas";
import { MontoSugeridoRDS } from "../ComponentesFomrulario/MontoSugeridoRDS";
import { DiseñoLinkedin } from "../ComponentesFomrulario/DiseñoLinkedin";
import { Newsletter } from "../ComponentesFomrulario/Newsletter";
import { DropDawnGoogle } from "../ComponentesFomrulario/DropDawnGoogle";
import { HorasSesionFotos } from "../ComponentesFomrulario/HorasSesionFotos";
import { AsesorImagen } from "../ComponentesFomrulario/AsesorImagen";
import { ContenidoEditado } from "../ComponentesFomrulario/ContenidoEditado";
import { ProduccionFotografica } from "../ComponentesFomrulario/ProduccionFotografica";
import { FotosAEntregar } from "../ComponentesFomrulario/FotosAEntregar";
import { IdentidadEmpresa } from "../ComponentesFomrulario/IdentidadEmpresa";





// import MyContext from './ValorContext.js';


export const CotizacionScreen = () => {

    // const [expanded, setExpanded] = useState(false);
    // const [expandedRDS, setExpandedRDS] = useState(false);
    // const [expandedAnuncios, setExpandedAnuncios] = useState(false);
    // const [expandedRedesAds, setExpandedRedesAds] = useState(false);
    // const [expandedDiseñoRedes, setExpandedDiseñoRedes] = useState(false);
    // const [expandedCampañas, setExpandedCampañas] = useState(false);
    // const [expandedLinkedin, setExpandedLinkedin] = useState(false);
    // const [expandedNewsletter, setExpandedNewsletter] = useState(false);


    // Objeto pusheado a la base de datos en firestore
    const enviarFormulario = () => {

        const formData = addDoc(collection(db, "cotizaciones"), {
            // localTime,
            // marca,
            // rubro,
            // nombreContacto,
            // apellidoContacto,
            // cargo,
            // emailContacto,
            // telefonoContacto,
            // criteriaEmail,
            // granOrganizacion,
            // pequeOrganizacion,
            // medianaOrganizacion,
            // microOrganizacion,
            // osflOrganizacion,
            // dolar,
            // pirdBasica,
            // pirdCompleja,
            // anuncioBasicos,
            // anunciosComplejos

        });

        Alert.alert("Cotizacion Confirmada " + user.email)
        navigation.navigate("home");
        console.log('Cotizacion Finalizada ')

    }

    //Funcion para mostrar el horario cuando fue realizado el formulario
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

    //Email del usuario logueado
    const criteriaEmail = user.email;

    // base de datos
    const db = getFirestore(app);

    // SI / NO Abono integral RDS
    const [integralRDS, setIntegralRDS] = useState(false);

    const abonoIntregralRDS = (value) => {
        setIntegralRDS(value);
    }


    return (
        <SafeAreaView  >
            <ScrollView style={styles.scrollView}>

                <View style={styles.containerCoti}>

                    <Text style={styles.titleNegro}>Informacion General</Text>

                    <Marca />

                    <Rubro />

                    <NombreContacto />

                    <ApellidoContacto />

                    <Cargo />

                    <EmailContacto />

                    <TelefonoContacto />

                    <TipoEmpresa />

                    {/* Imput Informativo  */}
                    <Input
                        disabled label={'Vista Dolar Hoy'}
                        type='marca'
                        id='marca'
                        style={styles.imputsCotizacion}
                        placeholder='Marca'
                        value={'www.dolarhoy.com'}
                    />

                    <PrecioDolar />

                    {/* Imput Informativo  */}
                    <Input
                        disabled label={'Cotizacion Realizada por'}
                        type='marca'
                        id='marca' style={styles.imputsCotizacion}
                        placeholder='Marca' value={user.email}
                    />

                    <Text style={styles.titleNegro}>Social Media</Text>

                    <DropDawnRDS />

                    <AdministracionAnuncios />

                    <Text>

                        Abono Integral RDS?

                    </Text>

                    <ButtonGroup
                        buttons={['Si', 'No']}
                        selectedIndex={integralRDS}
                        onPress={abonoIntregralRDS}
                        containerStyle={{ marginBottom: 20, marginTop: 20 }}
                    />

                    {/* Sea valor 0 o 1 por el boton se muestran los campos indicados  */}
                    {integralRDS === 0 && (

                        <AdministracionIntegralRedes />
                    )}

                    {integralRDS === 1 && (

                        <View>

                            <DiseñoAdministracionRedes />

                            <Campañas />

                        </View>

                    )}

                    <MontoSugeridoRDS />

                    <DiseñoLinkedin />

                    <Newsletter />

                    <DropDawnGoogle />

                    <Text style={styles.titleNegro}>Stylim + Diseño</Text>

                    <HorasSesionFotos />

                    {/* Switch Asesor de imagen */}
                    <View style={styles.containerSwitch}>

                        <AsesorImagen />

                        {/* Switch Asesor de imagen */}
                        <ContenidoEditado />

                        {/* Switch Asesor de imagen */}
                        <ProduccionFotografica />

                    </View>

                    {/* Cantidad de fotos a entregar */}
                    <FotosAEntregar />

                    {/* DropDown Identidad */}
                    <IdentidadEmpresa />

                    <Button
                        title='Cotizar'
                        titleStyle={{ color: 'black', fontSize: 18 }}
                        containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }}
                        buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }}

                        onPress={() => {
                            enviarFormulario();

                            // llevo un valor de estadoCotizacion como "pendiente" a otra pantalla para especificar el estado del formulario completado
                            // const [estadoCotizacion,setEstadoCotizacion] = useState('');
                            // const estadoCotizacion = 'pendiente el formu papu'

                        }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
