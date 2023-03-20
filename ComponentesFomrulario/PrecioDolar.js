import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';


export const PrecioDolar = () => {

    const [dolar, setDolar] = useState(0)

    return (

        <Input

            keyboardType="numeric"
            label={'Valor Dolar Blue'}
            type='Dolar'
            id='dolar'
            style={styles.imputsCotizacion}
            placeholder='Valor dolar BLUE'
            value={dolar} onChangeText={(text) => setDolar(text)}

        />

    )
}