import React from "react";
import { useState } from "react";
import { View } from 'react-native';
import styles from "../Styles/Styles";
import { ListItem } from '@rneui/themed';
import { CheckBox, Input } from '@rneui/themed';

// Checkbox en dropdawn de Parametros Inicial RDS

export const DropDawnRDS = () => {

    // Estado para expandir los checkbox 
    const [expandedRDS, setExpandedRDS] = useState(false);

    // Estado de los checkbox
    const [pirdBasica, setPirdBasica] = useState(false)
    const [pirdCompleja, setPirdCompleja] = useState(false)

    // Funciones para que una vez clickeado un checkbox desactive al otro
    const pirdBasicaButton = () => {
        setPirdCompleja(false);
        setPirdBasica(!pirdBasica);
    };

    const pirdComplejaButton = () => {
        setPirdBasica(false);
        setPirdCompleja(!pirdCompleja)
    }

    // Valores finales, donde cambia al valor numerico final  o '' segun el cambio de estado de la variable seleccionada 
    const pirdComplejaValor = pirdCompleja ? 14.592 : '';
    const pirdBasicaValor = pirdBasica ? 9.120 : '';

    return (
        <>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Parametros Inicial RDS</ListItem.Title>
                        <ListItem.Subtitle>Basica Y Compleja </ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expandedRDS}
                onPress={() => {
                    setExpandedRDS(!expandedRDS);
                }}>

                <View style={styles.containerDropDawn}>

                    <CheckBox title="PIRD Básica" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdBasica} onPress={pirdBasicaButton} />
                    <CheckBox title="PIRD Compleja" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={pirdCompleja} onPress={pirdComplejaButton} />
                    {pirdBasica === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado de PIRD Básica '} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.120' />
                        </View>
                    )}
                    {pirdCompleja === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado de PIRD Compleja'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.592' />
                        </View>
                    )}
                </View>

            </ListItem.Accordion>
        </>
    )
}