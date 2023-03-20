import React from "react";
import styles from "../Styles/Styles";
import { useState, useEffect } from "react";
import { Switch } from '@rneui/themed';
import { Text, View } from 'react-native';

// Switch Asesor de imagen 

export const AsesorImagen = () => {

    // Estado del switch
    const [asesorImagen, setAsesorImagen] = useState(false);

    // Funcion true o false para activar y desactivar switch
    const asesorImagenSwitch = () => {
        setAsesorImagen(!asesorImagen);
    }
    return (
        <View style={styles.containerColum}>

            <Text style={styles.titleHome}>Incluye asesor/a de imagen ? </Text>

            <Switch
                title=''
                label=''
                value={asesorImagen}
                onValueChange={asesorImagenSwitch}
            />

        </View>
    )
}