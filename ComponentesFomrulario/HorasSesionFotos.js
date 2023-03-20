import React from "react";
import { useState } from "react";
import styles from "../Styles/Styles";
import { Input } from '@rneui/themed';

// Input para almacenar Las Horas pactadas para sesion de fotos 

export const HorasSesionFotos = () => {

    const [horasTotalesSesionFotos, setHorasTotalesSesionFotos] = useState('')

    return (

        <Input

            keyboardType="numeric"
            label={'Cantidad de Horas Totales De La Sesión de fotos? '}
            type='text' id='text' style={styles.imputsCotizacion}
            placeholder='0' value={horasTotalesSesionFotos}
            onChangeText={(text) => setHorasTotalesSesionFotos(text)}
        />

    )
}