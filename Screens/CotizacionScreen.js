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



export const CotizacionScreen = () => {

    // Objeto pusheado a la base de datos en firestore
    const [expanded, setExpanded] = React.useState(false);

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

    //funciones de los botones de empresa para desactivar los otros Botones empresa
    const granOrganizacionButton = (isChecked) => {
        setGranOrganizacion(!granOrganizacion);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        if (isChecked) {
            setGranOrganizacion(1.4);
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
            setMedianaOrganizacion(1.2);
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
            setPequeOrganizacion(1);
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
            setMicroOrganizacion(0.9);
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
            setOsflOrganizacion(0.8);
        } else {
            setOsflOrganizacion(0);
        }
    }

    //Valor dolar ingresado 
    const [dolar, setDolar] = useState(0)

    //Check-Box dentro de popup 'RDS'
    const [pirdBasica, setPirdBasica] = useState(false)
    const [pirdCompleja, setPirdCompleja] = useState(false)

    //PopUp SocialMedia
    const [socialMedia, setSocialMedia] = useState(false);

    const socialMediaPopUp = () => {
        setSocialMedia(!socialMedia);
    };

    //boton confirmar socialmedia 
    const socialMediaPopUpConfirmar = () => {
        setSocialMedia(!socialMedia);
    };


    //boton pop up media confirmar
    const socialMediaPopUpLimpiar = () => {
        setPirdCompleja(false)
        setPirdBasica(false)
    };

    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const pirdBasicaButton = () => {
        setPirdCompleja(false);
        setPirdBasica(!pirdBasica);
    };
    const pirdBasicaValor = pirdBasica ? 9.120 : '';
    console.log(pirdBasicaValor)



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

    //Boton para llamar al popup
    const administracionIntegralRDS = () => {
        setRedesPopup(!redesPopup);
    };

    //Boton limpiar anuncio
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
            setRedesFbIgFBAds(10.000)
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
            setRedesFbIgGoogleAds(11.000)
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
            setRedesFbIgFNBdsGoogleAds(12.000)
        }
        else {
            setRedesFbIgFNBdsGoogleAds(false)
        }
    }

    //Monto sugerido de pauta paga
    const [montoSugeridoPautaPaga, setMontoSugeridoPautaPaga] = useState('');

    //Popup Linkedin
    const [linkekdin2, setLinkedin2] = useState(false);
    const [linkedin3, setLinkedin3] = useState(false);
    const [linkedin4, setLinkedin4] = useState(false);

    const [linkedinPopup, setLinkedinPopup] = useState(false);

    //boton para llamar al popup 
    const diseñoRedaccionLinkedin = () => {
        setLinkedinPopup(!linkedinPopup);
    }

    //Boton limpiar Linkedin
    const diseñoRedaccionLinkedinLimpiar = () => {
        setLinkedin2(false);
        setLinkedin3(false);
        setLinkedin4(false);
    };

    const linkekdin2Button = (isChecked) => {
        setLinkedin2(!linkekdin2);
        setLinkedin3(false);
        setLinkedin4(false)
        if (isChecked) {
            setLinkedin2(121212)
        }
        else {
            setLinkedin2(false)
        }
    }

    const linkedin3Button = (isChecked) => {
        setLinkedin2(false);
        setLinkedin3(!linkedin3);
        setLinkedin4(false)
        if (isChecked) {
            setLinkedin3(2323)
        }
        else {
            setLinkedin3(false)
        }
    }

    const linkedin4Button = (isChecked) => {
        setLinkedin2(false);
        setLinkedin3(false);
        setLinkedin4(!linkedin4)
        if (isChecked) {
            setLinkedin4(3333)
        }
        else {
            setLinkedin4(false)
        }
    }

    //Popup diseño administracion redes sociales
    const [fbIg3post2historias, setFbIg3post2historias] = useState(false);
    const [fbIg4post3historias, setFbIg4post3historias] = useState(false);
    const [fbIg5post4historias, setFbIg5post4historias] = useState(false);
    const [instagramCard15, setInstagramCard15] = useState(false);
    const [instagramCard18, setInstagramCard18] = useState(false);

    const [diseñoRedesPopup, setDiseñoRedesPopup] = useState(false);

    //boton para llamar al popup 
    const diseñoRedesPopupButton = () => {
        setDiseñoRedesPopup(!diseñoRedesPopup);
    }

    //Boton limpiar popup
    const diseñoRedesPopupButtonLimpiar = () => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false);
        setInstagramCard15(false);
        setInstagramCard18(false);

    };

    const fbIg3post2historiasButton = (isChecked) => {
        setFbIg3post2historias(!fbIg3post2historias);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false);
        setInstagramCard15(false);
        setInstagramCard18(false);
        if (isChecked) {
            setFbIg3post2historias(10.000)
        }
        else {
            setFbIg3post2historias(false)
        }
    }

    const fbIg4post3historiasButton = (isChecked) => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(!fbIg4post3historias);
        setFbIg5post4historias(false);
        setInstagramCard15(false);
        setInstagramCard18(false);
        if (isChecked) {
            setFbIg4post3historias(11.000)
        }
        else {
            setFbIg4post3historias(false)
        }
    }

    const fbIg5post4historiasButton = (isChecked) => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(!fbIg5post4historias)
        setInstagramCard15(false);
        setInstagramCard18(false);
        if (isChecked) {
            setFbIg5post4historias(12.000)
        }
        else {
            setFbIg5post4historias(false)
        }
    }

    const instagramCard15Button = (isChecked) => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false)
        setInstagramCard15(!instagramCard15);
        setInstagramCard18(false);
        if (isChecked) {
            setInstagramCard15(13.000)
        }
        else {
            setInstagramCard15(false)
        }
    }

    const instagramCard18Button = (isChecked) => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false)
        setInstagramCard15(false);
        setInstagramCard18(!instagramCard18);
        if (isChecked) {
            setInstagramCard18(14.000)
        }
        else {
            setInstagramCard18(false)
        }
    }

    //Popup diseño administracion Campañas
    const [fbAds, setFbAds] = useState(false);
    const [googleAds, setGoogleAds] = useState(false);
    const [fbGoogleAds, setFbGoogleAds] = useState(false);


    const [campañasPopup, setCampañasPopup] = useState(false);

    //boton para llamar al popup 
    const campañasPopupButton = () => {
        setCampañasPopup(!campañasPopup);
    }

    //Boton limpiar popup
    const campañasPopupButtonLimpiar = () => {
        setFbAds(false);
        setGoogleAds(false);
        setFbGoogleAds(false);


    };

    const fbAdsButton = (isChecked) => {
        setFbAds(!fbAds);
        setGoogleAds(false);
        setFbGoogleAds(false);
        setInstagramCard18(false);
        if (isChecked) {
            setFbAds(10.000)
        }
        else {
            setFbAds(false)
        }
    }

    const googleAdsButton = (isChecked) => {
        setFbAds(false);
        setGoogleAds(!googleAds);
        setFbGoogleAds(false);
        if (isChecked) {
            setGoogleAds(11.000)
        }
        else {
            setGoogleAds(false)
        }
    }

    const fbGoogleAdsButton = (isChecked) => {
        setFbAds(false);
        setGoogleAds(false);
        setFbGoogleAds(!fbGoogleAds);
        if (isChecked) {
            setFbGoogleAds(12.000)
        }
        else {
            setFbGoogleAds(false)
        }
    }

    //Popup Newsletter
    const [newsletter1, setNewsletter1] = useState(false);
    const [newsletter2, setNewsletter2] = useState(false);
    const [newsletter3, setNewsletter3] = useState(false);


    const [newsletterPopup, setNewsletterPopup] = useState(false);

    //boton para llamar al popup 
    const newsletterPopupButton = () => {
        setNewsletterPopup(!newsletterPopup);
    }

    //Boton limpiar popup
    const newsletterPopupButtonLimpiar = () => {
        setNewsletter1(false);
        setNewsletter2(false);
        setNewsletter3(false);


    };

    const newsletter1Button = (isChecked) => {
        setNewsletter1(!newsletter1);
        setNewsletter2(false);
        setNewsletter3(false);
        if (isChecked) {
            setNewsletter1(121212)
        }
        else {
            setNewsletter1(false)
        }
    }

    const newsletter2Button = (isChecked) => {
        setNewsletter1(false);
        setNewsletter2(!newsletter2);
        setNewsletter3(false);
        if (isChecked) {
            setNewsletter2(2323)
        }
        else {
            setNewsletter2(false)
        }
    }

    const newsletter3Button = (isChecked) => {
        setNewsletter1(false);
        setNewsletter2(false);
        setNewsletter3(!newsletter3);
        if (isChecked) {
            setNewsletter3(3333)
        }
        else {
            setNewsletter3(false)
        }
    }

    //Popup Identidad
    const [logo, setLogo] = useState(false);
    const [rediseñoIdentidad, setRediseñoIdentidad] = useState(false);
    const [diseñoMarca, setDiseñoMarca] = useState(false);
    const [naming, setNaming] = useState(false);

    const [identidadPopup, setIdentidadPopup] = useState(false);

    //boton para llamar al popup 
    const identidadPopupButton = () => {
        setIdentidadPopup(!identidadPopup);
    }

    //Boton limpiar popup
    const identidadPopupButtonLimpiar = () => {
        setLogo(false);
        setRediseñoIdentidad(false);
        setDiseñoMarca(false);
        setNaming(false);
    };

    const logoButton = (isChecked) => {
        setLogo(!logo);
        setRediseñoIdentidad(false);
        setDiseñoMarca(false);
        setNaming(false);
        // if (isChecked) {
        //     setLogo(121212)
        // }
        // else {
        //     setLogo(false)
        // }
    }

    const rediseñoIdentidadButton = (isChecked) => {
        setLogo(false);
        setRediseñoIdentidad(!rediseñoIdentidad);
        setDiseñoMarca(false);
        setNaming(false);
        // if (isChecked) {
        //     setRediseñoIdentidad(2323)
        // }
        // else {
        //     setRediseñoIdentidad(false)
        // }
    }

    const diseñoMarcaButton = (isChecked) => {
        setLogo(false);
        setRediseñoIdentidad(false);
        setDiseñoMarca(!diseñoMarca);
        setNaming(false);
        // if (isChecked) {
        //     setDiseñoMarca(3333)
        // }
        // else {
        //     setDiseñoMarca(false)
        // }
    }

    const namingButton = (isChecked) => {
        setLogo(false);
        setRediseñoIdentidad(false);
        setDiseñoMarca(false);
        setNaming(!naming);
        // if (isChecked) {
        //     setNaming(4444)
        // }
        // else {
        //     setNaming(false)
        // }
    }

    // Input Numerico de horas totales  de la sesion de fotos 
    const [horasTotalesSesionFotos, setHorasTotalesSesionFotos] = useState('')


    //Switch Asesor de imagen 
    const [asesorImagen, setAsesorImagen] = useState('');

    const asesorImagenSwitch = (value) => {
        setAsesorImagen(value);

    }

    //Switch Asesor de imagen 
    const [contenidoEditadoDiseño, setContenidoEditadoDiseño] = useState(false);

    const contenidoEditadoDiseñoSwitch = (value) => {
        setContenidoEditadoDiseño(value);

    }

    //Switch "La seccion de fotos es en nuestro estudio Fotografico ?""
    const [seccionFotosEnCriteria, setSeccionFotosEnCriteria] = useState(false);

    const seccionFotosEnCriteriaSwitch = (value) => {
        setSeccionFotosEnCriteria(value);

    }

    // Input Numerico de Cantidad de fotos a entregar
    const [fotosAEntregar, setFotosAEntregar] = useState('');














    return (
        <SafeAreaView  >
            <ScrollView style={styles.scrollView}>

                <View style={styles.containerCoti}>

                    <Text style={styles.titleNegro}>Informacion General</Text>

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
                    {granOrganizacion === 1.4 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'1.4'} />
                    )}
                    {medianaOrganizacion === 1.2 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'1.2'} />
                    )}
                    {pequeOrganizacion === 1 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'1'} />
                    )}
                    {microOrganizacion === 0.9 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.9'} />
                    )}
                    {osflOrganizacion === 0.8 && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='valorOSFL' style={styles.imputsCotizacion} placeholder='Marca' value={'0.8'} />
                    )}
                    {/*Si todos los botones de empresa estan en false, el input a mostrar es 0*/}
                    {granOrganizacion === false && medianaOrganizacion === false && pequeOrganizacion === false && microOrganizacion === false && osflOrganizacion === false && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0'} />
                    )}

                    <Input disabled label={'Vista Dolar Hoy'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'www.dolarhoy.com'} />

                    <Input keyboardType="numeric" label={'Valor Dolar Blue'} type='Dolar' id='dolar' style={styles.imputsCotizacion} placeholder='Valor dolar BLUE' value={dolar} onChangeText={(text) => setDolar(text)} />

                    <Input disabled label={'Cotizacion Realizada por'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={user.email} />

                    <Text style={styles.titleNegro}>Social Media</Text>

                    <Button title="Parametros Inicial RDS" onPress={socialMediaPopUp} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 20, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                    <Dialog isVisible={socialMedia} onBackdropPress={socialMediaPopUp}>

                        {/* Opciones Social Media*/}
                        <Dialog.Title title="Parametros Inicial RDS" />

                        <CheckBox title="PIRD Básica" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdBasica} onPress={pirdBasicaButton} />
                        <CheckBox title="PIRD Compleja" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdCompleja} onPress={pirdComplejaButton} />

                        <Button title="Limpiar" onPress={socialMediaPopUpLimpiar} />
                        <Button title="Confirmar" onPress={socialMediaPopUpConfirmar} />

                    </Dialog>

                    {pirdBasica === true && (
                        <View>
                            <Input disabled label={'Resultado de PIRD Básica '} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.120' />
                        </View>
                    )}
                    {pirdCompleja === 14.592 && (
                        <View>
                            <Input disabled label={'Resultado de PIRD Compleja'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.592' />
                        </View>
                    )}

                    <Button title="Administracion Anuncios " onPress={anunciosPopup} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 20, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

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
                            <Input disabled label={'Monto CBM'} type='text' id='text' style={styles.imputsCotizacion} placeholder='6.384' />
                        </View>

                    )}

                    {anunciosComplejos === 9.780 && (

                        <View>
                            <Input disabled label={'Monto CBM'} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.780' />
                        </View>

                    )}

                    <Text>Abono Integral RDS? </Text>
                    <ButtonGroup
                        buttons={['Si', 'No']}
                        selectedIndex={integralRDS}
                        onPress={abonoIntregralRDS}
                        containerStyle={{ marginBottom: 20, marginTop: 20 }}
                    />

                    {/* Sea valor 0 o 1 por el boton se muestran los campos indicados  */}
                    {integralRDS === 0 && (
                        <View>

                            {/* Pop up anunncios  */}
                            <Button title="Administracion Integral Redes" onPress={administracionIntegralRDS} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 20, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                            <Dialog isVisible={redesPopup} onBackdropPress={administracionIntegralRDS}>

                                {/* Opciones Social Media*/}
                                <Dialog.Title title="Administracion Integral Redes" />

                                <CheckBox title="Ig FB " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgFBAds} onPress={redesFbIgFBAdsButton} />
                                <CheckBox title="IG FB GOOGLEads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgGoogleAds} onPress={redesFbIgGoogleAdsButton} />
                                <CheckBox title="IG FB GOOGLEads fbads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgFBAdsGoogleAds} onPress={redesFbIgFBAdsGoogleAdsButton} />


                                <Button title="Limpiar" onPress={administracionIntegralRDSLimpiar} />
                                <Button title="Confirmar" onPress={administracionIntegralRDS} />

                            </Dialog>

                            {/* Resultado segun la opcion indicada */}

                            {redesFbIgFBAds === 10.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                </View>
                            )}

                            {redesFbIgGoogleAds === 11.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                </View>
                            )}

                            {redesFbIgFBAdsGoogleAds === 12.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                </View>
                            )}
                        </View>

                    )}

                    {integralRDS === 1 && (
                        <View>
                            {/* Pop up Diseño y administracion de redes sociales  */}
                            <Button title=" Diseño y Administracion de redes sociales" onPress={diseñoRedesPopupButton} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 20, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                            <Dialog isVisible={diseñoRedesPopup} onBackdropPress={diseñoRedesPopupButton}>

                                {/* Opciones Social Media*/}
                                <Dialog.Title title="Diseño y Administracion de redes sociales" />

                                <CheckBox title="FB + IG ( 3 Posteos  + 2 Historias Semanales ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbIg3post2historias} onPress={fbIg3post2historiasButton} />
                                <CheckBox title="FB + IG ( 4 Posteos  + 3 Historias Semanales ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbIg4post3historias} onPress={fbIg4post3historiasButton} />
                                <CheckBox title="FB + IG ( 5 Posteos  + 4 Historias Semanales ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbIg5post4historias} onPress={fbIg5post4historiasButton} />
                                <CheckBox title="Instagram Business Card ( 15 Posteos + Historias Mensules ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={instagramCard15} onPress={instagramCard15Button} />
                                <CheckBox title="Instagram Business Card ( 18 Posteos + Historias Mensules )" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={instagramCard18} onPress={instagramCard18Button} />

                                <Button title="Limpiar" onPress={diseñoRedesPopupButtonLimpiar} />
                                <Button title="Confirmar" onPress={diseñoRedesPopupButton} />

                            </Dialog>

                            {/* Resultado segun la opcion indicada */}
                            {fbIg3post2historias === 10.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                </View>
                            )}
                            {fbIg4post3historias === 11.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                </View>
                            )}
                            {fbIg5post4historias === 12.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                </View>
                            )}
                            {instagramCard15 === 13.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='13.000' />
                                </View>
                            )}
                            {instagramCard18 === 14.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.000' />
                                </View>
                            )}

                            {/* Pop Campaña  */}
                            <Button title="Campañas" onPress={campañasPopupButton} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 20, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                            <Dialog isVisible={campañasPopup} onBackdropPress={campañasPopupButton}>

                                {/* Opciones Campañas */}
                                <Dialog.Title title="Campañas" />

                                <CheckBox title="FB Ads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbAds} onPress={fbAdsButton} />
                                <CheckBox title="Google Ads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={googleAds} onPress={googleAdsButton} />
                                <CheckBox title="FB + Google Ads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbGoogleAds} onPress={fbGoogleAdsButton} />

                                <Button title="Limpiar" onPress={campañasPopupButtonLimpiar} />
                                <Button title="Confirmar" onPress={campañasPopupButton} />

                            </Dialog>

                            {/* Resultado segun la opcion indicada */}
                            {fbAds === 10.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                </View>
                            )}
                            {googleAds === 11.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                </View>
                            )}
                            {fbGoogleAds === 12.000 && (
                                <View>
                                    <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                </View>
                            )}

                        </View>

                    )}


                    <Input keyboardType="numeric" label={'Monto Sugerido Pauta Paga'} type='Monto' id='MontoSugerido' style={styles.imputsCotizacion} placeholder='$ 0' value={montoSugeridoPautaPaga} onChangeText={(text) => setMontoSugeridoPautaPaga(text)} />



                    {/* Pop up LinkedIn  */}
                    <Button title=" Diseño y redaccion Linked-In" onPress={diseñoRedaccionLinkedin} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                    <Dialog isVisible={linkedinPopup} onBackdropPress={diseñoRedaccionLinkedin}>

                        {/* Opciones Social Media*/}
                        <Dialog.Title title="Diseño y redaccion Linked-In" />

                        <CheckBox title="LINKEDIN 2 Posteos Mensuales " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={linkekdin2} onPress={linkekdin2Button} />
                        <CheckBox title="LINKEDIN 3 Posteos Mensuales " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={linkedin3} onPress={linkedin3Button} />
                        <CheckBox title="LINKEDIN 4 Posteos Mensuales " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={linkedin4} onPress={linkedin4Button} />


                        <Button title="Limpiar" onPress={diseñoRedaccionLinkedinLimpiar} />
                        <Button title="Confirmar" onPress={diseñoRedaccionLinkedin} />

                    </Dialog>




                    {/* Pop Newsletter  */}
                    <Button title="Newsletter" onPress={newsletterPopupButton} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                    <Dialog isVisible={newsletterPopup} onBackdropPress={newsletterPopupButton}>

                        {/* Opciones Social Media*/}
                        <Dialog.Title title="Newsletter" />

                        <CheckBox title="Newsletter: 1 Posteo Mensual " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={newsletter1} onPress={newsletter1Button} />
                        <CheckBox title="Newsletter: 2 Posteos Menuales" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={newsletter2} onPress={newsletter2Button} />
                        <CheckBox title="Newsletter: 3 Posteos Mensuales" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={newsletter3} onPress={newsletter3Button} />

                        <Button title="Limpiar" onPress={newsletterPopupButtonLimpiar} />
                        <Button title="Confirmar" onPress={newsletterPopupButton} />

                    </Dialog>





                    <Text style={styles.titleNegro}>Stylim + Diseño</Text>

                    {/* Input de horas totales sesion de fotos */}
                    <Input keyboardType="numeric" label={'Cantidad de Horas Totales De La Sesión de fotos? '} type='text' id='text' style={styles.imputsCotizacion} placeholder='0' value={horasTotalesSesionFotos} onChangeText={(text) => setHorasTotalesSesionFotos(text)} />


                    {/* Switch Asesor de imagen */}
                    <View style={styles.containerSwitch}>
                        <View style={styles.containerColum}>

                            <Text style={styles.titleHome}>Incluye asesor/a de imagen ? </Text>

                            <Switch
                                title="Limpiar"
                                label='texto'
                                value={asesorImagen}
                                onValueChange={asesorImagenSwitch}
                            />

                        </View>

                        {/* Switch Asesor de imagen */}
                        <View style={styles.containerColum}>

                            <Text style={styles.titleHome}>Se deberá hacer entrega del contenido editado ? </Text>

                            <Switch
                                title="Limpiar"
                                label='texto'
                                value={contenidoEditadoDiseño}
                                onValueChange={setContenidoEditadoDiseño}
                            />

                        </View>

                        {/* Switch Asesor de imagen */}
                        <View style={styles.containerColum}>

                            <Text style={styles.titleHome}>Produccion Fotografica en nuestro Estudio ? </Text>

                            <Switch
                                title="Limpiar"
                                label='texto'
                                value={seccionFotosEnCriteria}
                                onValueChange={setSeccionFotosEnCriteria}
                            />

                        </View>
                    </View>

                    {/* Cantidad de fotos a entregar */}
                    <Input keyboardType="numeric" label={'Cantidad de Fotos a Entregar '} type='text' id='text' style={styles.imputsCotizacion} placeholder='0' value={fotosAEntregar} onChangeText={(text) => setFotosAEntregar(text)} />

                    {/* Popup Identidad  */}
                    <Button title="Identidad" onPress={identidadPopupButton} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }} />

                    <Dialog isVisible={identidadPopup} onBackdropPress={identidadPopupButton}>

                        {/* Opciones Identidad*/}
                        <Dialog.Title title="Identidad" />

                        <CheckBox title="Logo" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={logo} onPress={logoButton} />
                        <CheckBox title="rediseño identidad" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={rediseñoIdentidad} onPress={rediseñoIdentidadButton} />
                        <CheckBox title="diseño marca" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={diseñoMarca} onPress={diseñoMarcaButton} />
                        <CheckBox title="naming" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={naming} onPress={namingButton} />


                        <Button title="Limpiar" onPress={identidadPopupButtonLimpiar} />
                        <Button title="Confirmar" onPress={identidadPopupButton} />

                    </Dialog>

                    <>
                        <ListItem.Accordion
                            content={
                                <ListItem.Content>
                                    <ListItem.Title>Identidad de la empresa</ListItem.Title>
                                    <ListItem.Subtitle>Logo y diseños </ListItem.Subtitle>
                                </ListItem.Content>
                            }
                            isExpanded={expanded}
                            onPress={() => {
                                setExpanded(!expanded);
                            }}
                        >
                            <ListItem>

                                <ListItem.Content>
                                    <CheckBox title="Logo" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={logo} onPress={logoButton} />


                                    <CheckBox title="rediseño identidad" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={rediseñoIdentidad} onPress={rediseñoIdentidadButton} />

                                    <CheckBox title="diseño marca" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={diseñoMarca} onPress={diseñoMarcaButton} />
                                    <CheckBox title="naming" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={naming} onPress={namingButton} />

                                    {/* 
                                    <Button title="Limpiar" onPress={identidadPopupButtonLimpiar} />
                                    <Button title="Confirmar" onPress={identidadPopupButton} /> */}

                                </ListItem.Content>
                            </ListItem>
                        </ListItem.Accordion>
                    </>

















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
