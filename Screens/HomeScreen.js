import React from "react";
import styles from "../Styles/Styles";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from 'react-native';


export const HomeScreen = () => {

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






console.log("asd")