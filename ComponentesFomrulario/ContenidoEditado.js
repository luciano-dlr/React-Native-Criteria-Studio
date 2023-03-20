import React from "react";
import { useState } from "react";
import styles from "../Styles/Styles";
import { Text, View } from 'react-native';
import { Input, Switch } from '@rneui/themed';

// Switch Contenido Editado

export const ContenidoEditado = () => {

    // Estado del Switch
    const [contenidoEditadoDiseño, setContenidoEditadoDiseño] = useState(false);

    // Funcion true o false para activar y desactivar switch
    const contenidoEditadoDiseñoSwitch = () => {
        setContenidoEditadoDiseño(!contenidoEditadoDiseño);
    }

    //Estado del Input
    const [fotosAEntregar, setFotosAEntregar] = useState('');

    return (
        <>
            <View style={styles.containerColum}>

                <Text style={styles.titleHome}>Se deberá hacer entrega del contenido editado ? </Text>

                <Switch
                    title="Limpiar"
                    label='texto'
                    value={contenidoEditadoDiseño}
                    onValueChange={contenidoEditadoDiseñoSwitch}
                />

            </View>
            {contenidoEditadoDiseño === true && (
                <View style={styles.imputsCotizacion}>
                    {/* Cantidad de fotos a entregar */}
                    <Input keyboardType="numeric" label={'Cantidad de Fotos a Entregar '} type='text' id='text' style={styles.imputsCotizacion} placeholder='0' value={fotosAEntregar} onChangeText={(text) => setFotosAEntregar(text)} />

                </View>
            )}
        </>

    )
}