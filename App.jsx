import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login'
import Main from './Main'
import RememberPass from './RememberPass'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator  screenOptions={{ headerStyle: { display: 'none' } }}>
      <Stack.Screen options={{ headerShown:  false}} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown:  false}} name="Main" component={Main} />
      <Stack.Screen options={{ headerShown:  false}} name="RememberPass" component={RememberPass} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}