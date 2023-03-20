import React from "react";
import { useState } from "react";
import { Input } from '@rneui/themed';
import styles from "../Styles/Styles";

// Input para almacenar el apellido ingresado

export const ApellidoContacto = () => {

    const [apellidoContacto, setApellidoContacto] = useState('');

    return (

        <Input

            label={'Apellido Contacto'}
            type='apellidoContacto'
            id='apellidoContacto'
            style={styles.imputsCotizacion}
            placeholder='Apellido de Contacto'
            value={apellidoContacto}
            onChangeText={(text) => setApellidoContacto(text)} />

    )
}