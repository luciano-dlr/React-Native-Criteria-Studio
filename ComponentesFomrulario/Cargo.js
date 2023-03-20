import React from "react";
import { useState } from "react";
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';

// Input para almacenar el cargo ingresado

export const Cargo = () => {

    const [cargo, setCargo] = useState('');

    return (

        <Input

            label={'Cargo'}
            type='cargo'
            id='cargo'
            style={styles.imputsCotizacion}
            placeholder='Cargo'
            value={cargo}
            onChangeText={(text) => setCargo(text)} />

    )
}