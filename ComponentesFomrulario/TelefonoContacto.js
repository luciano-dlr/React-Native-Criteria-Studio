import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';


export const TelefonoContacto = () => {

    const [telefonoContacto, setTelefonoContacto] = useState('')

    return (

        <Input

            label={'Telefono Contacto'}
            type='phone' id='telefono'
            style={styles.imputsCotizacion}
            placeholder='Telefono de Contacto'
            value={telefonoContacto}
            onChangeText={(text) => setTelefonoContacto(text)} />


    )
}