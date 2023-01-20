import React from "react";
import { useState, FC } from "react";
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Checkbox from 'expo-checkbox';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config.js";
import { ButtonGroup } from '@rneui/themed';
import { Switch } from '@rneui/themed';



export const HomeScreen = () => {

  //variables para traer el nombre de usuario al formulario que está cotizando 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const user = auth.currentUser;
  const criteriaEmail = user.email;

  //estado de los imputs 
  const [marca,setMarca] = useState('');
  const [rubro,setRubro] = useState('');
  const [nombreContacto,setNombreContacto] = useState('');
  const [apellidoContacto,setApellidoContacto] = useState('');
  const [cargo,setCargo] = useState('');
  const [emailContacto,setEmailContacto] = useState('');
  const [telefonoContacto,setTelefonoContacto] = useState('')


//intento de dropdawn 








  
  const enviarFormulario = () => {
    const formData = { marca,rubro,nombreContacto,apellidoContacto,cargo,emailContacto,telefonoContacto,criteriaEmail};
    console.log(formData);
    // Enviar petición al servidor
}


  return (
    <SafeAreaView  >

      <ScrollView style={styles.scrollView}>
      
        <View>

          <Text style={styles.titleNegro}>Cotizacion</Text>

          <Input type='marca' id='marca' style={styles.imputsBlanco} placeholder='Marca' value={marca} onChangeText={(text) => setMarca(text)} />

          <Input type='rubro' id='rubro' style={styles.imputsBlanco} placeholder='Rubro' value={rubro} onChangeText={(text) => setRubro(text)}/>

          <Text>Seleccionar mes estio dropdawn o pop up </Text>

          <Input type='contacto' id='contacto' style={styles.imputsBlanco} placeholder='Nombre de Contacto' value={nombreContacto} onChangeText={(text) => setNombreContacto(text)} />

          <Input type='apellidoContacto' id='apellidoContacto' style={styles.imputsBlanco} placeholder='Apellido de Contacto' value={apellidoContacto} onChangeText={(text) => setApellidoContacto(text)} />

          <Input type='cargo' id='cargo' style={styles.imputsBlanco} placeholder='Cargo' value={cargo} onChangeText={(text) => setCargo(text)} />

          <Input type='email' id='email' style={styles.imputsBlanco} placeholder='Email de Contacto' value={emailContacto} onChangeText={(text) => setEmailContacto(text)} />

          <Input type='phone' id='telefono' style={styles.imputsBlanco} placeholder='Telefono de Contacto' value={telefonoContacto} onChangeText={(text) => setTelefonoContacto(text)} />

          <Text>Grupo de botones ( dependiendo que boton cambia el valor de un imput typo nunmber) </Text>

          <Input type='phone' id='telefono' style={styles.imputsBlanco} placeholder='Valor dolar BLUE' />

          <Text >Cotizacion Realizada por {user.email}</Text>

          <Text style={styles.titleNegro}>Social Media</Text>

          <Button title='Cotizar' onPress={enviarFormulario}/>

   
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};






