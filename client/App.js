import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoodGraph from "./src/components/MoodGraph"
import Landing from './src/components/Landing.jsx';
import GoalSetup from './src/components/GoalSetup';
import NotificationSetup from './src/components/NotificationSetup';
import Dashboard from './src/components/Dashboard';


const Stack = createStackNavigator();

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(true);
  });

  return (
    <NavigationContainer style={{ flex: 1, flexDirection: 'column' }}>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            {/* <Stack.Screen name="Dashboard" component={Dashboard}
              options={{ headerShown: false }} /> */}
            <Stack.Screen name="Goal Setup" component={GoalSetup}
              options={{ headerShown: false }} />
            <Stack.Screen name="Notification Setup" component={NotificationSetup}
              options={{ headerShown: false }} />
          </>
        ) : (
          <Stack.Screen name="Landing Page" component={Landing}
            options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
      {/* <MoodGraph /> */}
    </NavigationContainer>
  );
}
