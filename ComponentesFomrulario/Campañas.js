import React from "react";
import { useState } from "react";
import { View } from 'react-native';
import styles from "../Styles/Styles";
import { ListItem } from '@rneui/themed';
import { CheckBox, Input } from '@rneui/themed';

/// Checkbox en dropdawn de Administracion General Redes

export const Campañas = () => {

    // Estado para expandir los checkbox 
    const [expandedCampañas, setExpandedCampañas] = useState(false);

    // Estados de los checkbox 
    const [fbAds, setFbAds] = useState(false);
    const [googleAds, setGoogleAds] = useState(false);
    const [fbGoogleAds, setFbGoogleAds] = useState(false);

    // Funciones para que una vez clickeado un checkbox desactive al otro
    const fbAdsButton = () => {
        setFbAds(!fbAds);
        setGoogleAds(false);
        setFbGoogleAds(false);
        setInstagramCard18(false);
    }

    const googleAdsButton = () => {
        setFbAds(false);
        setGoogleAds(!googleAds);
        setFbGoogleAds(false);
    }

    const fbGoogleAdsButton = () => {
        setFbAds(false);
        setGoogleAds(false);
        setFbGoogleAds(!fbGoogleAds);
    }

    // Valores finales, donde cambia al valor numerico final  o '' segun el cambio de estado de la variable seleccionada 
    const fbAdsValor = fbAds ? 10.000 : '';
    const googleAdsValor = googleAds ? 11.000 : '';
    const fbGoogleAdsValor = fbGoogleAds ? 12.000 : '';

    return (
        <ListItem.Accordion
            content={
                <ListItem.Content>
                    <ListItem.Title>Campañas</ListItem.Title>
                    <ListItem.Subtitle>Facebook Ads, Google Ads  </ListItem.Subtitle>
                </ListItem.Content>
            }
            isExpanded={expandedCampañas}
            onPress={() => {
                setExpandedCampañas(!expandedCampañas);
            }}>

            <View style={styles.containerDropDawn}>

                <CheckBox title="FB Ads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbAds} onPress={fbAdsButton} />
                <CheckBox title="Google Ads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={googleAds} onPress={googleAdsButton} />
                <CheckBox title="FB + Google Ads" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbGoogleAds} onPress={fbGoogleAdsButton} />

                {fbAds === true && (
                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                    </View>
                )}
                {googleAds === true && (
                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                    </View>
                )}
                {fbGoogleAds === true && (
                    <View style={styles.imputsCotizacion}>
                        <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                    </View>
                )}
            </View>
        </ListItem.Accordion>
    )
};