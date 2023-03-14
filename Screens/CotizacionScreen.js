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
import { PrecioDolar } from "../ComponentesFomrulario/PrecioDolar";
import { DropDawnRDS } from "../ComponentesFomrulario/DropDawnRDS";
import { AdministracionAnuncios } from "../ComponentesFomrulario/AdministracionAnuncios";
import { AdministracionIntegralRedes } from "../ComponentesFomrulario/AdministracionIntegralRedes";
import { DiseñoAdministracionRedes } from "../ComponentesFomrulario/DiseñoAdministracionRedes"



import { DropDawnGoogle } from "../ComponentesFomrulario/DropDawnGoogle";
import { TipoEmpresa } from "../ComponentesFomrulario/TipoEmpresa";




// import MyContext from './ValorContext.js';


export const CotizacionScreen = () => {

    const [expanded, setExpanded] = useState(false);
    // const [expandedRDS, setExpandedRDS] = useState(false);
    // const [expandedAnuncios, setExpandedAnuncios] = useState(false);
    // const [expandedRedesAds, setExpandedRedesAds] = useState(false);
    // const [expandedDiseñoRedes, setExpandedDiseñoRedes] = useState(false);
    const [expandedCampañas, setExpandedCampañas] = useState(false);
    const [expandedLinkedin, setExpandedLinkedin] = useState(false);
    const [expandedNewsletter, setExpandedNewsletter] = useState(false);


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

                    <Marca />

                    <Rubro />

                    <NombreContacto />

                    <ApellidoContacto />

                    <Cargo />

                    <EmailContacto />

                    <TelefonoContacto />

                    <TipoEmpresa />

                    {/* Imput Informativo  */}
                    <Input disabled label={'Vista Dolar Hoy'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'www.dolarhoy.com'} />

                    <PrecioDolar />

                    <Input disabled label={'Cotizacion Realizada por'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={user.email} />

                    <Text style={styles.titleNegro}>Social Media</Text>

                    <DropDawnRDS />

                    <AdministracionAnuncios />

                    <Text>Abono Integral RDS? </Text>
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

                    <DropDawnGoogle />

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
