import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';


export const Marca = () => {

    const [marca, setMarca] = useState('');

    return (

        <Input

            label={'Marca'}
            type='marca'
            id='marca' s
            tyle={styles.imputsCotizacion}
            placeholder='Ingresar marca'
            value={marca}
            onChangeText={(text) => setMarca(text)} />
    )
}