import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { CheckBox, Input } from '@rneui/themed';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';


export const AdministracionAnuncios = () => {

    //Expanded de los checkboxes
    const [expandedAnuncios, setExpandedAnuncios] = useState(false);

    //Estado de los checkbox
    const [anuncioBasicos, setAnunciosBasicos] = useState(false);
    const [anunciosComplejos, setAnunciosComplejos] = useState(false)

    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const anunciosBasicaButton = () => {
        setAnunciosComplejos(false)
        setAnunciosBasicos(!anuncioBasicos);

    }
    const anuncioBasicosValor = anuncioBasicos ? 6.384 : '';

    const anunciosComplejaButton = () => {
        setAnunciosBasicos(false)
        setAnunciosComplejos(!anunciosComplejos);
    }
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

                    <View>
                        <Input disabled label={'Monto CBM'} type='text' id='text' style={styles.imputsCotizacion} placeholder='6.384' />
                    </View>

                )}

                {anunciosComplejos === true && (

                    <View>
                        <Input disabled label={'Monto CBM'} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.780' />
                    </View>
                )}

            </View>

        </ListItem.Accordion>
    )
}