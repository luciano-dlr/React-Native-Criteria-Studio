import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { CheckBox, Input } from '@rneui/themed';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';
export const Campañas = () => {

    const [expandedCampañas, setExpandedCampañas] = useState(false);

    //DropDawn diseño administracion Campañas
    const [fbAds, setFbAds] = useState(false);
    const [googleAds, setGoogleAds] = useState(false);
    const [fbGoogleAds, setFbGoogleAds] = useState(false);

    const fbAdsButton = () => {
        setFbAds(!fbAds);
        setGoogleAds(false);
        setFbGoogleAds(false);
        setInstagramCard18(false);
    }
    const fbAdsValor = fbAds ? 10.000 : '';

    const googleAdsButton = () => {
        setFbAds(false);
        setGoogleAds(!googleAds);
        setFbGoogleAds(false);

    }
    const googleAdsValor = googleAds ? 11.000 : '';

    const fbGoogleAdsButton = () => {
        setFbAds(false);
        setGoogleAds(false);
        setFbGoogleAds(!fbGoogleAds);

    }
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
                    <View>
                        <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                    </View>
                )}
                {googleAds === true && (
                    <View>
                        <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                    </View>
                )}
                {fbGoogleAds === true && (
                    <View>
                        <Input disabled label={'Resultado Administracion Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                    </View>
                )}
            </View>
        </ListItem.Accordion>
    )
};