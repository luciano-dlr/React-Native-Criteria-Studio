import React from "react";
import styles from "../Styles/Styles";
import { useNavigation, getParam } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { firebaseConfig } from "../firebase-config.js";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, params } from "firebase/firestore";
import { estadoCotizacion } from "./CotizacionScreen"
import { useRoute } from '@react-navigation/native';






export const HomeScreen = () => {


  //traer un valor de una pantalla a otra salteando agoritmo usando useRoute de navigation navigate
  // const route = useRoute();
  // const valor = route.params;



  // function handlePress() {
  //   console.log(valor)

  // }

  // function handlePress2() {

  // }








  const firestore = firebaseConfig
  // console.log(firestore)

  const db = getFirestore(app);

  const app = initializeApp(firebaseConfig);
  setDoc(doc(db, "cotizaciones", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USeee"
  });






  // const app = initializeApp(firebaseConfig);

  // app = firebase.firestore();




  //Navigation para pasar de pantalla
  const navigation = useNavigation();






  return (

    <>
      <View style={styles.containerHome} >

        {/* Columna 1 */}
        <View >

          <Text style={styles.titleHome}>Clientes</Text>

          <TouchableOpacity>
            <Image source={require('../assets/PersonalIMG.jpg')} style={{ width: 170, height: 200, margin: 10 }} />
          </TouchableOpacity>

          <TouchableOpacity >
            <Image source={require('../assets/Resumen.jpeg')} style={{ width: 170, height: 200, margin: 10 }} />
          </TouchableOpacity>

          <TouchableOpacity >
            <Image source={require('../assets/Resumen.jpeg')} style={{ width: 170, height: 200, margin: 10 }} />
          </TouchableOpacity>

        </View>

        {/* Columna 2 */}
        <View>

          <Text style={styles.titleHome}>Cotizacion</Text>

          <TouchableOpacity onPress={() => { navigation.navigate("cotizacion") }}>
            <Image source={require('../assets/CotizacionIMG.jpg')} style={{ width: 170, height: 200, margin: 10 }} />
          </TouchableOpacity>

          <TouchableOpacity >
            <Image source={require('../assets/Resumen.jpeg')} style={{ width: 170, height: 200, margin: 10 }} />
          </TouchableOpacity>

          <TouchableOpacity >
            <Image source={require('../assets/Resumen.jpeg')} style={{ width: 170, height: 200, margin: 10 }} />
          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.container} >
        <Text style={styles.titleDerechos}>©2023 Todos los derechos reservados | Desarrollado por CriteriA studio</Text>
      </View>

    </>




  );
};






