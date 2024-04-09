
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoodGraph from "./src/components/MoodGraph"
import NavBar from './src/components/NavBar';
import Page1 from './src/components/page1';
import Page2 from './src/components/page2';
import Page3 from './src/components/page3';

const Stack = createStackNavigator();

export default function App() {
  return (
    //signin/up here 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
      </Stack.Navigator>
      <MoodGraph />
      <NavBar />
    </NavigationContainer>
  );
}
