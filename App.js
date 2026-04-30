import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//icons
import { Ionicons } from '@expo/vector-icons';
// componentes
import { Pantalla1 } from './components/pantalla1';
import { Pantalla2 } from './components/pantalla2';
import { Pantalla3 } from './components/pantalla3';
import { Pantalla4 } from './components/pantalla4';


import {Ejercicio1} from './components/ejercicios/ejercicio1';
import {Ejercicio2} from './components/ejercicios/ejercicio2';
import {Ejercicio3} from './components/ejercicios/ejercicio3';
import {Ejercicio4} from './components/ejercicios/ejercicio4';
import {Ejercicio5} from './components/ejercicios/ejercicio5';


import {Ejercicio6} from './components/ejercicios/ejercicio6';
import {Ejercicio7} from './components/ejercicios/ejercicio7';
import {Ejercicio8} from './components/ejercicios/ejercicio8';
import {Ejercicio9} from './components/ejercicios/ejercicio9';
import {Ejercicio10} from './components/ejercicios/ejercicio10';


import {Ejercicio11} from './components/ejercicios/ejercicio11';
import {Ejercicio12} from './components/ejercicios/ejercicio12';
import {Ejercicio13} from './components/ejercicios/ejercicio13';
import {Ejercicio14} from './components/ejercicios/ejercicio14';
import {Ejercicio15} from './components/ejercicios/ejercicio15';


import {Ejercicio16} from './components/ejercicios/ejercicio16';
import {Ejercicio17} from './components/ejercicios/ejercicio17';
import {Ejercicio18} from './components/ejercicios/ejercicio18';


// navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();





// ---------- STACK HOME ----------
const Pantalla1Stack = () => {


  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          borderBottomWidth: 1,
          borderBottomColor: '#e6af4a',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Pantalla1"
        component={Pantalla1}
        options={{ title: 'Pantalla 1' }}
      />

       <Stack.Screen
        name="Ejercicio1"
        component={Ejercicio1}
        options={{ title: 'Ejercicios 1' }}
      />

      <Stack.Screen
        name="Ejercicio2"
        component={Ejercicio2}
        options={{ title: 'Ejercicios 2' }}
      />

      <Stack.Screen
        name="Ejercicio3"
        component={Ejercicio3}
        options={{ title: 'Ejercicio 3' }}
      />

      <Stack.Screen
        name="Ejercicio4"
        component={Ejercicio4}
        options={{ title: 'Ejercicio 4' }}
      />

      
      <Stack.Screen
        name="Ejercicio5"
        component={Ejercicio5}
        options={{ title: 'Ejercicio 5' }}
      />


    </Stack.Navigator>
  );
};


const Pantalla2Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          borderBottomWidth: 1,
          borderBottomColor: '#4ae6d9',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Pantalla2"
        component={Pantalla2}
        options={{ title: 'Pantalla 2' }}
      />

        <Stack.Screen
        name="Ejercicio6"
        component={Ejercicio6}
        options={{ title: 'Ejercicios 6' }}
      />

      <Stack.Screen
        name="Ejercicio7"
        component={Ejercicio7}
        options={{ title: 'Ejercicios 7' }}
      />

      <Stack.Screen
        name="Ejercicio8"
        component={Ejercicio8}
        options={{ title: 'Ejercicio 8' }}
      />

      <Stack.Screen
        name="Ejercicio9"
        component={Ejercicio9}
        options={{ title: 'Ejercicio 9' }}
      />

      
      <Stack.Screen
        name="Ejercicio10"
        component={Ejercicio10}
        options={{ title: 'Ejercicio 10' }}
      />
    </Stack.Navigator>
  );
};

const Pantalla3Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          borderBottomWidth: 1,
          borderBottomColor: '#4ae6d9',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Pantalla3"
        component={Pantalla3}
        options={{ title: 'Pantalla 3' }}
      />

      <Stack.Screen
        name="Ejercicio11"
        component={Ejercicio11}
        options={{ title: 'Ejercicios 11' }}
      />

      <Stack.Screen
        name="Ejercicio12"
        component={Ejercicio12}
        options={{ title: 'Ejercicios 12' }}
      />

      <Stack.Screen
        name="Ejercicio13"
        component={Ejercicio13}
        options={{ title: 'Ejercicio 13' }}
      />

      <Stack.Screen
        name="Ejercicio14"
        component={Ejercicio14}
        options={{ title: 'Ejercicio 14' }}
      />

      
      <Stack.Screen
        name="Ejercicio15"
        component={Ejercicio15}
        options={{ title: 'Ejercicio 15' }}
      />
    </Stack.Navigator>
  );
};

const Pantalla4Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          borderBottomWidth: 1,
          borderBottomColor: '#4ae6d9',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Pantalla4"
        component={Pantalla4}
        options={{ title: 'Pantalla 4' }}
      />

      <Stack.Screen
        name="Ejercicio16"
        component={Ejercicio16}
        options={{ title: 'Ejercicios 16' }}
      />

      <Stack.Screen
        name="Ejercicio17"
        component={Ejercicio17}
        options={{ title: 'Ejercicios 17' }}
      />

      <Stack.Screen
        name="Ejercicio18"
        component={Ejercicio18}
        options={{ title: 'Ejercicio 18' }}
      />

    </Stack.Navigator>
  );
};


// ---------- APP ----------
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 1,
            borderTopColor: '#eee8e88a',
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Pantalla1Stack"
          component={Pantalla1Stack}
          options={{ title: 'Pantalla 1',



            tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
                name={focused ? 'grid' : 'grid-outline'}
              size={size}
              color={color}
            />
          ),
           }}
        />
        <Tab.Screen
          name="Pantalla2Stack"
          component={Pantalla2Stack}
          options={{ title: 'Pantalla 2',
            tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'grid' : 'grid-outline'}
            size={size}
            color={color}
          />
        ),
           }}
        />

        <Tab.Screen
          name="Pantalla3Stack"
          component={Pantalla3Stack}
          options={{ title: 'Pantalla 3',
            tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'grid' : 'grid-outline'}
            size={size}
            color={color}
          />
        ),
           }}
        />

         <Tab.Screen
          name="Pantalla4Stack"
          component={Pantalla4Stack}
          options={{ title: 'Pantalla 4',
            tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'grid' : 'grid-outline'}
            size={size}
            color={color}
          />
        ),
           }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}