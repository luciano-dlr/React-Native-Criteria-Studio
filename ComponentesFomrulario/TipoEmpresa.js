import React from "react";
import styles from "../Styles/Styles";
import { useState } from "react";
import { Button, Input } from '@rneui/themed';
import { Text } from 'react-native';
import 'firebase/firestore';


export const TipoEmpresa = () => {
    //Nivel Cliente Empresa   
    const [granOrganizacion, setGranOrganizacion] = useState(false)
    const [medianaOrganizacion, setMedianaOrganizacion] = useState(false)
    const [pequeOrganizacion, setPequeOrganizacion] = useState(false)
    const [microOrganizacion, setMicroOrganizacion] = useState(false)
    const [osflOrganizacion, setOsflOrganizacion] = useState(false)

    //funciones de los botones de empresa para desactivar los otros Botones empresa
    const [backgroundColor1, setBackgroundColor1] = useState('lightsteelblue');
    const [backgroundColor2, setBackgroundColor2] = useState('lightsteelblue');
    const [backgroundColor3, setBackgroundColor3] = useState('lightsteelblue');
    const [backgroundColor4, setBackgroundColor4] = useState('lightsteelblue');
    const [backgroundColor5, setBackgroundColor5] = useState('lightsteelblue');

    const granOrganizacionButton = () => {
        setGranOrganizacion(!granOrganizacion);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        setBackgroundColor1('navy')
        setBackgroundColor2('lightsteelblue')
        setBackgroundColor3('lightsteelblue')
        setBackgroundColor4('lightsteelblue')
        setBackgroundColor5('lightsteelblue')
    }
    const granOrganizacionValor = granOrganizacion ? 1.4 : '';

    //funcion de los botones de empresa para desactivar las otras Botones empresa
    const medianaOrganizacionButton = () => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(!medianaOrganizacion);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        setBackgroundColor1('lightsteelblue')
        setBackgroundColor2('navy')
        setBackgroundColor3('lightsteelblue')
        setBackgroundColor4('lightsteelblue')
        setBackgroundColor5('lightsteelblue')

    }
    const medianaOrganizacionValor = medianaOrganizacion ? 1.2 : '';

    //funcion de los botones de empresa para desactivar las otras Botones empresa
    const pequeOrganizacionButton = () => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(!pequeOrganizacion)
        setMicroOrganizacion(false);
        setOsflOrganizacion(false);
        setBackgroundColor1('lightsteelblue')
        setBackgroundColor2('lightsteelblue')
        setBackgroundColor3('navy')
        setBackgroundColor4('lightsteelblue')
        setBackgroundColor5('lightsteelblue')
    }
    const pequeOrganizacionValor = pequeOrganizacion ? 1 : '';

    //funcion de los botones de empresa para desactivar las otras Botones empresa
    const microeOrganizacionButton = () => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false)
        setMicroOrganizacion(!microOrganizacion)
        setOsflOrganizacion(false);
        setBackgroundColor1('lightsteelblue')
        setBackgroundColor2('lightsteelblue')
        setBackgroundColor3('lightsteelblue')
        setBackgroundColor4('navy')
        setBackgroundColor5('lightsteelblue')
    }
    const microOrganizacionValor = microOrganizacion ? 0.9 : '';

    //funcion de los botones de empresa para desactivar las otras Botones empresa
    const osflOrganizacionButton = () => {
        setGranOrganizacion(false);
        setMedianaOrganizacion(false);
        setPequeOrganizacion(false);
        setMicroOrganizacion(false);
        setOsflOrganizacion(!osflOrganizacion);
        setBackgroundColor1('lightsteelblue')
        setBackgroundColor2('lightsteelblue')
        setBackgroundColor3('lightsteelblue')
        setBackgroundColor4('lightsteelblue')
        setBackgroundColor5('navy')
    }
    const osflOrganizacionValor = osflOrganizacion ? 0.8 : '';

    return (
        <>
            <Text > Nivel del cliente como empresa </Text>

            <Button title="Gran Organizacion (+50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={granOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor1 }} />
            <Button title="Mediana Organizacion (20-50 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={medianaOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor2 }} />
            <Button title="Pequeña Organizacion (5-20 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={pequeOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor3 }} />
            <Button title="Micro Organizacion (5-5 empleados)" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={microeOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor4 }} />
            <Button title="Particular OSFL" containerStyle={{ marginHorizontal: 5, marginVertical: 5, }} onPress={osflOrganizacionButton} buttonStyle={{ backgroundColor: backgroundColor5 }} />
            {/*

 Dependiendo el boton seleccionado, representa true o false , y al ser true pasa a un valor numerico por un if / else
 Si un input es igual al valor seleccionado muestra el valor en pantalla ejemplo, granOrganizacion === 0.9 se muestra el input

 */}
            {granOrganizacion === true && (
                <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'1.4'} />
            )}
            {medianaOrganizacion === true && (
                <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'1.2'} />
            )}
            {pequeOrganizacion === true && (
                <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'1'} />
            )}
            {microOrganizacion === true && (
                <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0.9'} />
            )}
            {osflOrganizacion === true && (
                <Input disabled label={'Factor Correccion'} type='marca' id='valorOSFL' style={styles.imputsCotizacion} placeholder='Marca' value={'0.8'} />
            )}
            {/*Si todos los botones de empresa estan en false, el input a mostrar es 0*/}
            {granOrganizacion === false && medianaOrganizacion === false && pequeOrganizacion === false && microOrganizacion === false && osflOrganizacion === false && (
                <Input disabled label={'Factor Correccion'} type='marca' id='marca' style={styles.imputsCotizacion} placeholder='Marca' value={'0'} />
            )}

        </>
    )
}