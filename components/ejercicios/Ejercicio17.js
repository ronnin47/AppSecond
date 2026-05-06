

import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio17 = () => {

  //HOOKS
    const   [ numero1, setNumero1]= useState("");
  const   [ numero2, setNumero2]= useState("");
  const   [ numero3, setNumero3]= useState("");
  const   [ numero4, setNumero4]= useState("");
  const   [ numero5, setNumero5]= useState("");
  const   [ pantalla, setPantalla]=useState("");


 const enunciado = "17) Hacer una aplicación para ingresar por teclado cinco números y luego emitir por pantalla cuántos de ellos son positivos, negativos y cero.";


//FUNCION CALCULAR
const calcular = () => {

  if(numero1==="" || numero2==="" || numero3==="" || numero4==="" || numero5===""){
    setPantalla("");
    setNumero1("");
    setNumero2("");
    setNumero3("");
    setNumero4("");
    setNumero5("");
    return;
  }

  let positivos = 0;
  let negativos = 0;
  let ceros = 0;

  if(Number(numero1) > 0){
    positivos++;
  } else if(Number(numero1) < 0){
    negativos++;
  } else {
    ceros++;
  }

  if(Number(numero2) > 0){
    positivos++;
  } else if(Number(numero2) < 0){
    negativos++;
  } else {
    ceros++;
  }

  if(Number(numero3) > 0){
    positivos++;
  } else if(Number(numero3) < 0){
    negativos++;
  } else {
    ceros++;
  }

  if(Number(numero4) > 0){
    positivos++;
  } else if(Number(numero4) < 0){
    negativos++;
  } else {
    ceros++;
  }

  if(Number(numero5) > 0){
    positivos++;
  } else if(Number(numero5) < 0){
    negativos++;
  } else {
    ceros++;
  }

  const info = `Positivos: ${positivos}, Negativos: ${negativos}, Ceros: ${ceros}`;

 

  setPantalla(info);

  setNumero1("");
  setNumero2("");
  setNumero3("");
  setNumero4("");
  setNumero5("");
};



  
   return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:2, margin:10,  justifyContent:"space-between"}}>

    <TextInput
     style={styles.input}
     value={numero1}
     placeholder='1'
     onChangeText={setNumero1}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={numero2}
     placeholder='2'
     onChangeText={setNumero2}
     keyboardType="numeric"
    ></TextInput>


       <TextInput
     style={styles.input}
     value={numero3}
     placeholder='3'
     onChangeText={setNumero3}
     keyboardType="numeric"
    ></TextInput> 
    
       <TextInput
     style={styles.input}
     value={numero4}
     placeholder='4'
     onChangeText={setNumero4}
     keyboardType="numeric"
    ></TextInput> 
    
       <TextInput
     style={styles.input}
     value={numero5}
     placeholder='5'
     onChangeText={setNumero5}
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
  //justifyContent: 'center',
  alignItems:'center',
  padding:20,
  backgroundColor:"#080a0ada",
  gap:10,
  height:"100%"
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

    flex:1,
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
    height:80,
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

