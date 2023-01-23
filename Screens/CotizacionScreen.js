import React from "react";
import { useState, FC } from "react";
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Alert } from 'react-native';
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config.js";
import { ButtonGroup } from '@rneui/themed';
import { Switch, Dialog, } from '@rneui/themed';
import { CheckBox, Icon } from '@rneui/themed';



export const CotizacionScreen = () => {

    const navigation = useNavigation();

    //variables para traer el nombre de usuario al formulario que está cotizando 
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const user = auth.currentUser;
    const criteriaEmail = user.email;

    //estado de los inputs 
    const [marca, setMarca] = useState('');
    const [rubro, setRubro] = useState('');
    const [nombreContacto, setNombreContacto] = useState('');
    const [apellidoContacto, setApellidoContacto] = useState('');
    const [cargo, setCargo] = useState('');
    const [emailContacto, setEmailContacto] = useState('');
    const [telefonoContacto, setTelefonoContacto] = useState('')


    //PopUp Meses
    const [visible1, setVisible1] = useState(false);

    const toggleDialog1 = () => {
        setVisible1(!visible1);
    };

    //check-box dentro de popup 'MES DE COTIZACION'
    const [mesCotizacionEnero, setMesCotizacionEnero] = useState(false);
    const [mesCotizacionFebrero, setMesCotizacionFebrero] = useState(false);
    const [mesCotizacionMarzo, setMesCotizacionMarzo] = useState(false);
    const [mesCotizacionAbril, setMesCotizacionAbril] = useState(false);
    const [mesCotizacionMayo, setMesCotizacionMayo] = useState(false);
    const [mesCotizacionJunio, setMesCotizacionJunio] = useState(false);
    const [mesCotizacionJulio, setMesCotizacionJulio] = useState(false);
    const [mesCotizacionAgosto, setMesCotizacionAgosto] = useState(false);
    const [mesCotizacionSeptiembre, setMesCotizacionSeptiembre] = useState(false);
    const [mesCotizacionOctubre, setMesCotizacionOctubre] = useState(false);
    const [mesCotizacionNoviembre, setMesCotizacionNoviembre] = useState(false);
    const [mesCotizacionDiciembre, setMesCotizacionDiciembre] = useState(false);

    //Nivel Cliente Empresa   
    const [granOrganizacion, setGranOrganizacion] = useState(false)
    const [medianaOrganizacion, setMedianaOrganizacion] = useState(false)
    const [pequeOrganizacion, setPequeOrganizacion] = useState(false)
    const [microOrganizacion, setMicroOrganizacion] = useState(false)
    const [osflOrganizacion, setOsflOrganizacion] = useState(false)

    //PopUp SocialMedia
    const [socialMedia, setSocialMedia] = useState(false);

    const socialMediaPopUp = () => {
        setSocialMedia(!socialMedia);
    };

    //Check-Box dentro de popup 'RDS'
    const [pirdBasica, setPirdBasica] = useState(false)
    const [pirdCompleja, setPirdCompleja] = useState(false)




    const enviarFormulario = () => {
        const formData = { marca, rubro, nombreContacto, apellidoContacto, cargo, emailContacto, telefonoContacto, criteriaEmail, mesCotizacionEnero, pirdBasica, pirdCompleja };
        console.log(formData);
        Alert.alert("Cotizacion realizada por " + " " + user.email)

        // Enviar petición al servidor
    }


    return (
        <SafeAreaView  >

            <ScrollView style={styles.scrollView}>

                <View style={styles.containerCoti}>

                    <Input label={'Marca'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Ingresar marca' value={marca} onChangeText={(text) => setMarca(text)} />

                    <Input type='rubro' id='rubro' style={styles.imputsCotizacion} placeholder='Rubro' value={rubro} onChangeText={(text) => setRubro(text)} />

                    {/* pop up */}
                    <Button title="Mes de cotizacion" onPress={toggleDialog1} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 20, color: 'black' }} buttonStyle={{
                        backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10
                    }} />

                    {/* Contenido del pop up  Meses*/}

                    <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>

                        {/* Meses*/}
                        <Dialog.Title title="Mes de cotizacion" />

                        <CheckBox title="Enero" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionEnero} onPress={() => setMesCotizacionEnero(!mesCotizacionEnero)} />
                        <CheckBox title="Febrero" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionFebrero} onPress={() => setMesCotizacionFebrero(!mesCotizacionFebrero)} />
                        <CheckBox title="Marzo" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionMarzo} onPress={() => setMesCotizacionMarzo(!mesCotizacionMarzo)} />
                        <CheckBox title="Abril" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionAbril} onPress={() => setMesCotizacionAbril(!mesCotizacionAbril)} />
                        <CheckBox title="Mayo" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionMayo} onPress={() => setMesCotizacionMayo(!mesCotizacionMayo)} />
                        <CheckBox title="Junio" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionJunio} onPress={() => setMesCotizacionJunio(!mesCotizacionJunio)} />
                        <CheckBox title="Julio" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionJulio} onPress={() => setMesCotizacionJulio(!mesCotizacionJulio)} />
                        <CheckBox title="Agosto" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionAgosto} onPress={() => setMesCotizacionAgosto(!mesCotizacionAgosto)} />
                        <CheckBox title="Septiembre" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionSeptiembre} onPress={() => setMesCotizacionSeptiembre(!mesCotizacionSeptiembre)} />
                        <CheckBox title="Octubre" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionOctubre} onPress={() => setMesCotizacionOctubre(!mesCotizacionOctubre)} />
                        <CheckBox title="Noviembre" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionNoviembre} onPress={() => setMesCotizacionNoviembre(!mesCotizacionNoviembre)} />
                        <CheckBox title="Diciembre" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mesCotizacionDiciembre} onPress={() => setMesCotizacionDiciembre(!mesCotizacionDiciembre)} />

                        <Button title="Confirmar" onPress={toggleDialog1} />

                    </Dialog>

                    <Input type='contacto' id='contacto' style={styles.imputsCotizacion} placeholder='Nombre de Contacto' value={nombreContacto} onChangeText={(text) => setNombreContacto(text)} />

                    <Input type='apellidoContacto' id='apellidoContacto' style={styles.imputsCotizacion} placeholder='Apellido de Contacto' value={apellidoContacto} onChangeText={(text) => setApellidoContacto(text)} />

                    <Input type='cargo' id='cargo' style={styles.imputsCotizacion} placeholder='Cargo' value={cargo} onChangeText={(text) => setCargo(text)} />

                    <Input type='email' id='email' style={styles.imputsCotizacion} placeholder='Email de Contacto' value={emailContacto} onChangeText={(text) => setEmailContacto(text)} />

                    <Input type='phone' id='telefono' style={styles.imputsCotizacion} placeholder='Telefono de Contacto' value={telefonoContacto} onChangeText={(text) => setTelefonoContacto(text)} />

                    <Text > Nivel del cliente como empresa </Text>

                    <Button title="Gran Organizacion (+50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={() => setGranOrganizacion(!granOrganizacion)} />
                    <Button title="Mediana Organizacion (20-50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={() => setMedianaOrganizacion(!medianaOrganizacion)} />
                    <Button title="Pequeña Organizacion (5-20 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={() => setPequeOrganizacion(!pequeOrganizacion)} />
                    <Button title="Micro Organizacion (5-5 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={() => setMicroOrganizacion(!microOrganizacion)} />
                    <Button title="Particular OSFL" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={() => setOsflOrganizacion(!osflOrganizacion)} />

                    {granOrganizacion === true && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.9'} />
                    )}

                    {medianaOrganizacion === true && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.6'} />
                    )}

                    {pequeOrganizacion === true && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.4'} />
                    )}

                    {microOrganizacion === true && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.2'} />
                    )}

                    {osflOrganizacion === true && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='valorOSFL' style={styles.imputsCotizacion} placeholder='Marca' value={'0.1'} />
                    )}

                    {granOrganizacion === false && medianaOrganizacion === false && pequeOrganizacion === false && microOrganizacion === false && osflOrganizacion === false && (
                        <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0'} />
                    )}



                    <Input disabled label={'Vista Dolar Hoy'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'www.dolarhoy.com'} />


                    <Input type='phone' id='telefono' style={styles.imputsCotizacion} placeholder='Valor dolar BLUE' />

                    <Input disabled label={'Cotizacion Realizada por'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={user.email} />


                    <Text style={styles.titleNegro}>Social Media</Text>

                    <Button title="Parametros Inicial RDS" onPress={socialMediaPopUp} titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{
                        backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10
                    }} />

                    <Dialog isVisible={socialMedia} onBackdropPress={socialMediaPopUp}>

                        {/* Opciones Social Media*/}
                        <Dialog.Title title="Parametros Inicial RDS" />

                        <CheckBox title="PIRD Básica" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdBasica} onPress={() => setPirdBasica(!pirdBasica)} />
                        <CheckBox title="PIRD Compleja" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdCompleja} onPress={() => setPirdCompleja(!pirdCompleja)} />

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





                    <Button title='Cotizar' titleStyle={{ color: 'black', fontSize: 18 }} containerStyle={{ marginHorizontal: 10, marginVertical: 50, color: 'black' }} buttonStyle={{
                        backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10
                    }} onPress={() => {
                        enviarFormulario(); navigation.navigate("home")
                    }} />


                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
