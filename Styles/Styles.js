import { StyleSheet } from 'react-native';
import { video } from "../assets/fondoapp.mp4";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `black`,
        paddingRight: 10,
        paddingLeft: 10,
    },
    containerUser: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingRight: 10,
        paddingLeft: 10,
    },
    title: {
        color: '#fff',
        fontSize: 25,
    },
    UserTitle: {
        color: '#fff',
        fontSize: 30,
        padding: 10,
    },
    UserTitle_childs: {
        color: '#fff',
        fontSize: 28,
        padding: 4,
        borderBottomColor: '#404143',
        borderWidth: 1,

    },
    UserTitle_childs_email: {
        color: '#fff',
        fontSize: 24,
        paddingTop: 40,

    },
    imputs: {
        color: '#fff',
        fontSize: 18,
        paddingBottom: 10,

    },
    titleButton: {
        color: '#fff',
        fontSize: 20,
        paddingRight: 10,
        paddingLeft: 15,
        paddingBottom: 10,
        paddingTop: 12,
        backgroundColor: 'black',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',

    },
    titleButtonUser: {
        color: '#fff',
        fontSize: 30,
        paddingRight: 5,
        paddingLeft: 15,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: 'black',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,

    },
    containerButton_user: {
        paddingTop: 30,

    },

    buttonContainer: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    imagen: {
        width: 300,
        height: 300,
    },
    imagenUser: {
        width: 170,
        height: 170,

    },
    displayNone: {
        display: 'none',

    }
});

export default styles;




