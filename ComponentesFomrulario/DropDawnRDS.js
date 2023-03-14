import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { CheckBox, Input } from '@rneui/themed';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';


export const DropDawnRDS = () => {

    const [expandedRDS, setExpandedRDS] = useState(false);
    //Check-Box dentro de dropdawn 'RDS'
    const [pirdBasica, setPirdBasica] = useState(false)
    const [pirdCompleja, setPirdCompleja] = useState(false)


    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const pirdBasicaButton = () => {
        setPirdCompleja(false);
        setPirdBasica(!pirdBasica);
    };
    const pirdBasicaValor = pirdBasica ? 9.120 : '';

    //funciones para que una vez clickeada una opcion de PirdBasica o PirdCompleja la otra se desactive Social Media
    const pirdComplejaButton = () => {
        setPirdBasica(false);
        setPirdCompleja(!pirdCompleja)
    }
    const pirdComplejaValor = pirdCompleja ? 14.592 : '';

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
                        <View>
                            <Input disabled label={'Resultado de PIRD Básica '} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.120' />
                        </View>
                    )}
                    {pirdCompleja === true && (
                        <View>
                            <Input disabled label={'Resultado de PIRD Compleja'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.592' />
                        </View>
                    )}
                </View>

            </ListItem.Accordion>
        </>
    )
}