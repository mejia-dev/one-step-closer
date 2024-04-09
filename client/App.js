import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoodGraph from "./src/components/MoodGraph"
import NavBar from './src/components/NavBar';
import Page1 from './src/components/page1';
import Page2 from './src/components/page2';
import Page3 from './src/components/page3';
import Landing from './src/components/Landing';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing Page" component={Landing}
          options={{ headerShown: false }} />
        {/* <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} /> */}
      </Stack.Navigator>
      {/* <MoodGraph />
      <NavBar /> */}
    </NavigationContainer>
  );
}