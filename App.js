// INSTRUCTIONS:

/*
* 9. Now that you have implemented the basic search controller, the next step is to begin connecting Spotify to your application.
* 10. You will be working within the API folder of this project.
* 11. Additionally, you will work with the Search component, accepting user entry and processing them as part of 'state'
* 12. Our App needs to become a smart component. Convert the App function (a 'dumb' component) to a Smart Component by converting it from to a class. Have the App class extend React.component.
* 13. As part of converting the App component to a 'smart' component, add a constructor function, similar to the Search Component. Ensure that it receives props and calls super(), passing props.
* 14. In the App class, create a event handler function called handleSearchChange(), which will receive the value of text from the textInput
* 15. in the Search Component tag within the return statement of the render() method, add an onChange attribute representing the change event of the textInput field. Have it pass the value of the text attribute over to handleSearchChange method. It's not efficient but that may be corrected at a later time (to use bind() ).
* 16. In the handleSearchChange() event handler method, we will now add STATE. Tell the App component (using this.setState() ) to store the accepted input value text as an object. Also add two additional keys for items, and offset, which will be used later on. Also note a callback function stub to use once the state has been set.
*
*         this.setState({
            query: text,
            items: [],
            offset: 0,
        }, () => {
            // callback stub.
        });
*
* 17. Then go proceed to follow the steps inside Search.js
*

*
*
*
* */

import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Search from './components/Search';

// step (12) convert the App 'dumb component' function to a 'smart component' using class syntax.
export default class App extends Component {

    // add step (13) here - adding constructor
    constructor(props) {
        super(props);
    }

    // add step (14) here - adding handleSearchChange(event)
    // for step (16) once you add the handleSearchChange handler, set the state to be the value
    // of what is inputted.
    handleSearchChange(text){
        this.setState({
            query: text,
            items: [],
            offset: 0,
        }, () => {
            // callback stub.
        });
    }

    // step (12) requires you to convert the return statement to a render() method
    // step (15) requires you to adjust the <Search /> tag for the render method
    render() {
        return (
            <View style={styles.container}>
                <Text>React Native Creative - Spotify Player</Text>
                <Search onChange={text => this.handleSearchChange(text)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
