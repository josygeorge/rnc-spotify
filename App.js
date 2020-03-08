import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
* 5. Now that you have created a basic React Native Project, and modified some basic text, let's create a component.
* 6. in the Components folder, create a new file, called Search.js (it's been created for you)
* 7. Fulfill the steps described in Search.js
* 8.
* 9.
* 10.
* */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native Creative - Spotify Player</Text>
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
