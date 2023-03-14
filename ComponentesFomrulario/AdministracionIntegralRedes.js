import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { CheckBox, Input } from '@rneui/themed';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';

export const AdministracionIntegralRedes = () => {

    //Expand de Checkboxs
    const [expandedRedesAds, setExpandedRedesAds] = useState(false);

    // Drop Administracion Integral Redes
    const [redesFbIgFBAds, setRedesFbIgFBAds] = useState(false);
    const [redesFbIgGoogleAds, setRedesFbIgGoogleAds] = useState(false)
    const [redesFbIgFBAdsGoogleAds, setRedesFbIgFNBdsGoogleAds] = useState(false)

    //Cada Opcion del dropDawn
    const redesFbIgFBAdsButton = () => {
        setRedesFbIgFBAds(!redesFbIgFBAds);
        setRedesFbIgGoogleAds(false);
        setRedesFbIgFNBdsGoogleAds(false)
    }
    // Valor final 
    const redesFbIgFBAdsValor = redesFbIgFBAds ? 10.000 : '';

    //Cada Opcion del dropDawn
    const redesFbIgGoogleAdsButton = () => {
        setRedesFbIgFBAds(false);
        setRedesFbIgGoogleAds(!redesFbIgGoogleAds);
        setRedesFbIgFNBdsGoogleAds(false)
    }
    // Valor final 
    const redesFbIgGoogleAdsValor = redesFbIgGoogleAds ? 11.000 : '';

    //Cada Opcion del dropDawn
    const redesFbIgFBAdsGoogleAdsButton = () => {
        setRedesFbIgFBAds(false);
        setRedesFbIgGoogleAds(false);
        setRedesFbIgFNBdsGoogleAds(!redesFbIgFBAdsGoogleAds)
    }
    // Valor final 
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
                    <View>
                        <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                    </View>
                )}

                {redesFbIgGoogleAds === true && (
                    <View>
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