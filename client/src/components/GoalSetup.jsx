import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import MaskedView from '@react-native-masked-view/masked-view';

const Landing = () => {
  let [fontsLoaded] = useFonts({
    'Museo-SemiBold': require('../assets/fonts/MuseoModerno-SemiBold.ttf'),
    'Museo-Bold': require('../assets/fonts/MuseoModerno-Bold.ttf'),
    'Museo-ExtraBold': require('../assets/fonts/MuseoModerno-ExtraBold.ttf'),
    'Jost': require('../assets/fonts/Jost-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F0FDFF', '#8B9DFF']} style={styles.background} />
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
  
});