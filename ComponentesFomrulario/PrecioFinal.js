import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input } from '@rneui/themed';
import { View } from 'react-native';

export const PrecioFinal = () => {

    const [precioFinal, setprecioFinal] = useState('');

    return (
        <>
            <>
                <View style={styles.imputsCotizacion}>
                    <Input
                        disabled
                        label={'Precio Final Cotizado'}
                        type='precioFinal'
                        id='precioFinal'
                        style={styles.imputsCotizacion}
                        placeholder={`${0 + 0 + ''}`}
                        value={precioFinal}
                        onChangeText={(text) => setprecioFinal(text)} />
                </View>
            </>
        </>
    )
}