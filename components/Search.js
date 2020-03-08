// INSTRUCTIONS

/*
*
* 18. In the render() method, add a destructured constant text that will store the value of this component's STATE.
* 19. Replace the value of the value attribute of the text input field to bind to the text const.
* 20. Add an onChangeText attribute to the TextInput component tag that passes the value of text to a new event handler function called handleChangeText (Created in the next step).
* 21. In the Search component class, add the new event handler method handleChangeText, accepting text as an argument (the text from the TextInput field)
* 22. Inside the handleChangeText event handler, create a destructured constant called onChange, and assign it a default value of this.props.
* 23. Inside the handleChangeText event handler, set this component's state to store the value of text, and pass the value of text to the onChange const. The code is represented below.
*
       const {onChange} = this.props;

        this.setState({
            text,
        }, () => {
            onChange(text);
        });
*
* 24. In the constructor function, initially create this.state and assign it a value of an object who has a key of text, and a value of empty quotes '' .
*
* 25. Now your component should accept input. Make sure your simulator is still running to see the steps.
* */

import React, {Component} from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';


export default class Search extends Component {

    // step (24) initializes state in the constructor
    constructor(props) {
        super(props);
    }

    // step (21) add a handleChangeText() event handler function, accepting text as argument
    // step (22) adds a destructured const onChange equal to this.props
    // step (23) add the setState to handleChangeText();
    // handleChangeText(){}


    render() {

        // perform step (18) here


        // step (19) change the value attr of TextInput in the return statement
        // step (20) add an onChange Attribute to TextInput
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Artist Search:</Text>
                <TextInput
                    style={styles.input}
                    value='Search Here'
                />
            </View>
        );


    }

}
// end step (4) with a closed curly brace

const styles = StyleSheet.create({
    text: {},
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        height: 40,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    container: {
        backgroundColor: 'yellow',
    },
});
