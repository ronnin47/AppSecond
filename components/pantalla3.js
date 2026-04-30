import {ImageBackground,Text, View, StyleSheet, TouchableOpacity} from "react-native";

const fondoHome="https://res.cloudinary.com/dzul1hatw/image/upload/v1775771291/af44fff87cc52df9db1bb26a243620ef_lpnyip.jpg";


export const Pantalla3=({navigation})=>{


return(

     <ImageBackground
      source={{ uri: fondoHome }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
    <View style={styles.container}>
    
       {/*<Text style={styles.titulo}>PANTALLA HOME</Text>*/}


        <View style={{flex:1, gap:12, marginTop:20, alignItems:"center"}}>


            <TouchableOpacity 
            style={styles.botonPantalla}
            onPress={()=>{navigation.navigate("Ejercicio11")}}>
           
                <Text style={styles.textBoton}>Ejercicio 11</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.botonPantalla}
            onPress={()=>{navigation.navigate("Ejercicio12")}}
            >
                <Text style={styles.textBoton}>Ejercicio 12</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.botonPantalla}
            onPress={()=>{navigation.navigate("Ejercicio13")}}
            >
                <Text style={styles.textBoton}>Ejercicio 13</Text>
            </TouchableOpacity>

                 <TouchableOpacity 
            style={styles.botonPantalla}
            onPress={()=>{navigation.navigate("Ejercicio14")}}
            >
                <Text style={styles.textBoton}>Ejercicio 14</Text>
            </TouchableOpacity>

            
            <TouchableOpacity 
            style={styles.botonPantalla}
            onPress={()=>{navigation.navigate("Ejercicio15")}}>
                <Text style={styles.textBoton}>Ejercicio 15</Text>
            </TouchableOpacity>

        </View>
   
     
   


   
    </View>

    </ImageBackground>
   
)
}


const styles=StyleSheet.create({

    container:{
        flex:1,
        //justifyContent:"center",
        alignItems:"centar",
        backgroundColor:"#0000003b",
        padding:12,
    },
    titulo:{
        fontFamily:"bold",
        fontSize:14,
        color:"aliceblue"
    },
    botonPantalla:{
      width:120,
      height:40,
      borderWidth:1,
      borderColor:"#e0ec70",
      borderRadius:8,
      backgroundColor:"#7349d4e8",
      alignItems:"center",
      justifyContent:"center",
      padding:4,
      elevation:10,      
    },
    textBoton:{
      fontFamily:"bold",
      fontSize:16,
      textAlign:"center",
      color:"aliceblue"
    }


})

