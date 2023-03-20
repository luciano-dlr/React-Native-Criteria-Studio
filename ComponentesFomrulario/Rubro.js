import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';

export const Rubro = () => {
    const [rubro, setRubro] = useState('');

    return (

        <Input

            label={'Rubro'}
            type='rubro'
            id='rubro'
            style={styles.imputsCotizacion}
            placeholder='Rubro'
            value={rubro}
            onChangeText={(text) => setRubro(text)} />

    )
}