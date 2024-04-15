import ProgressGraph from "./ProgressGraph"
import NavBar from './NavBar';
import AuthContext from '../context/AuthContext';
import React, { useState, useContext, useEffect } from 'react';
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

const Dashboard = () => {

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
      <Text style={[styles.title, styles.jost]}>April 15th, 2024</Text>
      <View style={styles.dailyGoal}>
        <Text style={[styles.jost]}>You've reached</Text>
        <Text style={[styles.museo]}>83%</Text>
        <Text style={[styles.jost]}>of your daily goal today.</Text>
      </View>
      <Text style={styles.jost}>Let's have a closer look...</Text>
      <View style={styles.chart}>
        <ProgressGraph style={styles.graph} />
      </View>
      <NavBar />
    </View>
  );
}

export default Dashboard;

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
  museo: {
    fontFamily: 'MuseoModerno_800ExtraBold',
    color: '#005965',
    fontSize: 64,
  },
  title: {
    marginTop: '25%',
    fontSize: 24,
  },
  dailyGoal: {
    marginTop: 80,
    marginBottom: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    paddingLeft: '-100',
    borderColor: 'white',
    borderWidth: .75,
    borderRadius: 12,
    width: '80%',
    marginTop: 12
  },
  graph: {
    resizeMode: 'contain',
  }
});