import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NavBar from './NavBar';
import { useNavigation } from '@react-navigation/native'; 
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  MuseoModerno_600SemiBold,
  MuseoModerno_700Bold,
  MuseoModerno_800ExtraBold,
} from '@expo-google-fonts/museomoderno';
import { Jost_400Regular } from '@expo-google-fonts/jost';

const NotificationSetup = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    MuseoModerno_600SemiBold,
    MuseoModerno_700Bold,
    MuseoModerno_800ExtraBold,
    Jost_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let icon = require("../assets/img/plus-icon.png");

  const navigateToGoalSetup = () => {
    navigation.navigate('GoalSetup');
  };

  const navigateToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F0FDFF', '#8B9DFF']} style={styles.background} />
      <Text style={[styles.title, styles.jost]}>Let's set up notifications</Text>
      <View style={styles.boxes}>
        <View style={styles.box}>
          <Text style={[styles.time, styles.jost]}>Wake up time:</Text>
          <Text style={[styles.amount, styles.museo]}>07:00 <Text style={styles.unit}>am</Text></Text>
        </View>
        <View style={styles.box}>
        <Text style={[styles.time, styles.jost]}>Bed time:</Text>
          <Text style={[styles.amount, styles.museo]}>10:00 <Text style={styles.unit}>pm</Text></Text>
        </View>
        <View style={styles.box}>
          <Text style={[styles.time, styles.jost]}>Reminder Notification:</Text>
          <Text style={[styles.amount, styles.museo]}>12:00 <Text style={styles.unit}>pm</Text></Text>
        </View>
        <View style={styles.box}>
          <Text style={[styles.time, styles.jost]}>End-of-day Notification:</Text>
          <Text style={[styles.amount, styles.museo]}>09:50 <Text style={styles.unit}>pm</Text></Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToGoalSetup}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToDashboard}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NotificationSetup;

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
    color: '#00365C'
  },
  title: {
    marginTop: '25%',
    fontSize: 24
  },
  boxes: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24
  },
  box: {
    paddingTop: 18,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderColor: 'white',
    borderWidth: .75,
    borderRadius: 12,
    margin: 10
  },
  amount: {
    fontSize: 32,
    marginLeft: 100,
    marginTop: 2,
    textAlign: 'right'
  },
  unit: {
    fontSize: 14
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 100,
    marginTop: 48
  },
  button: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 18,
    paddingRight: 18,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#00365C'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Jost_400Regular',
  }
});