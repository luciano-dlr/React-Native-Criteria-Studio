import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";





export const HomeScreen = () => {

  return (
    <View >
      <Input type='email' id='email' style={styles.imputs} placeholder='Ingresar Email' onChangeText={(text) => setEmail(text)} />
      <Text>Bienvenido Usuario</Text>
    </View>
  )
};






