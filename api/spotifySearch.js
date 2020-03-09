// INSTRUCTIONS

/*
*  spotifySearch.js will perform a V1 API call to get songs based upon the artist you look up.
*
* 1. Add a constant called apiPrefix and make it equal to the string https://api.spotify.com/v1
* 2. Create yet another async function that is default for this file and exported.
* 3. For the async's argument, pass the following:
    - {offset, limit, q, token,}
* 4. in the async function code block {}, create a constant called searchUrl, make it equal to the following template
    - `${apiPrefix}/search?type=track&limit=${limit}&offset=${offset}&q=${encodeURIComponent(q)}`

*   console log the value of searchUrl as 'stating search, searchURL is ' and the value
* 5. Similar to spotifyToken.js, create a an object called params with the following key / value pairs
    - method - 'GET'
    - headers - an object with a key of Authorization and a value of `Bearer ${token}`
*
* 6. Similar to spotifyToken.js, create a constant called res. have it -await- the results of the fetch method,
*   passing searchUrl, and params
* 7. Create a constant called jsobObj that stores the results of -awaiting- the results of calling the json()
*     method of res. Console log jsonObj as 'the json response is ' and the value of jsobObj
* 8. Check for the 'ok' property of res. If not res.ok , return an empty array
* 9. Create a constant destructured object that extracts tracks from the json.

 const {
    tracks: {
      items,
    }
  } = json;

*
* 10. Take items (an array) and use the map() method to execute the following upon each item - create a created object
*   with the following settings

    {
    id: item.id
    title: item.name,
    imageUri: item.album.images ? item.album.images.url : undefined;
    }
*
* 11. Add a console log statement indicating that the search has ended.
* 12. Return to App.js
*
*
* */


// step (1) here
const apiPrefix = 'https://api.spotify.com/v1';

// step (2) here
/*

export default async (// step (3) here)  => {
    // step (4), (5), (6), (7), (8), (9) , (10), (11)  here

};

*/

export default async ({offset, limit, q, token,}) => {
    const searchUrl = `${apiPrefix}/search?type=track&limit=${limit}&offset=${offset}&q=${encodeURIComponent(q)}`;
    console.log('starting search, searchURL is ' + searchUrl);
    const params = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const res = await fetch(searchUrl, params);
    const jsonObj = await res.json();
    console.log ('the json results returned is \n' + jsonObj );

    if (!res.ok){
        return [];
    }

    const { tracks: {items, } } = jsonObj;

    return items.map(item => ({
        id: item.id,
        title: item.name,
        imageUri: item.album.images
            ? item.album.images[0].url
            : undefined
    }));

    console.log('Search completed.');

};


