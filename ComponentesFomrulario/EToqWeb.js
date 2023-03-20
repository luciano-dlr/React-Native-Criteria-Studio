import React from "react";
import { useState } from "react";
import { View } from 'react-native';
import styles from "../Styles/Styles";
import { ListItem } from '@rneui/themed';
import { CheckBox, Input } from '@rneui/themed';

// Checkbox en dropdawn de E-TOQ 

export const EtoqWeb = () => {

    // Estado para expandir los checkbox 
    const [expandedEtoq, setExpandedEtoq] = useState(false);

    // Estado de los checkbox
    const [etoq0, setEtoq0] = useState(false)
    const [etoq1, setEtoq1] = useState(false)
    const [etoq2, setEtoq2] = useState(false)

    // Estado del Valor Final
    const [valorEtoq, setValorEtoq] = useState(null)

    // Funciones para que una vez clickeado un checkbox desactive al otro
    const etoqButton0 = () => {
        setEtoq0(!etoq0);
        setEtoq1(false);
        setEtoq2(false)
        setValorEtoq(9.105)
    };

    const etoqButton1 = () => {
        setEtoq0(false);
        setEtoq1(!etoq1);
        setEtoq2(false)
        setValorEtoq(10.105)
    }
    const etoqButton2 = () => {
        setEtoq0(false);
        setEtoq1(false);
        setEtoq2(!etoq2)
        setValorEtoq(30.105)
    }

    // Valores finales, donde cambia al valor numerico final  o '' segun el cambio de estado de la variable seleccionada 
    // console.log(valorEtoq)

    return (
        <>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>E-TOQ</ListItem.Title>
                        <ListItem.Subtitle>Opciones E-toq Webs</ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expandedEtoq}
                onPress={() => {
                    setExpandedEtoq(!expandedEtoq);
                }}>

                <View style={styles.containerDropDawn}>

                    <CheckBox title="E-toq" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={etoq0} onPress={etoqButton0} />
                    <CheckBox title="E-toq 1" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={etoq1} onPress={etoqButton1} />
                    <CheckBox title="E-toq 2" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={etoq2} onPress={etoqButton2} />

                    {etoq0 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado E-toq'} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.105' />
                            <Input disabled label={'6 cuotas sin interes'} type='text' id='text' style={styles.imputsCotizacion} placeholder={`${9.105 / 6}`} />

                        </View>
                    )}
                    {etoq1 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado E-toq'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.592' />
                            <Input disabled label={'6 cuotas sin interes'} type='text' id='text' style={styles.imputsCotizacion} placeholder={`${14.592 / 6}`} />
                        </View>
                    )}
                    {etoq2 === true && (
                        <View style={styles.imputsCotizacion}>

                            <Input disabled label={'Resultado E-toq'} type='text' id='text' style={styles.imputsCotizacion} placeholder='16.590' />
                            <Input disabled label={'6 cuotas sin interes'} type='text' id='text' style={styles.imputsCotizacion} placeholder={`${16590 / 6}`} />
                        </View>
                    )}
                </View>

            </ListItem.Accordion>
        </>
    )
}