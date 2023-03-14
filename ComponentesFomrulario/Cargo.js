import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';


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