import React from "react";
import { useState } from "react";
import { View } from 'react-native';
import styles from "../Styles/Styles";
import { ListItem } from '@rneui/themed';
import { CheckBox, Input } from '@rneui/themed';

// Checkbox en dropdawn de Administracion Anuncios

export const AdministracionAnuncios = () => {

    // Estado para expandir los checkbox 
    const [expandedAnuncios, setExpandedAnuncios] = useState(false);

    // Estado de los checkbox
    const [anuncioBasicos, setAnunciosBasicos] = useState(false);
    const [anunciosComplejos, setAnunciosComplejos] = useState(false)

    // Funciones para que una vez clickeado un checkbox desactive al otro
    const anunciosBasicaButton = () => {
        setAnunciosComplejos(false)
        setAnunciosBasicos(!anuncioBasicos);
    }

    const anunciosComplejaButton = () => {
        setAnunciosBasicos(false)
        setAnunciosComplejos(!anunciosComplejos);
    }

    // Valores finales, donde cambia a valor numerico final  o '' segun el cambio de estado de la variable seleccionada 
    const anuncioBasicosValor = anuncioBasicos ? 6.384 : '';
    const anunciosComplejosValor = anunciosComplejos ? 9.780 : '';

    return (
        <ListItem.Accordion
            content={
                <ListItem.Content>
                    <ListItem.Title>Administracion Anuncios </ListItem.Title>
                    <ListItem.Subtitle>Basica Y Compleja </ListItem.Subtitle>
                </ListItem.Content>
            }
            isExpanded={expandedAnuncios}
            onPress={() => {
                setExpandedAnuncios(!expandedAnuncios);
            }}>

            <View style={styles.containerDropDawn}>

                <CheckBox title="Básica" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={anuncioBasicos} onPress={anunciosBasicaButton} />
                <CheckBox title="Compleja" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={anunciosComplejos} onPress={anunciosComplejaButton} />

                {anuncioBasicos === true && (

                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Monto CBM'} type='text' id='text' style={styles.imputsCotizacion} placeholder='6.384' />
                    </View>

                )}

                {anunciosComplejos === true && (

                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Monto CBM'} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.780' />
                    </View>
                )}

            </View>

        </ListItem.Accordion>
    )
}