import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

//useState
import { useEffect, useState } from 'react';



//  COMPONENTE
export const Ejercicio18 = () => {

  //HOOKS

  const   [ cantidad, setCantidad]= useState("");
  const   [pantalla, setPantalla]=useState("");

  
const enunciado = "18) Un negocio de venta de alfajores le pide a ud., futuro programador, que le desarrolle un programa teniendo en cuenta las siguientes condiciones: la caja de 12 alfajores se vende a $1000.- y cada alfajor suelto a $ 100. el programa debe solicitar al usuario cuantos alfajores compró un cliente y luego calcular el importe a pagar por el mismo. tener en cuenta que por cada 12 alfajores se debe calcular una caja, y el excedente se calcula como suelto. por ejemplo: si la cantidad ingresada son 15 alfajores, el programa calculará: 1 caja y 3 sueltos, es decir $1000.- + $100 x 3 = $ 1300. si cantidad ingresada son 28 alfajores, el programa calculará: 2 cajas y 4 sueltos, es decir $2000.- + $100 x 4 = $ 2400.-. si cantidad ingresada son 8 alfajores, el programa calculará: 0 cajas y 8 sueltos, es decir $100 x 8 = $ 800.-.";

//FUNCION CALCULAR
const calcular=()=>{

  const cajas = Math.floor(cantidad / 12);

    const sueltos=cantidad -(12*cajas)


 
  const info=`Cajas (12 /u): ${cajas} 
Alfajores sueltos:${sueltos}
Importe total: $ ${cantidad *100}

`

  setPantalla(info);
  setCantidad("");
}



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10,}}>

    <TextInput
     style={styles.input}
     value={cantidad}
     placeholder='Cantidad '
     onChangeText={setCantidad}
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