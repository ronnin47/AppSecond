import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

//useState
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio10 = () => {

  //HOOKS

  const   [ medida, setMedida]= useState("");
  const   [pantalla, setPantalla]=useState("");

  
const enunciado = "10) Un negocio desea una aplicación donde se debe ingresar el precio de un artículo y luego un valor 1 si el cliente paga en efectivo, un valor 2 si paga con tarjeta y un valor 3 si paga con tickets. El pago en efectivo tiene un descuento del 10%, el pago con tarjeta un descuento del 5% y el pago con ticket no tiene descuento. El programa emitirá luego el precio final a pagar por el cliente.";

//FUNCION CALCULAR
const calcular=()=>{

  

  const medidaPulgadas= Number(medida) * 2.5;
  const info=`Medida ingresada: ${medida} Cm
Medida Pulgadas: ${medidaPulgadas} ″ 
`

  setPantalla(info);
  setMedida("");
}



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={medida}
     placeholder='Medida Cm'
     onChangeText={setMedida}
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
