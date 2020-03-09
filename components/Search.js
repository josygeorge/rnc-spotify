// INSTRUCTIONS
/* */



import React, {Component} from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }


    handleChangeText(text){
        const {onChange} = this.props;

        this.setState({
            text,
        }, () => {
            onChange(text);
        });
    }


    render() {

        const {text} = this.state;

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
