import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Landing = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(240, 253, 255, 1)', 'rgba(139, 157, 255, 1)']} style={styles.background} />
      <Text>One Step Closer</Text>
    </View>
  );
}

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})