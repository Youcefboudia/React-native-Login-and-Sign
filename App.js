import { useState } from 'react';
import Login from './Pages/LoginPage';
import Sign from './Pages/SignPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" 
     screenOptions={{
      headerShown: false, 
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign } />
      <Stack.Screen name="Home" component={Home } />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
