import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MoodGraph from "./components/MoodGraph"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MoodGraph />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
