// INSTRUCTIONS:

/*
* Now that you have created a test call to a 'mocked up' API, let's use the V1 Spotify API
* to do a search and call some data.
*
*
* 42. Comment out the mockSearch import.
* 43. Proceed to follow the steps in spotifyToken.js
* 44. add import statement to import spotifyToken.js
* 45. Create a new async method above async LoadNextPage() called refreshToken() which will refresh our token.
* 46. In refreshToken() create a constant called newToken which -awaits- the results of spotifyToken()
* 47. Use this component's setState method to set the token key equal to the value of newToken;
* 48. In the componentDidMount() method , add an await statement to wait for this.refreshToken() to return results.
* 49. Add the following to async loadNextPage() to adjust the isFetching state value, just above the newItems const.
*
    if (this.state.isFetching) {
      console.log('already fetching');
      return;
    }

    this.setState({ isFetching: true });
    *
*
* 50. Just before the close curly brace in the async loadNextPage() method call, add the following to 'indicate we
* are done fetching data' and note the items key. What are we doing there?
*
    this.setState({
      isFetching: false,
      offset: this.state.offset + PAGE,
      items: [
        ...this.state.items,
        ...newItems,
      ],
    });

*  51. In the handleSearchChange() method, underneath the callback stub comment, add a call to this.loadNextPage()
*  52. proceed to follow the instructions in spotifySearch.js and follow the instructions there.
*  53. Once you are back here, import spotifySearch.js underneath spotifyToken
*  54. Replace const newItems = await mockSearch() { ... keep code ... } with
*   const newItems = await search() { ... keep code ... }
*
*  55. Run the emulator! yarn start or npm start. You should see a call to get results returned from the default search of Led Zeppelin.
*
*
* */

import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Search from './components/Search';

// step (42) comment out the import
import mockSearch from "./api/mockSearch";

// step (44) add import statement to import spotifyToken.js

// step (53) import spotifySearch


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
        await this.loadNextPage();
    }

    // step (45) here
    /* async refreshToken(){
        // step (46), (47) and (48)
    }
    */


    async loadNextPage() {

        // add step (49) here;

        // way later, do step (54) here
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
            // step (51) here
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
