import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { CheckBox, Input } from '@rneui/themed';
import { View, } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';


export const IdentidadEmpresa = () => {

    const [expanded, setExpanded] = useState(false);
    //DropDawn Identidad
    const [logo, setLogo] = useState(false);
    const [rediseñoIdentidad, setRediseñoIdentidad] = useState(false);
    const [diseñoMarca, setDiseñoMarca] = useState(false);
    const [naming, setNaming] = useState(false);

    const logoButton = () => {
        setLogo(!logo);
        setRediseñoIdentidad(false);
        setDiseñoMarca(false);
        setNaming(false);
    }
    const logoValor = logo ? 10.000 : '';

    const rediseñoIdentidadButton = () => {
        setLogo(false);
        setRediseñoIdentidad(!rediseñoIdentidad);
        setDiseñoMarca(false);
        setNaming(false);
    }
    const rediseñoIdentidadValor = rediseñoIdentidad ? 11.000 : '';

    const diseñoMarcaButton = () => {
        setLogo(false);
        setRediseñoIdentidad(false);
        setDiseñoMarca(!diseñoMarca);
        setNaming(false);
    }
    const diseñoMarcaValor = diseñoMarca ? 12.000 : '';

    const namingButton = () => {
        setLogo(false);
        setRediseñoIdentidad(false);
        setDiseñoMarca(false);
        setNaming(!naming);
    }
    const namingValor = naming ? 13.000 : '';

    return (

        <ListItem.Accordion
            content={
                <ListItem.Content>
                    <ListItem.Title>Identidad de la empresa</ListItem.Title>
                    <ListItem.Subtitle>Logo y diseños </ListItem.Subtitle>
                </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}>
            <View style={styles.containerDropDawn}>

                <CheckBox title="Logo" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={logo} onPress={logoButton} />
                <CheckBox title="rediseño identidad" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={rediseñoIdentidad} onPress={rediseñoIdentidadButton} />
                <CheckBox title="diseño marca" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={diseñoMarca} onPress={diseñoMarcaButton} />
                <CheckBox title="naming" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={naming} onPress={namingButton} />

                {logo === true && (
                    <View>
                        <Input disabled label={'Resultado Identidad de la empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                    </View>
                )}
                {rediseñoIdentidad === true && (
                    <View>
                        <Input disabled label={'Resultado Identidad de la empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                    </View>
                )}
                {diseñoMarca === true && (
                    <View>
                        <Input disabled label={'Resultado Identidad de la empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                    </View>
                )}
                {naming === true && (
                    <View>
                        <Input disabled label={'Resultado Identidad de la empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                    </View>
                )}
            </View>

        </ListItem.Accordion>

    )
};