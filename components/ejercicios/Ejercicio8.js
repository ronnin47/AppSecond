import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';



//  COMPONENTE
export const Ejercicio8 = () => {

  //HOOKS
  const   [ precioArticulo, setPrecioArticulo]= useState("");
  const   [ cantidad, setCantidad]= useState("");
  const   [pantalla, setPantalla]=useState("");

  
const enunciado = "8) Una farmacia hace el 15% de descuento sobre los precios de la lista oficial. hacer un programa que permita ingresar por teclado el precio de lista de un determinado artículo y la cantidad de unidades compradas por un determinado cliente. luego calcular e informar por pantalla el total a pagar aplicando el descuento respectivo. por ejemplo: precio del artículo: $5.-. cantidad de unidades: 2. total a pagar: $ 8,50.";

//FUNCION CALCULAR
const calcular=()=>{


 const pago= Number(cantidad) * Number(precioArticulo);
 const pagoDescuento= pago - (pago * 0.15);

  const info=`Cantidad articulos: ${cantidad} /u  
Descuento de 15%:  $ ${pago*0.15}
Total sin descuento:  $ ${pago}
Total con descuento: $ ${pagoDescuento}`;

  setPantalla( info);
  setCantidad("");
  setPrecioArticulo("");
}



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={cantidad}
     placeholder='Cantidad Art.'
     onChangeText={setCantidad}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={precioArticulo}
     placeholder='$ Art.'
     onChangeText={setPrecioArticulo}
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
