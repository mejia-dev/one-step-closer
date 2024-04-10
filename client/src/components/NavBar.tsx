import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(
      TouchableOpacity,
      { onPress: () => handlePress('Page1'), style: styles.navItem },
      React.createElement(Text, null, 'image for Page1')
    ),
    React.createElement(
      TouchableOpacity,
      { onPress: () => handlePress('Page2'), style: styles.navItem },
      React.createElement(Text, null, 'image for page2')
    ),
    React.createElement(
      TouchableOpacity,
      { onPress: () => handlePress('Page3'), style: styles.navItem },
      React.createElement(Text, null, 'image for Page3')
    ),
    // React.createElement(
    //   TouchableOpacity,
    //   { onPress: () => handlePress('ProgressGraph'), style: styles.navItem },
    //   React.createElement(Text, null, 'image for ProgressGraph')
    // ),
    // React.createElement(
    //   TouchableOpacity,
    //   { onPress: () => handlePress('MoodGraph'), style: styles.navItem },
    //   React.createElement(Text, null, 'image for MoodGraph')
    // )
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
    padding: 10,
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
