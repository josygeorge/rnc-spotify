// INSTRUCTIONS:

/*
* Now that you have created a test call to a 'mocked up' API, let's use the V1 Spotify API
* to do a search and call some data.
*
* */

import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Search from './components/Search';

import mockSearch from "./api/mockSearch";

const PAGE = 20;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            offset: 0,
            isFetching: false,
            query: 'Led Zeppelin',
            token: null,
        };

    }

    async componentDidMount() {
        await this.loadNextPage();
    }

    async loadNextPage() {

        const newItems = await mockSearch({
            offset: this.state.offset,
            limit: PAGE,
            q: this.state.query,
            token: this.state.token,
        });

        console.log(newItems);
    }

    handleSearchChange(text){
        this.setState({
            query: text,
            items: [],
            offset: 0,
        }, () => {
            // callback stub.
        });
    }

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
