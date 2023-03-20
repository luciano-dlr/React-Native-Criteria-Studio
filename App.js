import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas 
import { HomeScreen } from "./Screens/HomeScreen.js";
import { LoginScreen } from './Screens/LoginScreen.js';
import { RegisterScreen } from "./Screens/RegisterScreen.js";
import { CotizacionScreen } from './Screens/CotizacionScreen.js'

// Context 
import ValoresContext from "./Context/ValoresContext.js";


const App = () => {

  const Stack = createNativeStackNavigator();

<<<<<<< HEAD
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
=======
  const valoresContext = {
    valorGoogle: 'pepe',
  }

>>>>>>> second
  return (

    <ValoresContext.Provider value={valoresContext}>
      <NavigationContainer>
        <Stack.Navigator Container initialRouteName="login">
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false, }} />
          <Stack.Screen name="registerScreen" component={RegisterScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="cotizacion" component={CotizacionScreen} />
        </Stack.Navigator>
      </NavigationContainer >
    </ValoresContext.Provider>

  )
};

export default App;
