import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const NavBar = () => {

  let dashboard = require("../assets/img/dashboard-icon.png");
  let history = require("../assets/img/history-icon.png");
  let settings = require("../assets/img/settings-icon.png");

  return (
    <View style={styles.container}>
      <Image source={dashboard} />
      <Image source={history} />
      <Image source={settings} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#00365C',
    paddingTop: 18,
    paddingBottom: 32,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    padding: 10,
  },
});

export default NavBar;
