import React from "react";
import styles from "../Styles/Styles";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config.js";
import { useNavigation } from "@react-navigation/native";
import { Dialog, CheckBox, Button, Input, ButtonGroup, Switch, Label } from '@rneui/themed';
import { collection, addDoc, getFirestore, setDoc, doc, getDocs, query, where } from "firebase/firestore";
import { Text, View, SafeAreaView, ScrollView, Alert, TextInput } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { TouchableOpacity } from "react-native-gesture-handler";

export const MantenimientoWeb = () => {

    const [expandedMantenimineto, setExpandedMantenimineto] = useState(false);
    //Check-Box 
    const [mantenimineto0, setMantenimineto0] = useState(false)
    const [mantenimineto1, setMantenimineto1] = useState(false)
    const [mantenimineto2, setMantenimineto2] = useState(false)



    const MantenimientoWeb0 = () => {
        setMantenimineto0(!mantenimineto0);
        setMantenimineto1(false);
        setMantenimineto2(false)
    };


    const MantenimientoWeb1 = () => {
        setMantenimineto0(false);
        setMantenimineto1(!mantenimineto1);
        setMantenimineto2(false)
    }
    const MantenimientoWeb2 = () => {
        setMantenimineto0(false);
        setMantenimineto1(false);
        setMantenimineto2(!mantenimineto2)
    }
    return (
        <>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Mantenimiento Web</ListItem.Title>
                        <ListItem.Subtitle>Fix bugs, Cache, base de datos</ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expandedMantenimineto}
                onPress={() => {
                    setExpandedMantenimineto(!expandedMantenimineto);
                }}>

                <View style={styles.containerDropDawn}>

                    <CheckBox title="Mantenimiento Web 1" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mantenimineto0} onPress={MantenimientoWeb0} />
                    <CheckBox title="Mantenimiento Web 2" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mantenimineto1} onPress={MantenimientoWeb1} />
                    <CheckBox title="Mantenimiento Web 3" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={mantenimineto2} onPress={MantenimientoWeb2} />

                    {mantenimineto0 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Hosting'} type='text' id='text' style={styles.imputsCotizacion} placeholder='9.105' />

                        </View>
                    )}
                    {mantenimineto1 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Hosting'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.592' />

                        </View>
                    )}
                    {mantenimineto2 === true && (
                        <View style={styles.imputsCotizacion}>

                            <Input disabled label={'Resultado Hosting'} type='text' id='text' style={styles.imputsCotizacion} placeholder='16.590' />

                        </View>
                    )}
                </View>

            </ListItem.Accordion>
        </>
    )
}