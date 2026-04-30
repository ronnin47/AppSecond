import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

//useState
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio5 = () => {

  //HOOKS
  const   [ numero1, setNumero1]= useState("");
  const   [ numero2, setNumero2]= useState("");
  const   [ pantalla, setPantalla]=useState("");

  
const enunciado = "5) Hacer una aplicación para ingresar por teclado dos números y luego mostrar por pantalla la diferencia entre el mayor y el menor de ellos. (Si ambos son iguales se emitirá un cero).";

//FUNCION CALCULAR
const calcular = () => {

  if (numero1 === "" || numero2 === "") {
    setPantalla("");
    setNumero1("");
    setNumero2("");
    return;
  }

  const resultado = Math.abs(Number(numero1) - Number(numero2));

  setPantalla(`La diferencia entre el mayor y el menor es ${resultado}.`);

  setNumero1("");
  setNumero2("");
};



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

     <TextInput
           style={styles.input}
           value={numero1}
           placeholder='numero 1'
           onChangeText={setNumero1}
           keyboardType="numeric"
           
          ></TextInput>
      
            <TextInput
           style={styles.input}
           value={numero2}
           placeholder='numero2'
           onChangeText={setNumero2}
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
    width:120,
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

