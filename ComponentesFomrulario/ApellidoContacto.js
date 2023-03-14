import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';


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