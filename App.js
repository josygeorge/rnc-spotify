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
* ... ONCE YOU WORK ON AND COMPLETE THE MOCKSEARCH FILE...
*
*  33. Add an import below to import mockSearch.js
*  34. Add a react native lifecycle Event - componentDidMount() underneath constructor
*
*  async ComponentDidMount() {}
*
*  35. in componentDidMount, await for the response and call a new method called loadNextPage()
*  36. Create an -async- method called loadNextPage() in the class.
*  37. create a const newItems in the loadNextPage() event that will retrive the data from mockSearch

         const newItems = await mockSearch({
            offset: this.state.offset,
            limit: PAGE,
            q: this.state.query,
            token: this.state.token,
        });

* *  Later, you will be replacing mockSearch with Search.
*
* 38. Now you are going to add STATE to this function. in the constructor, add
*
    this.state = {}
*
* 39. then populate the following key / value pairs for state
*  - items: an empty array
*  - offset : 0
*  - isFetching: false
*  - query: 'Led Zeppelin'
*  - token: null
*
* Hypothesize to yourself - what do you think these values represent?
*
* 30. add a const PAGE and set it to a value of 20 (under the import statements)
*
* 31. TEST! run the simulator, and confirm that you get the results shown in the file ./api/sample.returnedArr.txt (from within the console!)
*
* */

import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Search from './components/Search';

// add import of mockSearch described in step (33);
import mockSearch from "./api/mockSearch";

// step (40) - add a constant called PAGE, displaying results
const PAGE = 20;

// step (12) convert the App 'dumb component' function to a 'smart component' using class syntax.
export default class App extends Component {

    // add step (13) here - adding constructor
    // Much later, add the state as described in steps (38), (39)
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

    //  step (34) add componentDidMount();
    //  step (35) add call a new method in -this- class called loadNextPage();
    async componentDidMount() {
        await this.loadNextPage();
    }

    // step (36) add loadNextPage() method
    // step (37) add newItems const
    async loadNextPage() {

        const newItems = await mockSearch({
            offset: this.state.offset,
            limit: PAGE,
            q: this.state.query,
            token: this.state.token,
        });

        console.log(newItems);
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
