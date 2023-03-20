import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Switch } from '@rneui/themed';
import { Text, View } from 'react-native';

export const ProduccionFotografica = () => {

    //Switch "La seccion de fotos es en nuestro estudio Fotografico ?""
    const [seccionFotosEnCriteria, setSeccionFotosEnCriteria] = useState(0);

    const seccionFotosEnCriteriaSwitch = () => {
        setSeccionFotosEnCriteria(!seccionFotosEnCriteria);
    }


    return (
        <View style={styles.containerColum}>

            <Text style={styles.titleHome}>Produccion Fotografica en nuestro Estudio ? </Text>

            <Switch
                title="Limpiar"
                label='texto'
                value={seccionFotosEnCriteria}
                onValueChange={seccionFotosEnCriteriaSwitch}
            />

        </View>
    )
}