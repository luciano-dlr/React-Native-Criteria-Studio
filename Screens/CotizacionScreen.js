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
import { googleMiNegocio3Valor } from "../Componentes/DropDawn.js";
import { useRoute } from "@react-navigation/native";
//valores del formulario
import { DropDawn } from "../Componentes/DropDawn.js";




import MyContext from './ValorContext.js';


export const CotizacionScreen = () => {







    const [expanded, setExpanded] = useState(false);
    const [expandedRDS, setExpandedRDS] = useState(false);
    const [expandedAnuncios, setExpandedAnuncios] = useState(false);
    const [expandedRedesAds, setExpandedRedesAds] = useState(false);
    const [expandedDiseñoRedes, setExpandedDiseñoRedes] = useState(false);
    const [expandedCampañas, setExpandedCampañas] = useState(false);
    const [expandedLinkedin, setExpandedLinkedin] = useState(false);
    const [expandedNewsletter, setExpandedNewsletter] = useState(false);





    // Objeto pusheado a la base de datos en firestore
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
    const [backgroundColor1, setBackgroundColor1] = useState('lightsteelblue');
    const [backgroundColor2, setBackgroundColor2] = useState('lightsteelblue');
    const [backgroundColor3, setBackgroundColor3] = useState('lightsteelblue');
    const [backgroundColor4, setBackgroundColor4] = useState('lightsteelblue');
    const [backgroundColor5, setBackgroundColor5] = useState('lightsteelblue');

    const granOrganizacionButton = () => {
        setGranOrganizacion(!granOrganizacion);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        setBackgroundColor1('navy')
        setBackgroundColor2('lightsteelblue')
        setBackgroundColor3('lightsteelblue')
        setBackgroundColor4('lightsteelblue')
        setBackgroundColor5('lightsteelblue')
    }
    const granOrganizacionValor = granOrganizacion ? 1.4 : '';

    //funcion de los botones de empresa para desactivar las otras Botones empresa
    const medianaOrganizacionButton = () => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(!medianaOrganizacion);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        setBackgroundColor1('lightsteelblue')
        setBackgroundColor2('navy')
        setBackgroundColor3('lightsteelblue')
        setBackgroundColor4('lightsteelblue')
        setBackgroundColor5('lightsteelblue')

    }
    const medianaOrganizacionValor = medianaOrganizacion ? 1.2 : '';

    //funcion de los botones de empresa para desactivar las otras Botones empresa
    const pequeOrganizacionButton = () => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(!pequeOrganizacion)
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        setBackgroundColor1('lightsteelblue')
        setBackgroundColor2('lightsteelblue')
        setBackgroundColor3('navy')
        setBackgroundColor4('lightsteelblue')
        setBackgroundColor5('lightsteelblue')
    }
    const pequeOrganizacionValor = pequeOrganizacion ? 1 : '';

    //funcion de los botones de empresa para desactivar las otras Botones empresa
    const microeOrganizacionButton = () => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false)
        setMicroOrganizacion(!microOrganizacion)
        setOsflOrganizacion(false);
        setBackgroundColor1('lightsteelblue')
        setBackgroundColor2('lightsteelblue')
        setBackgroundColor3('lightsteelblue')
        setBackgroundColor4('navy')
        setBackgroundColor5('lightsteelblue')
    }
    const microOrganizacionValor = microOrganizacion ? 0.9 : '';

    //funcion de los botones de empresa para desactivar las otras Botones empresa
    const osflOrganizacionButton = () => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(!osflOrganizacion);
        setBackgroundColor1('lightsteelblue')
        setBackgroundColor2('lightsteelblue')
        setBackgroundColor3('lightsteelblue')
        setBackgroundColor4('lightsteelblue')
        setBackgroundColor5('navy')
    }
    const osflOrganizacionValor = osflOrganizacion ? 0.8 : '';


    //Valor dolar ingresado 
    const [dolar, setDolar] = useState(0)

    //Check-Box dentro de dropdawn 'RDS'
    const [pirdBasica, setPirdBasica] = useState(false)
    const [pirdCompleja, setPirdCompleja] = useState(false)


    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const pirdBasicaButton = () => {
        setPirdCompleja(false);
        setPirdBasica(!pirdBasica);
    };
    const pirdBasicaValor = pirdBasica ? 9.120 : '';

    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const pirdComplejaButton = () => {
        setPirdBasica(false);
        setPirdCompleja(!pirdCompleja)
    }
    const pirdComplejaValor = pirdCompleja ? 14.592 : '';

    //Check box Anuncios 

    const [anuncioBasicos, setAnunciosBasicos] = useState(false);
    const [anunciosComplejos, setAnunciosComplejos] = useState(false)

    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const anunciosBasicaButton = () => {
        setAnunciosComplejos(false)
        setAnunciosBasicos(!anuncioBasicos);

    }
    const anuncioBasicosValor = pirdBasica ? 6.384 : '';

    const anunciosComplejaButton = () => {
        setAnunciosBasicos(false)
        setAnunciosComplejos(!anunciosComplejos);
    }
    const anunciosComplejosValor = pirdBasica ? 9.780 : '';

    // SI / NO Abono integral RDS
    const [integralRDS, setIntegralRDS] = useState(false);

    const abonoIntregralRDS = (value) => {
        setIntegralRDS(value);
    }

    // Drop Administracion Integral Redes
    const [redesFbIgFBAds, setRedesFbIgFBAds] = useState(false);
    const [redesFbIgGoogleAds, setRedesFbIgGoogleAds] = useState(false)
    const [redesFbIgFBAdsGoogleAds, setRedesFbIgFNBdsGoogleAds] = useState(false)

    //Cada Opcion del dropDawn
    const redesFbIgFBAdsButton = () => {
        setRedesFbIgFBAds(!redesFbIgFBAds);
        setRedesFbIgGoogleAds(false);
        setRedesFbIgFNBdsGoogleAds(false)
    }
    // Valor final 
    const redesFbIgFBAdsValor = redesFbIgFBAds ? 10.000 : '';

    //Cada Opcion del dropDawn
    const redesFbIgGoogleAdsButton = () => {
        setRedesFbIgFBAds(false);
        setRedesFbIgGoogleAds(!redesFbIgGoogleAds);
        setRedesFbIgFNBdsGoogleAds(false)
    }
    // Valor final 
    const redesFbIgGoogleAdsValor = redesFbIgGoogleAds ? 11.000 : '';

    //Cada Opcion del dropDawn
    const redesFbIgFBAdsGoogleAdsButton = () => {
        setRedesFbIgFBAds(false);
        setRedesFbIgGoogleAds(false);
        setRedesFbIgFNBdsGoogleAds(!redesFbIgFBAdsGoogleAds)
    }
    // Valor final 
    const redesFbIgFBAdsGoogleAdsValor = redesFbIgFBAdsGoogleAds ? 12.000 : '';


    //Monto sugerido de pauta paga
    const [montoSugeridoPautaPaga, setMontoSugeridoPautaPaga] = useState('');

    //DropDawn Linkedin
    const [linkekdin2, setLinkedin2] = useState(false);
    const [linkedin3, setLinkedin3] = useState(false);
    const [linkedin4, setLinkedin4] = useState(false);

    const linkekdin2Button = () => {
        setLinkedin2(!linkekdin2);
        setLinkedin3(false);
        setLinkedin4(false)
    }
    const linkekdin2Valor = linkekdin2 ? 10.000 : '';

    const linkedin3Button = () => {
        setLinkedin2(false);
        setLinkedin3(!linkedin3);
        setLinkedin4(false)
    }
    const linkedin3Valor = linkedin3 ? 11.000 : '';

    const linkedin4Button = () => {
        setLinkedin2(false);
        setLinkedin3(false);
        setLinkedin4(!linkedin4)
    }
    const linkedin4Valor = linkedin4 ? 12.000 : '';

    //DropDawn diseño administracion redes sociales
    const [fbIg3post2historias, setFbIg3post2historias] = useState(false);
    const [fbIg4post3historias, setFbIg4post3historias] = useState(false);
    const [fbIg5post4historias, setFbIg5post4historias] = useState(false);
    const [instagramCard15, setInstagramCard15] = useState(false);
    const [instagramCard18, setInstagramCard18] = useState(false);


    const fbIg3post2historiasButton = () => {
        setFbIg3post2historias(!fbIg3post2historias);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false);
        setInstagramCard15(false);
        setInstagramCard18(false);
    }
    const fbIg3post2historiasValor = fbIg3post2historias ? 10.000 : '';

    const fbIg4post3historiasButton = () => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(!fbIg4post3historias);
        setFbIg5post4historias(false);
        setInstagramCard15(false);
        setInstagramCard18(false);
    }
    const fbIg4post3historiasValor = fbIg4post3historias ? 11.000 : '';

    const fbIg5post4historiasButton = () => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(!fbIg5post4historias)
        setInstagramCard15(false);
        setInstagramCard18(false);
    }
    const fbIg5post4historiasValor = fbIg5post4historias ? 12.000 : '';


    const instagramCard15Button = () => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false)
        setInstagramCard15(!instagramCard15);
        setInstagramCard18(false);
    }
    const instagramCard15Valor = instagramCard15 ? 13.000 : '';


    const instagramCard18Button = () => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false)
        setInstagramCard15(false);
        setInstagramCard18(!instagramCard18);
    }
    const instagramCard18Valor = instagramCard18 ? 14.000 : '';

    //DropDawn diseño administracion Campañas
    const [fbAds, setFbAds] = useState(false);
    const [googleAds, setGoogleAds] = useState(false);
    const [fbGoogleAds, setFbGoogleAds] = useState(false);

    const fbAdsButton = () => {
        setFbAds(!fbAds);
        setGoogleAds(false);
        setFbGoogleAds(false);
        setInstagramCard18(false);
    }
    const fbAdsValor = fbAds ? 10.000 : '';

    const googleAdsButton = (isChecked) => {
        setFbAds(false);
        setGoogleAds(!googleAds);
        setFbGoogleAds(false);

    }
    const googleAdsValor = googleAds ? 11.000 : '';

    const fbGoogleAdsButton = () => {
        setFbAds(false);
        setGoogleAds(false);
        setFbGoogleAds(!fbGoogleAds);

    }
    const fbGoogleAdsValor = fbGoogleAds ? 12.000 : '';

    //Drop Newsletter
    const [newsletter1, setNewsletter1] = useState(false);
    const [newsletter2, setNewsletter2] = useState(false);
    const [newsletter3, setNewsletter3] = useState(false);

    const newsletter1Button = () => {
        setNewsletter1(!newsletter1);
        setNewsletter2(false);
        setNewsletter3(false);
    }
    const newsletter1Valor = newsletter1 ? 10.000 : '';

    const newsletter2Button = () => {
        setNewsletter1(false);
        setNewsletter2(!newsletter2);
        setNewsletter3(false);
    }
    const newsletter2Valor = newsletter2 ? 11.000 : '';

    const newsletter3Button = () => {
        setNewsletter1(false);
        setNewsletter2(false);
        setNewsletter3(!newsletter3);
    }
    const newsletter3Valor = newsletter3 ? 12.000 : '';



    //DropDawn Identidad
    const [logo, setLogo] = useState(false);
    const [rediseñoIdentidad, setRediseñoIdentidad] = useState(false);
    const [diseñoMarca, setDiseñoMarca] = useState(false);
    const [naming, setNaming] = useState(false);

    const logoButton = () => {
        setLogo(!logo);
        setRediseñoIdentidad(false);
        setDiseñoMarca(false);
        setNaming(false);
    }
    const logoValor = logo ? 10.000 : '';

    const rediseñoIdentidadButton = () => {
        setLogo(false);
        setRediseñoIdentidad(!rediseñoIdentidad);
        setDiseñoMarca(false);
        setNaming(false);
    }
    const rediseñoIdentidadValor = rediseñoIdentidad ? 11.000 : '';

    const diseñoMarcaButton = () => {
        setLogo(false);
        setRediseñoIdentidad(false);
        setDiseñoMarca(!diseñoMarca);
        setNaming(false);
    }
    const diseñoMarcaValor = diseñoMarca ? 12.000 : '';

    const namingButton = () => {
        setLogo(false);
        setRediseñoIdentidad(false);
        setDiseñoMarca(false);
        setNaming(!naming);
    }
    const namingValor = naming ? 13.000 : '';

    // Input Numerico de horas totales  de la sesion de fotos 
    const [horasTotalesSesionFotos, setHorasTotalesSesionFotos] = useState('')


    //Switch Asesor de imagen 
    const [asesorImagen, setAsesorImagen] = useState('');

    const asesorImagenSwitch = () => {
        setAsesorImagen(!asesorImagen);
    }

    //Switch Asesor de imagen 
    const [contenidoEditadoDiseño, setContenidoEditadoDiseño] = useState(false);

    const contenidoEditadoDiseñoSwitch = () => {
        setContenidoEditadoDiseño(!contenidoEditadoDiseño);
    }

    //Switch "La seccion de fotos es en nuestro estudio Fotografico ?""
    const [seccionFotosEnCriteria, setSeccionFotosEnCriteria] = useState(0);

    const seccionFotosEnCriteriaSwitch = () => {
        setSeccionFotosEnCriteria(!seccionFotosEnCriteria);
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

                    <Button title="Gran Organizacion (+50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={granOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor1 }} />
                    <Button title="Mediana Organizacion (20-50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={medianaOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor2 }} />
                    <Button title="Pequeña Organizacion (5-20 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={pequeOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor3 }} />
                    <Button title="Micro Organizacion (5-5 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={microeOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor4 }} />
                    <Button title="Particular OSFL" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={osflOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor5 }} />
                    {/*

                     Dependiendo el boton seleccionado, representa true o false , y al ser true pasa a un valor numerico por un if / else
                     Si un input es igual al valor seleccionado muestra el valor en pantalla ejemplo, granOrganizacion === 0.9 se muestra el input

                     */}
                    {granOrganizacion === true && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'1.4'} />
                    )}
                    {medianaOrganizacion === true && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'1.2'} />
                    )}
                    {pequeOrganizacion === true && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'1'} />
                    )}
                    {microOrganizacion === true && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.9'} />
                    )}
                    {osflOrganizacion === true && (
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
                    <>
                        <ListItem.Accordion
                            content={
                                <ListItem.Content>
                                    <ListItem.Title>Parametros Inicial RDS</ListItem.Title>
                                    <ListItem.Subtitle>Basica Y Compleja </ListItem.Subtitle>
                                </ListItem.Content>
                            }
                            isExpanded={expandedRDS}
                            onPress={() => {
                                setExpandedRDS(!expandedRDS);
                            }}>

                            <View style={styles.containerDropDawn}>

                                <CheckBox title="PIRD Básica" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdBasica} onPress={pirdBasicaButton} />
                                <CheckBox title="PIRD Compleja" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdCompleja} onPress={pirdComplejaButton} />
                                {pirdBasica === true && (
                                    <View>
                                        <Input disabled label={'Resultado de PIRD Básica '} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.120' />
                                    </View>
                                )}
                                {pirdCompleja === true && (
                                    <View>
                                        <Input disabled label={'Resultado de PIRD Compleja'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.592' />
                                    </View>
                                )}
                            </View>


                        </ListItem.Accordion>
                    </>

                    <ListItem.Accordion
                        content={
                            <ListItem.Content>
                                <ListItem.Title>Administracion Anuncios </ListItem.Title>
                                <ListItem.Subtitle>Basica Y Compleja </ListItem.Subtitle>
                            </ListItem.Content>
                        }
                        isExpanded={expandedAnuncios}
                        onPress={() => {
                            setExpandedAnuncios(!expandedAnuncios);
                        }}>

                        <View style={styles.containerDropDawn}>

                            <CheckBox title="Básica" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={anuncioBasicos} onPress={anunciosBasicaButton} />
                            <CheckBox title="Compleja" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={anunciosComplejos} onPress={anunciosComplejaButton} />

                            {anuncioBasicos === true && (

                                <View>
                                    <Input disabled label={'Monto CBM'} type='text' id='text' style={styles.imputsCotizacion} placeholder='6.384' />
                                </View>

                            )}

                            {anunciosComplejos === true && (

                                <View>
                                    <Input disabled label={'Monto CBM'} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.780' />
                                </View>

                            )}


                        </View>


                    </ListItem.Accordion>


                    <Text>Abono Integral RDS? </Text>
                    <ButtonGroup
                        buttons={['Si', 'No']}
                        selectedIndex={integralRDS}
                        onPress={abonoIntregralRDS}
                        containerStyle={{ marginBottom: 20, marginTop: 20 }}
                    />

                    {/* Sea valor 0 o 1 por el boton se muestran los campos indicados  */}
                    {integralRDS === 0 && (

                        <ListItem.Accordion
                            content={
                                <ListItem.Content>
                                    <ListItem.Title>Administracion Integral Redes </ListItem.Title>
                                    <ListItem.Subtitle>Facebook Instagram Google </ListItem.Subtitle>
                                </ListItem.Content>
                            }
                            isExpanded={expandedRedesAds}
                            onPress={() => {
                                setExpandedRedesAds(!expandedRedesAds);
                            }}>

                            <View style={styles.containerDropDawn}>

                                <CheckBox title="Ig FB " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgFBAds} onPress={redesFbIgFBAdsButton} />
                                <CheckBox title="IG FB GOOGLEads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgGoogleAds} onPress={redesFbIgGoogleAdsButton} />
                                <CheckBox title="IG FB GOOGLEads fbads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgFBAdsGoogleAds} onPress={redesFbIgFBAdsGoogleAdsButton} />

                                {redesFbIgFBAds === true && (
                                    <View>
                                        <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                    </View>
                                )}

                                {redesFbIgGoogleAds === true && (
                                    <View>
                                        <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                    </View>
                                )}

                                {redesFbIgFBAdsGoogleAds === true && (
                                    <View>
                                        <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                    </View>
                                )}

                            </View>
                        </ListItem.Accordion>

                    )}

                    {integralRDS === 1 && (
                        <View>
                            <ListItem.Accordion
                                content={
                                    <ListItem.Content>
                                        <ListItem.Title>Diseño y Administracion de redes sociales </ListItem.Title>
                                        <ListItem.Subtitle>Facebook e Instagram Posteos  </ListItem.Subtitle>
                                    </ListItem.Content>
                                }
                                isExpanded={expandedDiseñoRedes}
                                onPress={() => {
                                    setExpandedDiseñoRedes(!expandedDiseñoRedes);
                                }}>

                                <View style={styles.containerDropDawn}>

                                    <CheckBox title="FB + IG ( 3 Posteos  + 2 Historias Semanales ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbIg3post2historias} onPress={fbIg3post2historiasButton} />
                                    <CheckBox title="FB + IG ( 4 Posteos  + 3 Historias Semanales ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbIg4post3historias} onPress={fbIg4post3historiasButton} />
                                    <CheckBox title="FB + IG ( 5 Posteos  + 4 Historias Semanales ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbIg5post4historias} onPress={fbIg5post4historiasButton} />
                                    <CheckBox title="Instagram Business Card ( 15 Posteos + Historias Mensules ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={instagramCard15} onPress={instagramCard15Button} />
                                    <CheckBox title="Instagram Business Card ( 18 Posteos + Historias Mensules )" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={instagramCard18} onPress={instagramCard18Button} />

                                    {fbIg3post2historias === true && (
                                        <View>
                                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                        </View>
                                    )}

                                    {fbIg4post3historias === true && (
                                        <View>
                                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                        </View>
                                    )}

                                    {fbIg5post4historias === true && (
                                        <View>
                                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                        </View>
                                    )}
                                    {instagramCard15 === true && (
                                        <View>
                                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='13.000' />
                                        </View>
                                    )}
                                    {instagramCard18 === true && (
                                        <View>
                                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.000' />
                                        </View>
                                    )}

                                </View>
                            </ListItem.Accordion>

                            <ListItem.Accordion
                                content={
                                    <ListItem.Content>
                                        <ListItem.Title>Campañas</ListItem.Title>
                                        <ListItem.Subtitle>Facebook Ads, Google Ads  </ListItem.Subtitle>
                                    </ListItem.Content>
                                }
                                isExpanded={expandedCampañas}
                                onPress={() => {
                                    setExpandedCampañas(!expandedCampañas);
                                }}>

                                <View style={styles.containerDropDawn}>

                                    <CheckBox title="FB Ads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbAds} onPress={fbAdsButton} />
                                    <CheckBox title="Google Ads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={googleAds} onPress={googleAdsButton} />
                                    <CheckBox title="FB + Google Ads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbGoogleAds} onPress={fbGoogleAdsButton} />

                                    {fbAds === true && (
                                        <View>
                                            <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                        </View>
                                    )}
                                    {googleAds === true && (
                                        <View>
                                            <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                        </View>
                                    )}
                                    {fbGoogleAds === true && (
                                        <View>
                                            <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                        </View>
                                    )}
                                </View>
                            </ListItem.Accordion>

                        </View>

                    )}


                    <Input keyboardType="numeric" label={'Monto Sugerido Pauta Paga'} type='Monto' id='MontoSugerido' style={styles.imputsCotizacion} placeholder='$ 0' value={montoSugeridoPautaPaga} onChangeText={(text) => setMontoSugeridoPautaPaga(text)} />


                    <ListItem.Accordion
                        content={
                            <ListItem.Content>
                                <ListItem.Title>Diseño y redaccion Linked-In</ListItem.Title>
                                <ListItem.Subtitle>Linked Posteos Mensuales</ListItem.Subtitle>
                            </ListItem.Content>
                        }
                        isExpanded={expandedLinkedin}
                        onPress={() => {
                            setExpandedLinkedin(!expandedLinkedin);
                        }}>

                        <View style={styles.containerDropDawn}>

                            <CheckBox title="LINKEDIN 2 Posteos Mensuales " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={linkekdin2} onPress={linkekdin2Button} />
                            <CheckBox title="LINKEDIN 3 Posteos Mensuales " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={linkedin3} onPress={linkedin3Button} />
                            <CheckBox title="LINKEDIN 4 Posteos Mensuales " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={linkedin4} onPress={linkedin4Button} />


                            {linkekdin2 === true && (
                                <View>
                                    <Input disabled label={'Resultado LinkedIn'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                </View>
                            )}
                            {linkedin3 === true && (
                                <View>
                                    <Input disabled label={'Resultado LinkedIn'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                </View>
                            )}
                            {linkedin4 === true && (
                                <View>
                                    <Input disabled label={'Resultado LinkedIn'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                </View>
                            )}
                        </View>
                    </ListItem.Accordion>

                    <ListItem.Accordion
                        content={
                            <ListItem.Content>
                                <ListItem.Title>Newsletter</ListItem.Title>
                                <ListItem.Subtitle>Newsletter Posteos Mensuales</ListItem.Subtitle>
                            </ListItem.Content>
                        }
                        isExpanded={expandedNewsletter}
                        onPress={() => {
                            setExpandedNewsletter(!expandedNewsletter);
                        }}>

                        <View style={styles.containerDropDawn}>

                            <CheckBox title="Newsletter: 1 Posteo Mensual " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={newsletter1} onPress={newsletter1Button} />
                            <CheckBox title="Newsletter: 2 Posteos Menuales" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={newsletter2} onPress={newsletter2Button} />
                            <CheckBox title="Newsletter: 3 Posteos Mensuales" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={newsletter3} onPress={newsletter3Button} />


                            {newsletter1 === true && (
                                <View>
                                    <Input disabled label={'Resultado Newsletter'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                </View>
                            )}
                            {newsletter2 === true && (
                                <View>
                                    <Input disabled label={'Resultado Newsletter'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                </View>
                            )}
                            {newsletter3 === true && (
                                <View>
                                    <Input disabled label={'Resultado Newsletter'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                </View>
                            )}
                        </View>
                    </ListItem.Accordion>
                    <DropDawn />
                    {/* <ListItem.Accordion
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
                    </ListItem.Accordion> */}

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
                                onValueChange={contenidoEditadoDiseñoSwitch}
                            />

                        </View>
                        {contenidoEditadoDiseño === true && (
                            <View>
                                {/* Cantidad de fotos a entregar */}
                                <Input keyboardType="numeric" label={'Cantidad de Fotos a Entregar '} type='text' id='text' style={styles.imputsCotizacion} placeholder='0' value={fotosAEntregar} onChangeText={(text) => setFotosAEntregar(text)} />

                            </View>
                        )}

                        {/* Switch Asesor de imagen */}
                        <View style={styles.containerColum}>

                            <Text style={styles.titleHome}>Produccion Fotografica en nuestro Estudio ? </Text>

                            <Switch
                                title="Limpiar"
                                label='texto'
                                value={seccionFotosEnCriteria}
                                onValueChange={seccionFotosEnCriteriaSwitch}
                            />

                        </View>

                    </View>

                    {/* Cantidad de fotos a entregar */}
                    <Input keyboardType="numeric" label={'Cantidad de Fotos a Entregar '} type='text' id='text' style={styles.imputsCotizacion} placeholder='0' value={fotosAEntregar} onChangeText={(text) => setFotosAEntregar(text)} />

                    {/* DropDown Identidad */}
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
                        }}>
                        <View style={styles.containerDropDawn}>

                            <CheckBox title="Logo" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={logo} onPress={logoButton} />
                            <CheckBox title="rediseño identidad" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={rediseñoIdentidad} onPress={rediseñoIdentidadButton} />
                            <CheckBox title="diseño marca" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={diseñoMarca} onPress={diseñoMarcaButton} />
                            <CheckBox title="naming" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={naming} onPress={namingButton} />

                            {logo === true && (
                                <View>
                                    <Input disabled label={'Resultado Identidad de la empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                                </View>
                            )}
                            {rediseñoIdentidad === true && (
                                <View>
                                    <Input disabled label={'Resultado Identidad de la empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                                </View>
                            )}
                            {diseñoMarca === true && (
                                <View>
                                    <Input disabled label={'Resultado Identidad de la empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                </View>
                            )}
                            {naming === true && (
                                <View>
                                    <Input disabled label={'Resultado Identidad de la empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                                </View>
                            )}
                        </View>

                    </ListItem.Accordion>



                    <Button title='Cotizar' titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10 }}

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
