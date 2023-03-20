import React from "react";
import { useState } from "react";
import { View } from 'react-native';
import styles from "../Styles/Styles";
import { ListItem } from '@rneui/themed';
import { CheckBox, Input } from '@rneui/themed';

// Checkbox en dropdawn de Administracion General Redes

export const AdministracionIntegralRedes = () => {

    // Estado para expandir los checkbox 
    const [expandedRedesAds, setExpandedRedesAds] = useState(false);

    // Estado de los checkbox
    const [redesFbIgFBAds, setRedesFbIgFBAds] = useState(false);
    const [redesFbIgGoogleAds, setRedesFbIgGoogleAds] = useState(false)
    const [redesFbIgFBAdsGoogleAds, setRedesFbIgFNBdsGoogleAds] = useState(false)

    // Funciones para que una vez clickeado un checkbox desactive al otro
    const redesFbIgFBAdsButton = () => {
        setRedesFbIgFBAds(!redesFbIgFBAds);
        setRedesFbIgGoogleAds(false);
        setRedesFbIgFNBdsGoogleAds(false)
    }

    const redesFbIgGoogleAdsButton = () => {
        setRedesFbIgFBAds(false);
        setRedesFbIgGoogleAds(!redesFbIgGoogleAds);
        setRedesFbIgFNBdsGoogleAds(false)
    }

    const redesFbIgFBAdsGoogleAdsButton = () => {
        setRedesFbIgFBAds(false);
        setRedesFbIgGoogleAds(false);
        setRedesFbIgFNBdsGoogleAds(!redesFbIgFBAdsGoogleAds)
    }

    // Valores finales, donde cambia al valor numerico final  o '' segun el cambio de estado de la variable seleccionada 
    const redesFbIgGoogleAdsValor = redesFbIgGoogleAds ? 11.000 : '';
    const redesFbIgFBAdsValor = redesFbIgFBAds ? 10.000 : '';
    const redesFbIgFBAdsGoogleAdsValor = redesFbIgFBAdsGoogleAds ? 12.000 : '';

    return (
        <ListItem.Accordion
            content={
                <ListItem.Content>
                    <ListItem.Title>Administracion Integral Redes </ListItem.Title>
                    <ListItem.Subtitle>Facebook Instagram Google </ListItem.Subtitle>
                </ListItem.Content>
            }
            isExpanded={expandedRedesAds}
            onPress={() => {
                setExpandedRedesAds(!expandedRedesAds);
            }}>

            <View style={styles.containerDropDawn}>

                <CheckBox title="Ig FB " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgFBAds} onPress={redesFbIgFBAdsButton} />
                <CheckBox title="IG FB GOOGLEads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgGoogleAds} onPress={redesFbIgGoogleAdsButton} />
                <CheckBox title="IG FB GOOGLEads fbads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={redesFbIgFBAdsGoogleAds} onPress={redesFbIgFBAdsGoogleAdsButton} />

                {redesFbIgFBAds === true && (
                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                    </View>
                )}

                {redesFbIgGoogleAds === true && (
                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                    </View>
                )}

                {redesFbIgFBAdsGoogleAds === true && (
                    <View>
                        <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                    </View>
                )}

            </View>
        </ListItem.Accordion>
    )
}