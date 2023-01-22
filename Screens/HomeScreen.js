import React from "react";
import { useState, FC } from "react";
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
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



export const HomeScreen = () => {

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


  //PopUp SocialMedia
  const [socialMedia, setSocialMedia] = useState(false);

  const socialMediaPopUp = () => {
    setSocialMedia(!socialMedia);
  };

  //Check-Box dentro de popup 'RDS'











  const enviarFormulario = () => {
    const formData = { marca, rubro, nombreContacto, apellidoContacto, cargo, emailContacto, telefonoContacto, criteriaEmail, mesCotizacionEnero };
    console.log(formData);
    // Enviar petición al servidor
  }


  return (
    <SafeAreaView  >

      <ScrollView style={styles.scrollView}>

        <View>



          <Text style={styles.titleNegro}>Cotizacion</Text>

          <Input label={'Marca'} type='marca' id='marca' style={styles.imputsBlanco} placeholder='' value={marca} onChangeText={(text) => setMarca(text)} />

          <Input disabled label={'Marca'} type='marca' id='marca' style={styles.imputsBlanco} placeholder='Marca' value={marca} />

          <Input type='rubro' id='rubro' style={styles.imputsBlanco} placeholder='Rubro' value={rubro} onChangeText={(text) => setRubro(text)} />

          {/* pop up */}
          <Button title="Mes de cotizacion" onPress={toggleDialog1} containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} />

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


          {mesCotizacionEnero === true && (
            <Text style={styles.titleNegro}>Texto invocado por mesCotizacionEnero</Text>
          )}

          <Input type='contacto' id='contacto' style={styles.imputsBlanco} placeholder='Nombre de Contacto' value={nombreContacto} onChangeText={(text) => setNombreContacto(text)} />

          <Input type='apellidoContacto' id='apellidoContacto' style={styles.imputsBlanco} placeholder='Apellido de Contacto' value={apellidoContacto} onChangeText={(text) => setApellidoContacto(text)} />

          <Input type='cargo' id='cargo' style={styles.imputsBlanco} placeholder='Cargo' value={cargo} onChangeText={(text) => setCargo(text)} />

          <Input type='email' id='email' style={styles.imputsBlanco} placeholder='Email de Contacto' value={emailContacto} onChangeText={(text) => setEmailContacto(text)} />

          <Input type='phone' id='telefono' style={styles.imputsBlanco} placeholder='Telefono de Contacto' value={telefonoContacto} onChangeText={(text) => setTelefonoContacto(text)} />

          <Text > Nivel del cliente como empresa </Text>

          <Button title="Gran Organizacion (+50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} />
          <Button title="Mediana Organizacion (20-50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} />
          <Button title="Pequeña Organizacion (5-20 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} />
          <Button title="Micro Organizacion (5-5 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} />
          <Button title="Particular OSFL" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} />

          <Text>Vista Dolar Hoy www.dolarhoy.com</Text>

          <Input type='phone' id='telefono' style={styles.imputsBlanco} placeholder='Valor dolar BLUE' />

          <Text >Cotizacion Realizada por {user.email}</Text>

          <Text style={styles.titleNegro}>Social Media</Text>

          <Button title="Parametros Inicial RDS" onPress={socialMediaPopUp} containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} />

          <Dialog isVisible={socialMedia} onBackdropPress={socialMediaPopUp}>

            {/* Meses*/}
            <Dialog.Title title="Parametros Inicial RDS" />


            <Button title="Confirmar" onPress={socialMediaPopUp} />

          </Dialog>

          <Button title='Cotizar' onPress={enviarFormulario} />


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};






