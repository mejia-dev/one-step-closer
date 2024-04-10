import ProgressGraph from "./ProgressGraph"
import NavBar from './NavBar';

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  MuseoModerno_600SemiBold,
  MuseoModerno_700Bold,
  MuseoModerno_800ExtraBold,
} from '@expo-google-fonts/museomoderno';
import { Jost_400Regular } from '@expo-google-fonts/jost';

const History = () => {
  let [fontsLoaded] = useFonts({
    MuseoModerno_600SemiBold,
    MuseoModerno_700Bold,
    MuseoModerno_800ExtraBold,
    Jost_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F0FDFF', '#8B9DFF']} style={styles.background} />
      <Text style={[styles.title, styles.jost]}>April 2024</Text>
      <View style={styles.dayLog}>
        <View style={styles.log}>
          <Text style={styles.date}>Monday, 15th</Text>
          <Text style={styles.percentage}>83%</Text>
        </View>
        <View style={styles.log}>
          <Text style={styles.date}>Tuesday, 16th</Text>
          <Text style={styles.percentage}>70%</Text>
        </View>
        <View style={styles.log}>
          <Text style={styles.date}>Wednesday, 17th</Text>
          <Text style={styles.percentage}>95%</Text>
        </View>
      </View>
      <View style={styles.averageContainer}>
        <Text style={styles.average}>Average: 83%</Text>
      </View>
      <NavBar />
    </View>
  );
}

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    height: '80%'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  jost: {
    fontFamily: 'Jost_400Regular',
    color: '#00365C'
  },
  title: {
    marginTop: '25%',
    fontSize: 24,
  },
  dayLog: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 12
  },
  log: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderTopWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.75)'
  },
  date: {
    fontFamily: 'Jost_400Regular',
    fontSize: 15
  },
  percentage: {
    fontFamily: 'MuseoModerno_600SemiBold',
    color: '#005965',
    fontSize: 16
  },
  averageContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18
  },
  average: {
    fontFamily: 'MuseoModerno_700Bold',
    color: '#005965',
    fontSize: 18,
  }
});