// INSTRUCTIONS

/*
*  spotifyToken.js implements a token based upon credentials you create.
*  reference: https://developer.spotify.com/documentation/general/guides/authorization-guide/
*
*
*  You are going to create a Header that contains base 64 encoded string, it contains the client ID and client secret key.
*
* You get a client ID and client secret key when you create a spotify account.
*
* The field in the header must have the format: Authorization: Basic *<base64 encoded client_id:client_secret>*
*
*  "WHen the auth code has been received, you will exchange it with an access token by making a post request to the Spotify accounts service - https://accounts.spotify.com/api/token "
*
*
* */

// BEFORE YOU BEGIN

// install the base-64 module from npm: npm i -S base-64 or yarn add base-64
// add the following IMPORT statement - import {decode as atob, encode as btoa} from 'base-64'

/*
* 1. Add a constant called apiPrefix and make it equal to the string https://accounts.spotify.com/api
*
* 2. Generate base64 credentials for your account.
*
* - As above, base64 credentials should be client_id:client_secret in base 64 encoded format
* so...
* - If you have not done so, register for a Spotify Developer Account - https://developer.spotify.com
* - login to your account.
* - go to your Spotify dashboard - https://developer.spotify.com/dashboard/applications
* - create an application, call it React Native Creative Player or something like that
* - write down your clientId and clientSecret for your app.
*
* 3. Create constant variables called clientId and clientSecret that will hold those values you got from your app you added in the Spotify Dashboard.
*
* 4. Create a constant called base64Cred that equals the results of using the btoa() method (base 64 encoding method) to convert a string concatenating clientId, a colon (':'),  and clientSecret together into one long base64-encoded string.
* You can use template literals or basic string concatenation.
* Console log that value for testing purposes.
*
* 5. Just like mockSearch.js created earlier,  create a default async method that is exported out and available for use. add a console log statement stating 'retrieving token'

  export default async ()=> {}

* 6. Inside the async method code block {}, add the following:
*
* - a constant called apiTokenUrl, equal to concatenating apiPrefix and '/token'. Use template literals or string
* concatenation.
* - a constant called params, an object with the following key / value pairs
*   - method with a value of POST in quotes
*   - headers, itself an object with the following values
*       Authorization - It has a value of `Basic ${base64Cred}` (note template literal syntax here)
*       'Content-TYpe': 'application/x-www-form-urlencoded'
* - a constant called res. Make it equal to an -await- statement that uses the fetch() method that has the following
* parameters:
*       - apiTokenUrl
*       - params
*       - body with a value of 'grant_type=client_credentials'
*
* 7. Create a constant called jsonObj and make it equal to -awaiting- for a response from res, invoking res's json() method.
*
* 8. Create a constant called theToken equal to jsonObj's access_token property.
*
* 9. Return to App.js
*
* */

import {decode as atob, encode as btoa} from 'base-64'

// add constant apiPrefix described in step (1)
const apiPrefix = 'https://accounts.spotify.com/api';

// step (2), (3) assign constants for your clientID and clientSecret
// note the best practice is to put this in an .env file
const clientId = '3dd1ad76687b4c359fa4b5314b84c5a3';
const clientSecret = 'f2036e521df74e008a706b0b211a4f2a';


// step (4) here
const base64Cred = btoa(`${clientId}:${clientSecret}`);
// const base64Cred = 'OGNmNTM4MGY1ODhjNGVhMTg4NDk2ZTI1NGVkNjM3NjA6MjZjZjkxMTg2ZDdlNDBhMWI1ZmVlY2Y0NDlmNzk4MWI=';

console.log('base64 cred = ' + base64Cred);


// steps (5) below; steps  (6), (7), (8)  inside the async code block
// export default sync() => {}



export default async () => {
    console.log ('...retrieving token...');
    const apiTokenUrl = `${apiPrefix}/token`;
    const params = {
        method: 'POST',
        headers: {
            Authorization: `Basic ${base64Cred}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials',
    };

    const res = await fetch(apiTokenUrl, params);
    const jsonObj = await res.json();
    const theToken = jsonObj.access_token;


    console.log ('Your token is = ' + theToken);
    return theToken;

}

