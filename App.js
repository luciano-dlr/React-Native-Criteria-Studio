import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const App = () => {



  return <View style={styles.container}>

    <Text style={styles.title}>
      Que onda la banda
    </Text>

  </View>

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
  },
  title: {
    color: '#fff',
    fontSize: 25,
  },
});

export default App;

//https://picsum.photos/200/300