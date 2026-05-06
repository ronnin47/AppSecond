import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';



//  COMPONENTE
export const Ejercicio8 = () => {

  //HOOKS
  const   [ valorHora, setValorHora]= useState("");
  const   [ cantidadHoras, setCantidadHoras]= useState("");
  const   [pantalla, setPantalla]=useState("");

  
const enunciado = "8) Una empresa paga sueldos en base al valor de la hora y la cantidad de horas que trabajó cada empleado. Además, si el empleado trabajó más de 100 horas lo premian con $1000 y si trabajó más de 200 horas el premio es de $2500. Hallar el sueldo del empleado. Se ingresan por teclado el valor de la hora y la cantidad de horas trabajadas por el mismo.";

//FUNCION CALCULAR
const calcular=()=>{

 if (cantidadHoras === "" || valorHora === "") {
    setPantalla("");
    setCantidadHoras("");
    setValorHora("");
    return;
  }

 let pago= Number(cantidadHoras) * Number(valorHora);

 if(Number(cantidadHoras) >=100 && Number(cantidadHoras)<200 ){

  pago=pago+1000;

 }else if(Number(cantidadHoras) >=200){
    pago=pago+2500;
 }

  const info=`Cantidad horas trabajadas: ${cantidadHoras}  
Valor hora:  $ ${valorHora}
Total:  $ ${pago}`;

  setPantalla( info);
  setCantidadHoras("");
  setValorHora("");
}



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={cantidadHoras}
     placeholder='Hrs trabajadas'
     onChangeText={setCantidadHoras}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={valorHora}
     placeholder='$ valor hora'
     onChangeText={setValorHora}
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
    height:100,
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
