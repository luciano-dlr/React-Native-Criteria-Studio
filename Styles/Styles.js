import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `black`,
        paddingRight: 10,
        paddingLeft: 10,
    },
    containerBlanco: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `#fff`,
        paddingRight: 10,
        paddingLeft: 10,
    },
    title: {
        color: '#fff',
        fontSize: 25,
        paddingTop: 50,
    },
    titleNegro: {
        color: 'black',
        fontSize: 25,
        paddingTop: 50,
    },
    button: {
        backgroundColor: 'white',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingTop: 5,
        marginTop: 80,
        borderRadius: 5,
        alignItems: 'center',
        width: '40%',
        margin: 10,
    },
    subTitulo: {
        fontSize: 16,
        padding: 2,
    },
    noTienesCuenta: {
        color: '#fff',
        fontSize: 14,
        marginTop: 20,
    },
    imputs: {
        color: '#fff',
        fontSize: 18,
        padding: 10,
    },
    imputsBlanco: {
        color: 'black',
        fontSize: 18,
        padding: 10,
    },
    imagen: {
        width: 300,
        height: 300,
    },
    displayNone: {
        display: 'none',
    },
    scrollView: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'black',
        tintColor: '#fff',
    },
    // checkbox
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
});

export default styles;




