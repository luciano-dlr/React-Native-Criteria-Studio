import React from "react";
import { useState } from "react";
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';

// Input para almacenar Las Fotos a entregar 

export const FotosAEntregar = () => {

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