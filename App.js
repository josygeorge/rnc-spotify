// INSTRUCTIONS:

/*
* 56.
* */

import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Search from './components/Search';

// import mockSearch from "./api/mockSearch";

import spotifyToken from "./api/spotifyToken";
import spotifySearch from "./api/spotifySearch";


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

    // an opinion on using async with componentDidMount() is found here
    // https://stackoverflow.com/questions/47970276/is-using-async-componentdidmount-good
    async componentDidMount() {
        await this.refreshToken();
        await this.loadNextPage();
    }

    async refreshToken() {
        const newToken = await spotifyToken();
        this.setState( {
            token: newToken,
        });
    }

    async loadNextPage() {

        if (this.state.isFetching) {
            console.log('already fetching');
            return;
        }

        this.setState({ isFetching: true });

        const newItems = await spotifySearch({
            offset: this.state.offset,
            limit: PAGE,
            q: this.state.query,
            token: this.state.token,
        });
        console.log('Search completed.');

        console.log(newItems);
    }

    handleSearchChange(text){
        this.setState({
            query: text,
            items: [],
            offset: 0,
        }, () => {
            this.loadNextPage();
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
