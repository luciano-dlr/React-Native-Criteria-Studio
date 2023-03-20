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


export const PaginaWeb = () => {
    const [expandedPaginaWeb, setExpandedPaginaWeb] = useState(false);

    // Drop Google Mi Negocio
    const [paginaWeb0, setPaginaWeb0] = useState(false);
    const [paginaWeb1, setPaginaWeb1] = useState(false);
    const [paginaWeb2, setPaginaWeb2] = useState(false);
    const [paginaWeb3, setPaginaWeb3] = useState(false);
    const [paginaWeb4, setPaginaWeb4] = useState(false);
    const [paginaWeb5, setPaginaWeb5] = useState(false);
    const [paginaWeb6, setPaginaWeb6] = useState(false);
    const [paginaWeb7, setPaginaWeb7] = useState(false);
    const [paginaWeb8, setPaginaWeb8] = useState(false);
    const [paginaWeb9, setPaginaWeb9] = useState(false);
    const [paginaWebValor, setPaginaWebValor] = useState('')


    const PaginaWebButton0 = () => {
        setPaginaWeb0(!paginaWeb0);
        setPaginaWeb1(false);
        setPaginaWeb2(false);
        setPaginaWeb3(false);
        setPaginaWeb4(false);
        setPaginaWeb5(false);
        setPaginaWeb6(false);
        setPaginaWeb7(false);
        setPaginaWeb8(false);
        setPaginaWeb9(false);
    }
    const PaginaWebButton1 = () => {
        setPaginaWeb0(false);
        setPaginaWeb1(!paginaWeb1);
        setPaginaWeb2(false);
        setPaginaWeb3(false);
        setPaginaWeb4(false);
        setPaginaWeb5(false);
        setPaginaWeb6(false);
        setPaginaWeb7(false);
        setPaginaWeb8(false);
        setPaginaWeb9(false);
    }
    const PaginaWebButton2 = () => {
        setPaginaWeb0(false);
        setPaginaWeb1(false);
        setPaginaWeb2(!paginaWeb2);
        setPaginaWeb3(false);
        setPaginaWeb4(false);
        setPaginaWeb5(false);
        setPaginaWeb6(false);
        setPaginaWeb7(false);
        setPaginaWeb8(false);
        setPaginaWeb9(false);
    }
    const PaginaWebButton3 = () => {
        setPaginaWeb0(false);
        setPaginaWeb1(false);
        setPaginaWeb2(false);
        setPaginaWeb3(!paginaWeb3);
        setPaginaWeb4(false);
        setPaginaWeb5(false);
        setPaginaWeb6(false);
        setPaginaWeb7(false);
        setPaginaWeb8(false);
        setPaginaWeb9(false);
    }
    const PaginaWebButton4 = () => {
        setPaginaWeb0(false);
        setPaginaWeb1(false);
        setPaginaWeb2(false);
        setPaginaWeb3(false);
        setPaginaWeb4(!paginaWeb4);
        setPaginaWeb5(false);
        setPaginaWeb6(false);
        setPaginaWeb7(false);
        setPaginaWeb8(false);
        setPaginaWeb9(false);
    }
    const PaginaWebButton5 = () => {
        setPaginaWeb0(false);
        setPaginaWeb1(false);
        setPaginaWeb2(false);
        setPaginaWeb3(false);
        setPaginaWeb4(false);
        setPaginaWeb5(!paginaWeb4);
        setPaginaWeb6(false);
        setPaginaWeb7(false);
        setPaginaWeb8(false);
        setPaginaWeb9(false);
    }
    const PaginaWebButton6 = () => {
        setPaginaWeb0(false);
        setPaginaWeb1(false);
        setPaginaWeb2(false);
        setPaginaWeb3(false);
        setPaginaWeb4(false);
        setPaginaWeb5(false);
        setPaginaWeb6(!paginaWeb6);
        setPaginaWeb7(false);
        setPaginaWeb8(false);
        setPaginaWeb9(false);
    }
    const PaginaWebButton7 = () => {
        setPaginaWeb0(false);
        setPaginaWeb1(false);
        setPaginaWeb2(false);
        setPaginaWeb3(false);
        setPaginaWeb4(false);
        setPaginaWeb5(false);
        setPaginaWeb6(false);
        setPaginaWeb7(!paginaWeb7);
        setPaginaWeb8(false);
        setPaginaWeb9(false);
    }
    const PaginaWebButton8 = () => {
        setPaginaWeb0(false);
        setPaginaWeb1(false);
        setPaginaWeb2(false);
        setPaginaWeb3(false);
        setPaginaWeb4(false);
        setPaginaWeb5(false);
        setPaginaWeb6(false);
        setPaginaWeb7(false);
        setPaginaWeb8(!paginaWeb8);
        setPaginaWeb9(false);
    }
    const PaginaWebButton9 = () => {
        setPaginaWeb0(false);
        setPaginaWeb1(false);
        setPaginaWeb2(false);
        setPaginaWeb3(false);
        setPaginaWeb4(false);
        setPaginaWeb5(false);
        setPaginaWeb6(false);
        setPaginaWeb7(false);
        setPaginaWeb8(false);
        setPaginaWeb9(!paginaWeb9);
    }

    //Alternativa para resumir todo el codigo y tener multiples estados de pagina web e indicarlos por indice 'handlePaginaWebButtonClick(0)'
    //Pero se necesita saber puntualmente que pagina web esta seleccionando el usuario, a modo de resumen funciona tener en blanco todo sin 
    // saber los precios finales de cada pagina web sea ecomerce o landing

    // const [paginaWeb, setPaginaWeb] = useState([false, false, false, false, false, false, false, false, false, false]);

    // const handlePaginaWebButtonClick = (index) => {
    //     const newPaginaWeb = [...paginaWeb];
    //     newPaginaWeb[index] = !newPaginaWeb[index];
    //     setPaginaWeb(newPaginaWeb);
    // }

    return (
        <View>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Pagina WEB </ListItem.Title>
                        <ListItem.Subtitle>Ecomerce, Institucionales , landing</ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expandedPaginaWeb}
                onPress={() => {
                    setExpandedPaginaWeb(!expandedPaginaWeb);
                }}>

                <View style={styles.containerDropDawn}>

                    <CheckBox title="Opcion 1" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb0} onPress={() => { PaginaWebButton0() }} />
                    <CheckBox title="Opcion 2" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb1} onPress={() => { PaginaWebButton1() }} />
                    <CheckBox title="Opcion 3" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb2} onPress={() => { PaginaWebButton2() }} />
                    <CheckBox title="Opcion 4" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb3} onPress={() => { PaginaWebButton3() }} />
                    <CheckBox title="Opcion 5" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb4} onPress={() => { PaginaWebButton4() }} />
                    <CheckBox title="Opcion 6" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb5} onPress={() => { PaginaWebButton5() }} />
                    <CheckBox title="Opcion 7" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb6} onPress={() => { PaginaWebButton6() }} />
                    <CheckBox title="Opcion 8" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb7} onPress={() => { PaginaWebButton7() }} />
                    <CheckBox title="Opcion 9" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb8} onPress={() => { PaginaWebButton8() }} />
                    <CheckBox title="Opcion 10" checkedIcon="dot-circle-o" uncheckedIcon="circle-o" checked={paginaWeb9} onPress={() => { PaginaWebButton9() }} />


                    {paginaWeb0 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='10.000' />
                        </View>
                    )}
                    {paginaWeb1 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='11.000' />
                        </View>
                    )}
                    {paginaWeb2 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='12.000' />
                        </View>
                    )}
                    {paginaWeb3 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='13.000' />
                        </View>
                    )}
                    {paginaWeb4 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='14.000' />
                        </View>
                    )}
                    {paginaWeb5 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='15.000' />
                        </View>
                    )}
                    {paginaWeb6 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='16.000' />
                        </View>
                    )}
                    {paginaWeb7 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='17.000' />
                        </View>
                    )}
                    {paginaWeb8 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='18.000' />
                        </View>
                    )}
                    {paginaWeb9 === true && (
                        <View style={styles.imputsCotizacion}>
                            <Input disabled label={'Resultado Pagina WEB'} type='text' id='text' style={styles.imputsCotizacion} placeholder='19.000' />
                        </View>
                    )}
                </View>
            </ListItem.Accordion>


        </View>
    )
}