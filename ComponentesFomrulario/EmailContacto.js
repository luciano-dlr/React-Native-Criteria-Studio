import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';


export const EmailContacto = () => {

    const [emailContacto, setEmailContacto] = useState('');

    return (

        <Input

            label={'Email Contacto'}
            type='email'
            id='email'
            style={styles.imputsCotizacion}
            placeholder='Email de Contacto'
            value={emailContacto}
            onChangeText={(text) => setEmailContacto(text)} />


    )
}