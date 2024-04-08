import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('Page1')} style={styles.navItem}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('Page2')} style={styles.navItem}>
        <Text>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('Page3')} style={styles.navItem}>
        <Text>3</Text>
      </TouchableOpacity>
    </View>
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
