// INSTRUCTIONS:

// Keep the mobile simulator running if your machine allows it so that you can immediately see changes


/*
* 73. Comment out the mockSearch import. Uncomment out the spotify component
* 74. replace state in the constructor() with the following:


            this.state = {
            items: [],
            offset: 0,
            isFetching: false,
            query: 'Led Zeppelin',
            token: null,
        };
*
* 75. Remove the following from ComponentDidMount()

        const newSongs = await mockSearch({
            offset: 0,
            limit: 20,
            q: 'Van Halen',
        });

        console.log('in componentDidMount(): the new songs returned is/are \n', newSongs);

       this.setState({
            songs: newSongs,
            isFetching:true,
          });

*  76. Uncomment await this.refreshToken(); in componentDidMount()
*  77. in loadNextPage() method. replace mockSearch with spotifySearch
*  78. In the render() method, replace
    - const { songs } = this.state; // with
    - const { items, isFetching } = this.state;
*  79. Update the value of the items attribute for the StatelessListComponent and also adjust the logic as follows:

{
    (isFetching && items.length === 0)?null:
        <StatelessListComponent items={items} onEndReached={ () => this.handleEndReached() } />
}

* 80. Test and ensure that the app now runs, pulling Led Zeppelin data from Spotify
*
*
*
*
*
*
*
* */

import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Search from './components/Search';

// step (73) here
// import mockSearch from "./api/mockSearch";

import spotifyToken from "./api/spotifyToken";

// step (73) also here
import spotifySearch from "./api/spotifySearch";

import StatelessListComponent from "./components/StatelessListComponent";

const PAGE = 20;

export default class App extends Component {

    constructor(props) {
        super(props);
        // step (74) update this.state() in the constructor
        this.state = {
            items: [],
            offset: 0,
            isFetching: false,
            query: 'Led Zeppelin',
            token: null,
        };

    }


    async componentDidMount() {
        // step (75) remove the mockSearch here.
        // step (76) call again refreshToken(). uncomment.
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
            console.log('Fetching In Progress');
            return;
        }

        this.setState({ isFetching: true });

        // step (77) here
        const newItems = await spotifySearch({
            offset: this.state.offset,
            limit: PAGE,
            q: this.state.query,
            token: this.state.token,
        });
        console.log('the items returned are \n' , newItems);
        console.log('Search completed.');

        this.setState({
            isFetching: false,
            offset: this.state.offset + PAGE,
            items: [
                ...this.state.items,
                ...newItems,
            ],
        });


    }

    handleSearchChange(text){
        console.log('the value to search is ', text);
        this.setState({
            query: text,
            items: [],
            offset: 0,
        }, () => {
            this.loadNextPage();
        });
    }

    handleEndReached() {
        this.loadNextPage();
    }

    render() {

        const { items, isFetching } = this.state;
        console.log('isFetching', isFetching);

            return (
                <View style={styles.container}>
                    <Text>React Native Creative - Spotify Player</Text>
                    <Search onChange={text => this.handleSearchChange(text)} />
                    {
                        (isFetching && items.length === 0)?null:
                            <StatelessListComponent items={items} onEndReached={ () => this.handleEndReached() } />
                    }
                </View>
            );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        margin: 10,
        marginTop: 50,
    },
});
