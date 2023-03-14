import React from "react";
import styles from "../Styles/Styles";
import { useState, useEffect } from "react";
import { Switch } from '@rneui/themed';
import { Text, View } from 'react-native';

export const AsesorImagen = () => {
    //Switch Asesor de imagen 
    const [asesorImagen, setAsesorImagen] = useState('');

    const asesorImagenSwitch = () => {
        setAsesorImagen(!asesorImagen);
    }
    return (
        <View style={styles.containerColum}>

            <Text style={styles.titleHome}>Incluye asesor/a de imagen ? </Text>

            <Switch
                title="Limpiar"
                label='texto'
                value={asesorImagen}
                onValueChange={asesorImagenSwitch}
            />

        </View>
    )
}