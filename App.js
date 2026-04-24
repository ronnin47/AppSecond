import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//icons
import { Ionicons } from '@expo/vector-icons';
// componentes
import { Home } from './components/home';
import { Perfil } from './components/perfil';
import {Ejercicios1_5} from './components/ejercicios1_5';
import {Ejercicios6_10} from './components/ejercicios6_10';
import {Ejercicios11_15} from './components/ejercicios11_15';
import {Ejercicios16_20} from './components/ejercicios16_20';


// navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();





// ---------- STACK HOME ----------
const HomeStack = () => {


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
        name="HomeMain"
        component={Home}
        options={{ title: 'Home' }}
      />

       <Stack.Screen
        name="Ejercicios1_5"
        component={Ejercicios1_5}
        options={{ title: 'Ejercicios 1 al 5' }}
      />

      <Stack.Screen
        name="Ejercicios6_10"
        component={Ejercicios6_10}
        options={{ title: 'Ejercicios6_10' }}
      />

      <Stack.Screen
        name="Ejercicios11_15"
        component={Ejercicios11_15}
        options={{ title: 'Ejercicios11_15' }}
      />

      <Stack.Screen
        name="Ejercicios16_20"
        component={Ejercicios16_20}
        options={{ title: 'Ejercicios16_20' }}
      />


    </Stack.Navigator>
  );
};


// ---------- STACK PERFIL ----------
const PerfilStack = () => {
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
        name="PerfilMain"
        component={Perfil}
        options={{ title: 'Perfil' }}
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
          name="HomeTab"
          component={HomeStack}
          options={{ title: 'Home',



            tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
           }}
        />
        <Tab.Screen
          name="PerfilTab"
          component={PerfilStack}
          options={{ title: 'Perfil',
            tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'person' : 'person-outline'}
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