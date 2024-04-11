import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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

const GoalSetup = () => {
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

  const navigateToNotificationSetup = () => {
    navigation.navigate('NotificationSetup');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F0FDFF', '#8B9DFF']} style={styles.background} />
      <Text style={[styles.title, styles.jost]}>Let's set up your goals</Text>
      <View style={styles.boxes}>
        <View style={styles.box}>
          <Text style={[styles.time, styles.jost]}>Screen time:</Text>
          <Text style={[styles.amount, styles.museo]}>3 <Text style={styles.unit}>hours</Text></Text>
        </View>
        <View style={styles.box}>
        <Text style={[styles.time, styles.jost]}>Exercise time:</Text>
          <Text style={[styles.amount, styles.museo]}>1 <Text style={styles.unit}>hour</Text></Text>
        </View>
        <View style={styles.box}>
          <Text style={[styles.time, styles.jost]}>Meditation time:</Text>
          <Text style={[styles.amount, styles.museo]}>30 <Text style={styles.unit}>mins</Text></Text>
        </View>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 18 }}>
          <Image source={icon} style={styles.icon}/>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToNotificationSetup}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GoalSetup;

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
    margin: 12
  },
  amount: {
    fontSize: 32,
    marginLeft: 140,
    marginTop: 8,
    textAlign: 'right'
  },
  unit: {
    fontSize: 14
  },
  buttonContainer: {
    height: '12%',
    display: 'flex',
    justifyContent: 'flex-end',
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