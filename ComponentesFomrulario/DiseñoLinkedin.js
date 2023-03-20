import React from "react";
import { useState } from "react";
import { View } from 'react-native';
import styles from "../Styles/Styles";
import { ListItem } from '@rneui/themed';
import { CheckBox, Input } from '@rneui/themed';

// Checkbox en dropdawn de Diseño y Linkedin

export const DiseñoLinkedin = () => {

    // Estado para expandir los checkbox 
    const [expandedLinkedin, setExpandedLinkedin] = useState(false);

    // Estado de los checkbox
    const [linkekdin2, setLinkedin2] = useState(false);
    const [linkedin3, setLinkedin3] = useState(false);
    const [linkedin4, setLinkedin4] = useState(false);

    // Funciones para que una vez clickeado un checkbox desactive al otro
    const linkekdin2Button = () => {
        setLinkedin2(!linkekdin2);
        setLinkedin3(false);
        setLinkedin4(false)
    }

    const linkedin3Button = () => {
        setLinkedin2(false);
        setLinkedin3(!linkedin3);
        setLinkedin4(false)
    }

    const linkedin4Button = () => {
        setLinkedin2(false);
        setLinkedin3(false);
        setLinkedin4(!linkedin4)
    }

    // Valores finales, donde cambia al valor numerico final  o '' segun el cambio de estado de la variable seleccionada 
    const linkedin3Valor = linkedin3 ? 11.000 : '';
    const linkekdin2Valor = linkekdin2 ? 10.000 : '';
    const linkedin4Valor = linkedin4 ? 12.000 : '';

    return (
        <ListItem.Accordion
            content={
                <ListItem.Content>
                    <ListItem.Title>Diseño y redaccion Linked-In</ListItem.Title>
                    <ListItem.Subtitle>Linked Posteos Mensuales</ListItem.Subtitle>
                </ListItem.Content>
            }
            isExpanded={expandedLinkedin}
            onPress={() => {
                setExpandedLinkedin(!expandedLinkedin);
            }}>

            <View style={styles.containerDropDawn}>

                <CheckBox title="LINKEDIN 2 Posteos Mensuales " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={linkekdin2} onPress={linkekdin2Button} />
                <CheckBox title="LINKEDIN 3 Posteos Mensuales " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={linkedin3} onPress={linkedin3Button} />
                <CheckBox title="LINKEDIN 4 Posteos Mensuales " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={linkedin4} onPress={linkedin4Button} />

                {linkekdin2 === true && (
                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Resultado LinkedIn'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                    </View>
                )}
                {linkedin3 === true && (
                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Resultado LinkedIn'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                    </View>
                )}
                {linkedin4 === true && (
                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Resultado LinkedIn'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                    </View>
                )}
            </View>
        </ListItem.Accordion>
    )
}
