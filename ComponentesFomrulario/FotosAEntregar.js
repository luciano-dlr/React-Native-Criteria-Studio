import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';

export const FotosAEntregar = () => {

    // Input Numerico de Cantidad de fotos a entregar
    const [fotosAEntregar, setFotosAEntregar] = useState('');

    return (

        <Input
            keyboardType="numeric"
            label={'Cantidad de Fotos a Entregar '}
            type='text'
            id='text'
            style={styles.imputsCotizacion}
            placeholder='0'
            value={fotosAEntregar}
            onChangeText={(text) => setFotosAEntregar(text)} />

    )
}