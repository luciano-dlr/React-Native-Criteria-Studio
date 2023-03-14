import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { CheckBox, Input } from '@rneui/themed';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';

export const DiseñoAdministracionRedes = () => {

    const [expandedDiseñoRedes, setExpandedDiseñoRedes] = useState(false);

    //DropDawn diseño administracion redes sociales
    const [fbIg3post2historias, setFbIg3post2historias] = useState(false);
    const [fbIg4post3historias, setFbIg4post3historias] = useState(false);
    const [fbIg5post4historias, setFbIg5post4historias] = useState(false);
    const [instagramCard15, setInstagramCard15] = useState(false);
    const [instagramCard18, setInstagramCard18] = useState(false);


    const fbIg3post2historiasButton = () => {
        setFbIg3post2historias(!fbIg3post2historias);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false);
        setInstagramCard15(false);
        setInstagramCard18(false);
    }
    const fbIg3post2historiasValor = fbIg3post2historias ? 10.000 : '';

    const fbIg4post3historiasButton = () => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(!fbIg4post3historias);
        setFbIg5post4historias(false);
        setInstagramCard15(false);
        setInstagramCard18(false);
    }
    const fbIg4post3historiasValor = fbIg4post3historias ? 11.000 : '';

    const fbIg5post4historiasButton = () => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(!fbIg5post4historias)
        setInstagramCard15(false);
        setInstagramCard18(false);
    }
    const fbIg5post4historiasValor = fbIg5post4historias ? 12.000 : '';


    const instagramCard15Button = () => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false)
        setInstagramCard15(!instagramCard15);
        setInstagramCard18(false);
    }
    const instagramCard15Valor = instagramCard15 ? 13.000 : '';


    const instagramCard18Button = () => {
        setFbIg3post2historias(false);
        setFbIg4post3historias(false);
        setFbIg5post4historias(false)
        setInstagramCard15(false);
        setInstagramCard18(!instagramCard18);
    }
    const instagramCard18Valor = instagramCard18 ? 14.000 : '';

    return (

        <View>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Diseño y Administracion de redes sociales </ListItem.Title>
                        <ListItem.Subtitle>Facebook e Instagram Posteos  </ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expandedDiseñoRedes}
                onPress={() => {
                    setExpandedDiseñoRedes(!expandedDiseñoRedes);
                }}>

                <View style={styles.containerDropDawn}>

                    <CheckBox title="FB + IG ( 3 Posteos  + 2 Historias Semanales ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbIg3post2historias} onPress={fbIg3post2historiasButton} />
                    <CheckBox title="FB + IG ( 4 Posteos  + 3 Historias Semanales ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbIg4post3historias} onPress={fbIg4post3historiasButton} />
                    <CheckBox title="FB + IG ( 5 Posteos  + 4 Historias Semanales ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={fbIg5post4historias} onPress={fbIg5post4historiasButton} />
                    <CheckBox title="Instagram Business Card ( 15 Posteos + Historias Mensules ) " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={instagramCard15} onPress={instagramCard15Button} />
                    <CheckBox title="Instagram Business Card ( 18 Posteos + Historias Mensules )" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={instagramCard18} onPress={instagramCard18Button} />

                    {fbIg3post2historias === true && (
                        <View>
                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                        </View>
                    )}

                    {fbIg4post3historias === true && (
                        <View>
                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                        </View>
                    )}

                    {fbIg5post4historias === true && (
                        <View>
                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                        </View>
                    )}
                    {instagramCard15 === true && (
                        <View>
                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='13.000' />
                        </View>
                    )}
                    {instagramCard18 === true && (
                        <View>
                            <Input disabled label={'Resultado Administracion Integral Redes'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.000' />
                        </View>
                    )}
                </View>
            </ListItem.Accordion>
        </View>

    )

}