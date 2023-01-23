import React from "react";
import { useState, FC } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config.js";
import { ButtonGroup } from '@rneui/themed';
import { Switch, Dialog, } from '@rneui/themed';
import { CheckBox, Icon, ActivityIndicator } from '@rneui/themed';




export const HomeScreen = () => {

  const navigation = useNavigation();





  return (

    <>
      <View style={styles.containerHome} >


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






