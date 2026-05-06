
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

//hooks
import { useState } from 'react';



//  COMPONENTE
export const Ejercicio6 = () => {

  //HOOKS
  const   [ numero, setNumero]= useState("");
  const   [pantalla, setPantalla]=useState("");


  
const enunciado = "6) Hacer una aplicación para ingresar por teclado un número y luego emitir por pantalla un cartel aclaratorio indicando si el mismo es positivo, negativo o cero.";

//FUNCION CALCULAR
const calcular = () => {
  //const resultado = (Number(nota1) + Number(nota2) + Number(nota3))/3;

  if (numero === "" ) {
    setPantalla("");
    setNumero("");

    return;
  }

  if (Number(numero)==0){
  
  const info=`Numero: ${numero} es Neutro`;
  setPantalla(info);
  setNumero("");

  }else if(Number(numero>0)){
  
  const info=`Numero: ${numero} es positivo`;
  setPantalla(info);
  setNumero("");

  }else if(Number(numero<0)){
  
    const info=`Numero: ${numero} es negativo`;
  setPantalla(info);
  setNumero("");

  }


  

  }






  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10}}>

    <TextInput
     style={styles.input}
     value={numero}
     placeholder='Ingrese numero'
     onChangeText={setNumero}
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
    width:90,
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

