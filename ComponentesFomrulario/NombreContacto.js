import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';


export const NombreContacto = () => {

    const [nombreContacto, setNombreContacto] = useState('');


    return (

        <Input

            label={'Nombre de Contacto'}
            type='contacto'
            id='contacto'
            style={styles.imputsCotizacion}
            placeholder='Nombre de Contacto'
            value={nombreContacto}
            onChangeText={(text) => setNombreContacto(text)} />

    )
}