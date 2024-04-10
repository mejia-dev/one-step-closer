import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoodGraph from "./src/components/MoodGraph"
import Landing from './src/components/Landing';
import GoalSetup from './src/components/GoalSetup';
import NotificationSetup from './src/components/NotificationSetup';
import Dashboard from './src/components/Dashboard';
import History from './src/components/History';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ flex: 1, flexDirection: 'column' }}>
      <Stack.Navigator>
        {/*<Stack.Screen name="Landing Page" component={Landing}
          options={{ headerShown: false }} /> */}
        {/*<Stack.Screen name="Goal Setup" component={GoalSetup}
          options={{ headerShown: false }} />*/}
        {/*<Stack.Screen name="Notification Setup" component={NotificationSetup}
          options={{ headerShown: false }} />
        </Stack.Navigator>*/}
        {/*<Stack.Screen name="Dashboard" component={Dashboard}
          options={{ headerShown: false }} />*/}
        <Stack.Screen name="History" component={History}
          options={{ headerShown: false }} />
        </Stack.Navigator>
      {/* <MoodGraph /> */}
    </NavigationContainer>
  );
}
