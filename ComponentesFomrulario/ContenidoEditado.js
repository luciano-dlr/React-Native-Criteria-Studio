import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Input, Switch } from '@rneui/themed';
import { Text, View } from 'react-native';

export const ContenidoEditado = () => {

    const [fotosAEntregar, setFotosAEntregar] = useState('');
    const [contenidoEditadoDiseño, setContenidoEditadoDiseño] = useState(false);

    const contenidoEditadoDiseñoSwitch = () => {
        setContenidoEditadoDiseño(!contenidoEditadoDiseño);
    }
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
                <View>
                    {/* Cantidad de fotos a entregar */}
                    <Input keyboardType="numeric" label={'Cantidad de Fotos a Entregar '} type='text' id='text' style={styles.imputsCotizacion} placeholder='0' value={fotosAEntregar} onChangeText={(text) => setFotosAEntregar(text)} />

                </View>
            )}
        </>

    )
}