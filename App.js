import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Titulo from "./src/components/Titulo/Index.js"
import Conteudo from "./src/components/Conteudo/Index.js"
import Rodape from "./src/components/Rodape/Index.js"

export default function App(){
  return(
    <View style={styles.input}>
      <Titulo/>
      <Conteudo/>
      <Rodape/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: '#eeefff',
  },
});
