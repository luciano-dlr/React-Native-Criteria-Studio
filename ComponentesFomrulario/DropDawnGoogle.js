import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { CheckBox, Input } from '@rneui/themed';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';


//custom hook 
import Context from "../Hooks/Context";


export const DropDawnGoogle = () => {

    const { valorGoogle } = Context();

    console.log(valorGoogle);

    const [expandedGoogleMiNegocio, setExpandedGoogleMiNegocio] = useState(false);

    // Drop Google Mi Negocio
    const [googleMiNegocio1, setGoogleMiNegocio1] = useState(false);
    const [googleMiNegocio2, setGoogleMiNegocio2] = useState(false);
    const [googleMiNegocio3, setGoogleMiNegocio3] = useState(false);
    const [googleMiNegocioValor, setGoogleMiNegocioValor] = useState(null)
    // googleMiNegocioValor = valorGoogle

    const googleMiNegocio1Button = () => {
        setGoogleMiNegocio1(!googleMiNegocio1);
        setGoogleMiNegocio2(false);
        setGoogleMiNegocio3(false);
        setGoogleMiNegocioValor(10.000)
    }


    const googleMiNegocio2Button = () => {
        setGoogleMiNegocio1(false);
        setGoogleMiNegocio2(!googleMiNegocio2);
        setGoogleMiNegocio3(false);
        setGoogleMiNegocioValor(11.000);
    }

    const googleMiNegocio3Button = () => {
        setGoogleMiNegocio1(false);
        setGoogleMiNegocio2(false);
        setGoogleMiNegocio3(!googleMiNegocio3);
        setGoogleMiNegocioValor(12.000);
    }

    return (
        <View>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Google Mi Negocio</ListItem.Title>
                        <ListItem.Subtitle>Opcion 1, Opcion 2 Opcion 3</ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expandedGoogleMiNegocio}
                onPress={() => {
                    setExpandedGoogleMiNegocio(!expandedGoogleMiNegocio);
                }}>

                <View style={styles.containerDropDawn}>

                    <CheckBox title="Opcion 1" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={googleMiNegocio1} onPress={() => { googleMiNegocio1Button() }} />
                    <CheckBox title="Opcion 2" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={googleMiNegocio2} onPress={googleMiNegocio2Button} />
                    <CheckBox title="Opcion 3" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={googleMiNegocio3} onPress={googleMiNegocio3Button} />
                    {googleMiNegocio1 === true && (
                        <View>
                            <Input disabled label={'Resultado Google Mi Empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                        </View>
                    )}
                    {googleMiNegocio2 === true && (
                        <View>
                            <Input disabled label={'Resultado Google Mi Empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                        </View>
                    )}
                    {googleMiNegocio3 === true && (
                        <View>
                            <Input disabled label={'Resultado Google Mi Empresa'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                        </View>
                    )}
                </View>
            </ListItem.Accordion>


        </View>
    );

};