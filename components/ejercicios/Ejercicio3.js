
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';



//  COMPONENTE
export const Ejercicio3 = () => {

  //HOOKS
  const   [ ladoA, setLadoA]= useState("");
  const   [ ladoB, setLadoB]= useState("");
   const  [ ladoC, setLadoC]= useState("");
  const   [pantalla, setPantalla]=useState("");


  
const enunciado = "3) Hacer un programa que permita ingresar la longitud de los tres lados de un triángulo, calcular su perímetro y mostrar el resultado por pantalla. ";

//FUNCION CALCULAR
const calcular = () => {
  const resultado = Number(ladoA) + Number(ladoB) + Number(ladoC);
  setPantalla(resultado);
};



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={ladoA}
     placeholder='Lado A'
     onChangeText={setLadoA}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={ladoB}
     placeholder='Lado B'
     onChangeText={setLadoB}
     keyboardType="numeric"
    ></TextInput>

    <TextInput
     style={styles.input}
     value={ladoC}
     placeholder='Lado C'
     onChangeText={setLadoC}
     keyboardType="numeric"
    ></TextInput>

     </View>


    <TouchableOpacity 

    style={styles.botonCalcular}

    onPress={()=>{calcular()}}
    
    >

      <Text style={styles.textoCalcular}>Calcular</Text>
    
    </TouchableOpacity>

    </View>
  )}




 // STYLES 
const styles = StyleSheet.create({
container: {
  justifyContent: 'center',
  alignItems:'center',
  padding:20,
   backgroundColor:"#a8bdbab6",
  borderWidth:1,
  borderColor:"#e6dfdf",
  borderRadius:10,
  gap:10,
},
  texto:{
    color: 'white',
    fontSize: 20,
    textAlign:"center"
  },
   textoCalcular:{
    color: 'white',
    fontSize: 12,
    textAlign:"center"
  },
  enunciado:{
    color: 'white',
    fontSize: 14,
  },
  input:{
    width:100,
    height:40,
    borderWidth:1,
    borderColor:"#f3e9e9",
    backgroundColor:"#eee6e6c2",
    borderRadius:4,
    padding:10,
    color:"#000",
    fontSize:14,
    textAlign:"center"
  },
  pantalla:{
    width:260,
    height:60,
    backgroundColor:"#131212ab",
    color:"greenyellow",
    borderWidth:1,
    borderColor:"aliceblue",
    fontSize:18,
    fontFamily:"bold",
    borderRadius:4,
    padding:12,
  },
  botonCalcular:{
    backgroundColor:"#3742a7ec",
    width:100,
    height:40,
    borderWidth:1,
    borderColor:"aliceblue",
    fontSize:10,
    fontFamily:"bold",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    elevation:12,
  }

})

