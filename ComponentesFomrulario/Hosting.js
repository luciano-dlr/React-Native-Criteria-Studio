import React from "react";
import { useState } from "react";
import { View } from 'react-native';
import styles from "../Styles/Styles";
import { ListItem } from '@rneui/themed';
import { CheckBox, Input } from '@rneui/themed';

// Checkbox en dropdawn Hosting 

export const Hosting = () => {

    // Estado para expandir los checkbox 
    const [expandedHosting, setExpandedHosting] = useState(false);

    // Estado de los checkbox
    const [hosting0, setHosting0] = useState(false)
    const [hosting1, setHosting1] = useState(false)
    const [hosting2, setHosting2] = useState(false)

    // Estado del Valor Final
    const [hostingValor, setHostingValor] = useState(null)

    // Funciones para que una vez clickeado un checkbox desactive al otro
    const Hosting0 = () => {
        setHosting0(!hosting0);
        setHosting1(false);
        setHosting2(false)
        setHostingValor(9.105)
    };

    const Hosting1 = () => {
        setHosting0(false);
        setHosting1(!hosting1);
        setHosting2(false)
        setHostingValor(14.592)
    }

    const Hosting2 = () => {
        setHosting0(false);
        setHosting1(false);
        setHosting2(!hosting2)
        setHostingValor(16.590)
    }

    // Valores finales, donde cambia al valor numerico final  o '' segun el cambio de estado de la variable seleccionada 
    // console.log(hostingValor)

    return (
        <>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Hosting</ListItem.Title>
                        <ListItem.Subtitle>Siteground, cloudways </ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expandedHosting}
                onPress={() => {
                    setExpandedHosting(!expandedHosting);
                }}>

                <View style={styles.containerDropDawn}>

                    <CheckBox title="Hosting opcion 1" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={hosting0} onPress={Hosting0} />
                    <CheckBox title="Hosting opcion 2" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={hosting1} onPress={Hosting1} />
                    <CheckBox title="Hosting opcion 3" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={hosting2} onPress={Hosting2} />

                    {hosting0 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Hosting'} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.105' />

                        </View>
                    )}
                    {hosting1 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Hosting'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.592' />

                        </View>
                    )}
                    {hosting2 === true && (
                        <View style={styles.imputsCotizacion}>

                            <Input disabled label={'Resultado Hosting'} type='text' id='text' style={styles.imputsCotizacion} placeholder='16.590' />

                        </View>
                    )}
                </View>
            </ListItem.Accordion>
        </>
    )
}