import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing.jsx';
import GoalSetup from './GoalSetup';
import NotificationSetup from './NotificationSetup';
import Dashboard from './Dashboard';
import AuthContext from '../context/AuthContext.jsx';

import LoginForm from './LoginForm.tsx';


const Stack = createStackNavigator();

export default function AuthNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer style={{ flex: 1, flexDirection: 'column' }}>
      <Stack.Navigator>
        {user ? (
          <>
            {/* <Stack.Screen name="Dashboard" component={Dashboard}
              options={{ headerShown: false }} /> */}
            <Stack.Screen name="Goal Setup" component={GoalSetup}
              options={{ headerShown: false }} />
            <Stack.Screen name="Notification Setup" component={NotificationSetup}
              options={{ headerShown: false }} />
          </>
        ) : (
          // <Stack.Screen name="Landing Page" component={Landing}
          //   options={{ headerShown: false }} />
          <Stack.Screen name="Login Page" component={LoginForm}
            options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
      {/* <MoodGraph /> */}

    </NavigationContainer>
  );
}
