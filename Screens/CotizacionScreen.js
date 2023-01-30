import React from "react";
import styles from "../Styles/Styles";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config.js";
import { useNavigation } from "@react-navigation/native";
import { Dialog, CheckBox, Button, Input, ButtonGroup } from '@rneui/themed';
import { collection, addDoc, getFirestore, setDoc, doc, getDocs, query, where } from "firebase/firestore";
import { Text, View, SafeAreaView, ScrollView, Alert } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/firestore';

export const CotizacionScreen = () => {



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

    //funciones de los botones de empresa para desactivar las otras Botones empresa
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
    //funcion de los botones de empresa para desactivar las otras Botones empresa
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

    //funcion de los botones de empresa para desactivar las otras Botones empresa
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

    //funcion de los botones de empresa para desactivar las otras Botones empresa
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

    //funcion de los botones de empresa para desactivar las otras Botones empresa
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

    //Valor dolar 
    const [dolar, setDolar] = useState(0)

    //Check-Box dentro de popup 'RDS'
    const [pirdBasica, setPirdBasica] = useState(false)
    const [pirdCompleja, setPirdCompleja] = useState(false)

    //PopUp SocialMedia
    const [socialMedia, setSocialMedia] = useState(false);

    const socialMediaPopUp = () => {
        setSocialMedia(!socialMedia);
    };

    const socialMediaPopUpConfirmar = () => {
        setSocialMedia(!socialMedia);
    };


    //boton pop up media confirmar
    const socialMediaPopUpLimpiar = () => {
        setPirdCompleja(false)
        setPirdBasica(false)
    };

    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const pirdBasicaButton = (isChecked) => {
        setPirdCompleja(false)
        setPirdBasica(!pirdBasica);
        if (isChecked) {
            setPirdBasica(9.120)

        }
        else {
            setPirdBasica(false)

        }
    }

    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const pirdComplejaButton = (isChecked) => {
        setPirdBasica(false);
        setPirdCompleja(!pirdCompleja)
        if (isChecked) {
            setPirdCompleja(14.592)

        }
        else {
            setPirdCompleja(false)
            setPirdBasica(false);

        }
    }

    //Check box Anuncios 

    const [anuncioBasicos, setAnunciosBasicos] = useState(false);
    const [anunciosComplejos, setAnunciosComplejos] = useState(false)

    //PopUp Anuncios
    const [anuncios, setSAnuncios] = useState(false)

    const anunciosPopup = () => {
        setSAnuncios(!anuncios);
    };

    const anunciosPopupConfirmar = () => {
        setSAnuncios(!anuncios);
    };
    const anunciosPopupLimpiar = () => {
        setAnunciosComplejos(false)
        setAnunciosBasicos(false)
    };

    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const anunciosBasicaButton = (isChecked) => {
        setAnunciosComplejos(false)
        setAnunciosBasicos(!anuncioBasicos);
        if (isChecked) {
            setAnunciosBasicos(6.384)
        }
        else {
            setAnunciosBasicos(false)
        }
    }
    const anunciosComplejaButton = (isChecked) => {
        setAnunciosBasicos(false)
        setAnunciosComplejos(!anunciosComplejos);
        if (isChecked) {
            setAnunciosComplejos(9.780)
        }
        else {
            setAnunciosComplejos(false)
        }
    }







    const consultar = () => {

        // const q = query(collection(db, "cotizaciones"), where("cargo", "==", 'pepe'));

        // const querySnapshot = getDocs(q);

        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        // });
        // querySnapshot.map

        // const querySnapshot = getDocs(collection(db, "cotizaciones", '0mHVgwS7CSnzQEW4OU9V'));
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        // });


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

    const enviarFormulario = () => {



        const formData = addDoc(collection(db, "cotizaciones"), {
            localTime,
            marca,
            rubro,
            nombreContacto,
            apellidoContacto,
            cargo,
            emailContacto,
            telefonoContacto,
            criteriaEmail,
            granOrganizacion,
            pequeOrganizacion,
            medianaOrganizacion,
            microOrganizacion,
            osflOrganizacion,
            dolar,
            pirdBasica,
            pirdCompleja,
            anuncioBasicos,
            anunciosComplejos

        });

        // Alert.alert("Cotizacion Confirmada " + user.email)
        navigation.navigate("home");
        console.log('Cotizacion Finalizada ')

    }

    // SI / NO Abono integral RDS
    const [integralRDS, setIntegralRDS] = useState(false);

    const abonoIntregralRDS = (value) => {

        setIntegralRDS(value);

    }

    //popup Administracion Integral Redes
    const [redesFbIgFBAds, setRedesFbIgFBAds] = useState(false);
    const [redesFbIgGoogleAds, setRedesFbIgGoogleAds] = useState(false)
    const [redesFbIgFBAdsGoogleAds, setRedesFbIgFNBdsGoogleAds] = useState(false)

    const [redesPopup, setRedesPopup] = useState(false)

    const administracionIntegralRDS = () => {
        setRedesPopup(!redesPopup);
    };

    const administracionIntegralRDSLimpiar = () => {
        setRedesFbIgFBAds(false);
        setRedesFbIgGoogleAds(false);
        setRedesFbIgFNBdsGoogleAds(false);
    };

    const redesFbIgFBAdsButton = (isChecked) => {
        setRedesFbIgFBAds(!redesFbIgFBAds);
        setRedesFbIgGoogleAds(false);
        setRedesFbIgFNBdsGoogleAds(false)
        if (isChecked) {
            setRedesFbIgFBAds(1111)
        }
        else {
            setRedesFbIgFBAds(false)
        }
    }

    const redesFbIgGoogleAdsButton = (isChecked) => {
        setRedesFbIgFBAds(false);
        setRedesFbIgGoogleAds(!redesFbIgGoogleAds);
        setRedesFbIgFNBdsGoogleAds(false)
        if (isChecked) {
            setRedesFbIgGoogleAds(2222)
        }
        else {
            setRedesFbIgGoogleAds(false)
        }
    }

    const redesFbIgFBAdsGoogleAdsButton = (isChecked) => {
        setRedesFbIgFBAds(false);
        setRedesFbIgGoogleAds(false);
        setRedesFbIgFNBdsGoogleAds(!redesFbIgFBAdsGoogleAds)
        if (isChecked) {
            setRedesFbIgFNBdsGoogleAds(3333)
        }
        else {
            setRedesFbIgFNBdsGoogleAds(false)
        }
    }

    console.log(redesFbIgFBAdsGoogleAds + redesFbIgGoogleAds + redesFbIgFBAds)



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

                    <Input label={'Valor Dolar Blue'} type='Dolar' id='dolar' style={styles.imputsCotizacion} placeholder='Valor dolar BLUE' value={dolar} onChangeText={(text) => setDolar(text)} />

                    <Input disabled label={'Cotizacion Realizada por'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={user.email} />

                    <Text style={styles.titleNegro}>Social Media</Text>

                    <Button title="Parametros Inicial RDS" onPress={socialMediaPopUp} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                    <Dialog isVisible={socialMedia} onBackdropPress={socialMediaPopUp}>

                        {/* Opciones Social Media*/}
                        <Dialog.Title title="Parametros Inicial RDS" />

                        <CheckBox title="PIRD Básica" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdBasica} onPress={pirdBasicaButton} />
                        <CheckBox title="PIRD Compleja" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdCompleja} onPress={pirdComplejaButton} />

                        <Button title="Limpiar" onPress={socialMediaPopUpLimpiar} />
                        <Button title="Confirmar" onPress={socialMediaPopUpConfirmar} />

                    </Dialog>

                    {pirdBasica === 9.120 && (

                        <View>

                            <Input disabled label={'Resultado de PIRD Básica '} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.120' />


                        </View>

                    )}

                    {pirdCompleja === 14.592 && (

                        <View>

                            <Input disabled label={'Resultado de PIRD Compleja'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.592' />

                        </View>

                    )}

                    <Button title="Administracion Anuncios " onPress={anunciosPopup} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                    <Dialog isVisible={anuncios} onBackdropPress={anunciosPopup}>

                        {/* Opciones Social Media*/}
                        <Dialog.Title title="Parametros Inicial RDS" />

                        <CheckBox title="Básica" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={anuncioBasicos} onPress={anunciosBasicaButton} />
                        <CheckBox title="Compleja" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={anunciosComplejos} onPress={anunciosComplejaButton} />

                        <Button title="Limpiar" onPress={anunciosPopupLimpiar} />
                        <Button title="Confirmar" onPress={anunciosPopupConfirmar} />

                    </Dialog>

                    {anuncioBasicos === 6.384 && (

                        <View>

                            <Input disabled label={'Anuncio Basico'} type='text' id='text' style={styles.imputsCotizacion} placeholder='6.384' />


                        </View>

                    )}

                    {anunciosComplejos === 9.780 && (

                        <View>

                            <Input disabled label={'Anuncio Complejo'} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.780' />

                        </View>

                    )}

                    <Text>Abono Integral RDS? </Text>
                    <ButtonGroup
                        buttons={['Si', 'No']}
                        selectedIndex={integralRDS}
                        onPress={abonoIntregralRDS}
                        containerStyle={{ marginBottom: 20, marginTop: 20 }}
                    />

                    <Button title="Administracion Integral Redes" onPress={administracionIntegralRDS} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                    <Dialog isVisible={redesPopup} onBackdropPress={administracionIntegralRDS}>

                        {/* Opciones Social Media*/}
                        <Dialog.Title title="Administracion Integral Redes" />

                        <CheckBox title="Ig FB " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgFBAds} onPress={redesFbIgFBAdsButton} />
                        <CheckBox title="IG FB GOOGLEads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgGoogleAds} onPress={redesFbIgGoogleAdsButton} />
                        <CheckBox title="IG FB GOOGLEads fbads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgFBAdsGoogleAds} onPress={redesFbIgFBAdsGoogleAdsButton} />


                        <Button title="Limpiar" onPress={administracionIntegralRDSLimpiar} />
                        <Button title="Confirmar" onPress={administracionIntegralRDS} />

                    </Dialog>










                    <Button title='Cotizar' titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }}

                        onPress={() => {
                            enviarFormulario();
                            // llevo un valor de estadoCotizacion como "pendiente" a otra pantalla para especificar el estado del formulario completado
                            // const [estadoCotizacion,setEstadoCotizacion] = useState('');
                            // const estadoCotizacion = 'pendiente el formu papu'

                        }} />
                    {/* <Button title='Cotizar' titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }}

                        onPress={() => {

                            consultar();


                        }} /> */}

                </View>

            </ScrollView>
        </SafeAreaView>
    );
};
