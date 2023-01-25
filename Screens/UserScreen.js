<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import { Text, View, Image } from 'react-native';
// import styles from "../Styles/Styles";
// import { Button } from "@rneui/themed";
// import { useNavigation } from "@react-navigation/native";



// // Una vez en UserScreen traigo las props de app.js

// const UserScreen = ({ states }) => {

//     const redirect = useNavigation();

//     const [values, setValues] = useState([])

//     useEffect(() => {

//         const lowerCase = states.map((item) => {
//             return item.toLowerCase()
//         });

//         setValues(lowerCase)

//     }, [states])

//     // console.log(values)


//     return (
//         <View style={styles.containerUser}>

//             <Text style={styles.UserTitle}>
//                 Bienvenido A Criteria
//             </Text>

//             <View>
//                 <Text style={styles.UserTitle_childs} > {values[0]}</Text>
//             </View>

<<<<<<< HEAD
            <View>

                <Text style={styles.UserTitle_childs_email} >{values[1]}</Text>
            </View>

            <View style={styles.containerButton_user}>
=======
//             <View>
//                 <Text style={styles.UserTitle_childs_email} >{values[1]}</Text>
//             </View>
//             <View style={styles.containerButton_user}>
>>>>>>> second

//                 <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagenUser} />

//                 <Button onPress={() => { redirect.navigate("Home") }} type="clear" styles={styles.buttonContainer} >

//                     <Text style={styles.titleButtonUser} > ↩  </Text>

//                 </Button>
//             </View>
//         </View>
//     )

// };

// export default UserScreen;



// Denomino las props a los imputs

// const HomeScreen = ({ states }) => {

//     const redirect = useNavigation();

//     const [password, email] = states;

//     const app = initializeApp(firebaseConfig);
//     const auth = getAuth(app)

//     const crearCuenta = () => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 console.warn("cuenta creada");
//                 const user = userCredential.user;
//                 console.log(user)
//             })
//             .catch(error => {
//                 console.warn("error al registrar")
//             })
//     }

//     const ingresarCuenta = () => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 console.warn("cuenta logueada");
//                 const user = userCredential.user;
//                 console.log(user)
//             })
//             .catch(error => {
//                 console.warn("error al registrar")
//             })
//     }

//     return (

//         <View style={styles.container} >

//             <Image source={require('../assets/logoCriteria.jpg')} style={styles.imagen} />

//             <Input id='email' style={styles.imputs} placeholder='Ingresar Email' defaultValue={email.value} onChangeText={(value) => email.setValue(value)} />

//             <Input id='password' style={styles.imputs} placeholder='Ingresar Contraseña' defaultValue={password.value} onChangeText={(value) => password.setValue(value)} />


//             <View >
//                 <Button
//                     onPress={() => { redirect.navigate("User") }}
//                     type="clear" styles={styles.buttonContainer} >

//                     <Text style={styles.titleButton} >Ingresar</Text>
//                     {/* {() => { states }} */}

//                 </Button>

//                 <TouchableOpacity onPress={ingresarCuenta()}>
//                     <Text style={styles.titleButton} >Ingresar cuenta 2.0</Text>

//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={crearCuenta()}>
//                     <Text style={styles.titleButton} >Registrar 2.0</Text>

//                 </TouchableOpacity>




//             </View>

//         </View >

//     )

// };



// export default HomeScreen;





    // <NavigationContainer styles={styles.displayNone}>
    //   <Stack.Navigator initialRouteName="Home" >

    //     <Stack.Screen name='Home' styles={styles.displayNone}>
    //       {() => <HomeScreen states={[{ name: "Contraseña", value: password, setValue: setPassword }, { name: "Email", value: email, setValue: setEmail }]} />}
    //     </Stack.Screen>

    //     <Stack.Screen name='User' styles={styles.displayNone}>
    //       {() => <UserScreen states={[password, email]} />}
    //     </Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>

<<<<<<< HEAD
                </Button>
            </View>
        </View>

    )
=======
>>>>>>> second


=======
>>>>>>> second
