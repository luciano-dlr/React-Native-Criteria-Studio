import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { CheckBox, Input } from '@rneui/themed';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';

export const Newsletter = () => {

    const [expandedNewsletter, setExpandedNewsletter] = useState(false);

    //Drop Newsletter
    const [newsletter1, setNewsletter1] = useState(false);
    const [newsletter2, setNewsletter2] = useState(false);
    const [newsletter3, setNewsletter3] = useState(false);

    const newsletter1Button = () => {
        setNewsletter1(!newsletter1);
        setNewsletter2(false);
        setNewsletter3(false);
    }
    const newsletter1Valor = newsletter1 ? 10.000 : '';

    const newsletter2Button = () => {
        setNewsletter1(false);
        setNewsletter2(!newsletter2);
        setNewsletter3(false);
    }
    const newsletter2Valor = newsletter2 ? 11.000 : '';

    const newsletter3Button = () => {
        setNewsletter1(false);
        setNewsletter2(false);
        setNewsletter3(!newsletter3);
    }
    const newsletter3Valor = newsletter3 ? 12.000 : '';

    return (
        <ListItem.Accordion
            content={
                <ListItem.Content>
                    <ListItem.Title>Newsletter</ListItem.Title>
                    <ListItem.Subtitle>Newsletter Posteos Mensuales</ListItem.Subtitle>
                </ListItem.Content>
            }
            isExpanded={expandedNewsletter}
            onPress={() => {
                setExpandedNewsletter(!expandedNewsletter);
            }}>

            <View style={styles.containerDropDawn}>

                <CheckBox title="Newsletter: 1 Posteo Mensual " checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={newsletter1} onPress={newsletter1Button} />
                <CheckBox title="Newsletter: 2 Posteos Menuales" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={newsletter2} onPress={newsletter2Button} />
                <CheckBox title="Newsletter: 3 Posteos Mensuales" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={newsletter3} onPress={newsletter3Button} />


                {newsletter1 === true && (
                    <View>
                        <Input disabled label={'Resultado Newsletter'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                    </View>
                )}
                {newsletter2 === true && (
                    <View>
                        <Input disabled label={'Resultado Newsletter'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                    </View>
                )}
                {newsletter3 === true && (
                    <View>
                        <Input disabled label={'Resultado Newsletter'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                    </View>
                )}
            </View>
        </ListItem.Accordion>
    )
}