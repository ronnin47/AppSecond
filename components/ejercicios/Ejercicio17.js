
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

//hooks
import { useState } from 'react';



//  COMPONENTE
export const Ejercicio17 = () => {

  //HOOKS
  const   [ gusto1, setGusto1]= useState("");
  const   [ gusto2, setGusto2]= useState("");
  const   [ gusto3, setGusto3]= useState("");
  const   [pantalla, setPantalla]=useState("");


  
const enunciado = "17) Un comercio vende tres gustos de alfajores distintos: dulce de leche, chocolate y fruta. el dueño le pide a ud., futuro programador, un programa para que se pueda ingresar por teclado la cantidad de alfajores vendidos durante el día para cada una de las tres marcas en el orden anteriormente indicado (es decir se ingresan 3 datos distintos) y luego se calcule e informe el porcentaje de ventas para cada uno de ellos. por ejemplo: se ingresa 100, 25 y 75 como cantidades vendidas entonces el programa calculará e informará dulce de leche: 50%, chocolate 12,50% y fruta 37,50%.";

//FUNCION CALCULAR
const calcular = () => {


   const total=Number(gusto1)+Number(gusto2)+Number(gusto3);

    
  const porcGusto1=(Number(gusto1)*100)/total;
  const porcGusto2=(Number(gusto2)*100)/total;
  const porcGusto3=(Number(gusto3)*100)/total;

 
  const info=`Total de alfajores vendidos:  ${total} /u
Dulce de leche: ${porcGusto1}% 
Chocolate: ${porcGusto2}%
Fruta: ${porcGusto3}%
`

  setPantalla(info);
  setGusto1("");
  setGusto2("");
  setGusto3("");
};



  
  return (
    <View style={styles.container}>
    <Text style={styles.enunciado}>{enunciado}</Text>


     <Text style={styles.pantalla}>{pantalla}</Text>


     <View style={{flexDirection:"row", gap:4, margin:10}}>

    <TextInput
     style={styles.input}
     value={gusto1}
     placeholder='Dulce de leche'
     onChangeText={setGusto1}
     keyboardType="numeric"
     
    ></TextInput>

      <TextInput
     style={styles.input}
     value={gusto2}
     placeholder='Chocolate'
     onChangeText={setGusto2}
     keyboardType="numeric"
    ></TextInput>

    
      <TextInput
     style={styles.input}
     value={gusto3}
     placeholder='Fruta'
     onChangeText={setGusto3}
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

