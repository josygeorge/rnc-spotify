/* INSTRUCTIONS
*
* 18. In the render() method, add a destructured constant text that will store the value of this component's STATE.
* 19. Replace the value of the value attribute of the text input field to bind to the text const.
* 20. Add an onChangeText attribute to the TextInput component tag that passes the value of text to a new event handler function called handleChangeText (Created in the next step).
* 21. In the Search component class, add the new event handler method handleChangeText, accepting text as an argument (the text from the TextInput field)
* 22. Inside the handleChangeText event handler, create a destructured constant called onChange, and assign it a default value of this.props.
* 23. set this component's state tp stpre the value of text, and pass the value of text to the onChange const. The code is represented below.
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
* 25. Now your component should accept input.
*
* 26. Now let's create a mockup for searching. create a file called mockSearch.js in the API folder and open that file for editing. Proceed to the instructions found in that file to set i up.
*
*
*
* */



import React, {Component} from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Search extends Component {


    // step (24) goes here in the constructor
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    // step (21) add a handleChangeText() event handler function, accepting text as argument
    // step (22) adds a destructured const onChange equal to this.props

    handleChangeText(text){
        const {onChange} = this.props;

        this.setState({
            text,
        }, () => {
            onChange(text);
        });
    }


    render() {

        // step (18) here
        const {text} = this.state;

        // step (19) change the value attr of TextInput
        // step (20) add an onChange Attribute
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Artist Search:</Text>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={text => this.handleChangeText(text)}
                />
            </View>
        );


    }

}


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
