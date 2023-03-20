import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';

export const MontoSugeridoRDS = () => {
    const [montoSugeridoPautaPaga, setMontoSugeridoPautaPaga] = useState('');
    return (

        <Input

            keyboardType="numeric"
            label={'Monto Sugerido Pauta Paga'}
            type='Monto' id='MontoSugerido'
            style={styles.imputsCotizacion}
            placeholder='$ 0'
            value={montoSugeridoPautaPaga}
            onChangeText={(text) => setMontoSugeridoPautaPaga(text)}
        />


    )
}