import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
* 1. Replace the text 'Open up App.js to start working on your app!' with 'React Native Creative - Spotify Player'
* 2. Confirm that your changes are seen in the your iOS or Android Emulator.
* 3. Create folders in your project called api and components.
* 4. Commit your changes.
*
*
*
* */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
