import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';

import React from "react";

// Pantallas 
import { HomeScreen } from "./Screens/HomeScreen.js";
import { LoginScreen } from './Screens/LoginScreen.js';
import { RegisterScreen } from "./Screens/RegisterScreen.js";
import { CotizacionScreen } from './Screens/CotizacionScreen.js'


const App = () => {

  const Stack = createNativeStackNavigator();

<<<<<<< HEAD
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');



  //1 instalar firebase npm firebae, en el proyecto

  // Crear una cuenta en firebase 

  // firebase web, (no firebase hosting) 

  // firebase.js

  // documentacion de firebase, autentication de usuarios, crear usuario, (web)

  //importar el auth del archivo del ale

  // utentication de 0 

  // quest, login y registrer con firebase, utilizar la autentication 


  //Navigation, navigate


=======
>>>>>>> second
  return (

    <NavigationContainer>
      <Stack.Navigator Container initialRouteName="login">

        <Stack.Screen name="login" component={LoginScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="registerScreen" component={RegisterScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="cotizacion" component={CotizacionScreen} />



      </Stack.Navigator>
    </NavigationContainer >
  )
};

export default App;

//exp:\192.168.0.13:19000

// Los componentes que dejan renderizar web son @renui

// carpeta de rutas, si un suario se loguea, necesitas rutas publicas


//                app con usuarios

//rutas publicas son aquellas que el usuario puede acceder sin estar logueado. registre y login

//rutas privadas son aquellas rutas que necesitan una auth para que el usuario pueda acceder a ellas, ej home prifle cotizacion etc