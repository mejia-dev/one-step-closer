import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import AuthNavigator from './src/components/AuthNavigator';

export default function App() {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
  );
}