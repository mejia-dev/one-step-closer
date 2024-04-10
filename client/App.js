import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoodGraph from "./src/components/MoodGraph"
import Page1 from './src/components/page1';
import Page2 from './src/components/page2';
import Page3 from './src/components/page3';
import Landing from './src/components/Landing';
import GoalSetup from './src/components/GoalSetup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ flex: 1, flexDirection: 'column' }}>
      <Stack.Navigator>
        <Stack.Screen name="Landing Page" component={Landing}
          options={{ headerShown: false }} />
        {/* <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} /> */}
        <Stack.Screen name="Goal Setup" component={GoalSetup}
          options={{ headerShown: false }} />
      </Stack.Navigator>
      {/* <MoodGraph /> */}
    </NavigationContainer>
  );
}
