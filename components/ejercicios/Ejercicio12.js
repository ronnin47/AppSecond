
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';


//  COMPONENTE
export const Ejercicio12 = () => {

  //HOOKS
   const   [ numero1, setNumero1]= useState("");
  const   [ numero2, setNumero2]= useState("");
  const   [ numero3, setNumero3]= useState("");
  const   [ pantalla, setPantalla]=useState("");


  
const enunciado = "12) Hacer una aplicación para ingresar por teclado tres números y luego determinar e informar con una leyenda aclaratoria si los tres son todos distintos entre sí, caso contrario no emitir nada. Recordar que la ley de transitividad de la igualdad no se cumple para la desigualdad: si un número A es distinto a otro número B y si el número B es distinto a otro número C, entonces no se deduce que A sea distinto a C. Por ejemplo A=3, B=5 y C=3.";

//FUNCION CALCULAR
const calcular = () => {

  if(numero1==="" || numero2==="" || numero3===""){
    setPantalla("");
      setNumero1("");
      setNumero2("");
      setNumero3("");
    return;
  }

  if(numero1!==numero2 && numero2!==numero3 && numero1!==numero3){

  const info=`Num 1: ${numero1} Num 2: ${numero2} Num 3: ${numero3}
Los tres numeros son distintos.`;

  setPantalla(info);
  }


  setNumero1("");
  setNumero2("");
  setNumero3("");
};



  
   return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={numero1}
     placeholder='Número 1'
     onChangeText={setNumero1}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={numero2}
     placeholder='Número 2'
     onChangeText={setNumero2}
     keyboardType="numeric"
    ></TextInput>


       <TextInput
     style={styles.input}
     value={numero3}
     placeholder='Número 3'
     onChangeText={setNumero3}
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
