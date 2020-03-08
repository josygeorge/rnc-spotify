// INSTRUCTIONS:

/*
* 9. Now that you have implemented the basic search controller, the next step is to begin connecting Spotify to your application.
* 10. You will be working within the API folder of this project.
* 11. Additionally, you will work with the Search component, adding input capabilities, accepting user entries and processing them as part of 'state'
* */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Search from "./components/Search";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>React Native Creative - Spotify Player</Text>
            <Search/>
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
