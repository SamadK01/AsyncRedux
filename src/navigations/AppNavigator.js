import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Sync from '../screens/Sync';
import SyncCustom from '../screens/SyncCustom';
import Home from '../screens/Home';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
      <Stack.Screen name="Sync" component={Sync} options={{headerShown: false}}  />    
      <Stack.Screen name="SyncCustom" component={SyncCustom} options={{headerShown: true}}  />  
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}  />    
        <Stack.Screen name="Cart" component={Cart} options={{headerShown: true}}  /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
