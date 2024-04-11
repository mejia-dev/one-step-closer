import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  MuseoModerno_600SemiBold,
  MuseoModerno_700Bold,
  MuseoModerno_800ExtraBold,
} from '@expo-google-fonts/museomoderno';
import { Jost_400Regular } from '@expo-google-fonts/jost';

const GoalModal = () => {
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
    <View>Nothing yet</View>
  )
}