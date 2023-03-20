import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';
import { View } from 'react-native';

export const Mensaje = () => {

    const [mensaje, setMensaje] = useState('');

    return (
        <>
            <View style={styles.imputsCotizacion}>
                <Input

                    label={'Mensaje para equipo Criteria'}
                    type='Mensaje'
                    id='Mensaje'
                    style={styles.imputsCotizacion}
                    placeholder='Cosas a tener en cuenta..'
                    value={mensaje}
                    onChangeText={(text) => setMensaje(text)} />
            </View>
        </>
    )
}