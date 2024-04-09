import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

const Landing = () => {
  let [fontsLoaded] = useFonts({
    'Museo-SemiBold': require('../assets/fonts/MuseoModerno-SemiBold.ttf'),
    'Museo-Bold': require('../assets/fonts/MuseoModerno-Bold.ttf'),
    'Museo-ExtraBold': require('../assets/fonts/MuseoModerno-ExtraBold.ttf'),
    'Jost': require('../assets/fonts/Jost-Regular.ttf')
  })
  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(240, 253, 255, 1)', 'rgba(139, 157, 255, 1)']} style={styles.background} />
      <Text style={styles.headerFont}>One</Text>
      <Text style={styles.headerFont}>Step</Text>
      <Text style={styles.headerFont}>Closer</Text>
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
  headerFont: {
    fontFamily: 'Museo-Extrabold', 
    fontSize: 64,
    color: 'rgba(0, 89, 101, 1)',
    lineHeight: 60
  }
})