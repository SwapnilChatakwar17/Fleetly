import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack=createStackNavigator()
import LoginScreen from './LoginScreen'
import AppLoading from 'expo-app-loading'
import { useFonts,Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import TabScreen from './bottomTabScreens/TabScreen'

export default function App() {
  let [fontsLoaded]=useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })
  if(!fontsLoaded){
    return(<AppLoading></AppLoading>)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="TabScreen" component={TabScreen} options={{headerShown:false,gestureEnabled:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}