
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

//hooks
import { useState } from 'react';



//  COMPONENTE
export const Ejercicio6 = () => {

  //HOOKS
  const   [ nota1, setNota1]= useState("");
  const   [ nota2, setNota2]= useState("");
  const   [ nota3, setNota3]= useState("");
  const   [pantalla, setPantalla]=useState("");


  
const enunciado = "6) Hacer un programa que permita ingresar 3 notas de un alumno/a y que muestro la nota promedio.";

//FUNCION CALCULAR
const calcular = () => {
  const resultado = (Number(nota1) + Number(nota2) + Number(nota3))/3;
  const info=`Notas: ${nota1} ${nota2} ${nota3}
Promedio: ${resultado}`;
  setPantalla(info);
  setNota1("");
  setNota2("");
  setNota3("");
};



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10}}>

    <TextInput
     style={styles.input}
     value={nota1}
     placeholder='Nota 1'
     onChangeText={setNota1}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={nota2}
     placeholder='Nota 2'
     onChangeText={setNota2}
     keyboardType="numeric"
    ></TextInput>

    
      <TextInput
     style={styles.input}
     value={nota3}
     placeholder='Nota 3'
     onChangeText={setNota3}
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
    minWidth:90,
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
    fontSize:14,
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

