console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

const collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
function addToCollection(title, artist, yearPublished) {

    //   - Create a new object having the above properties
    const newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

    //   - Add the new object to the end of the `collection` array
    collection.push(newAlbum);

    //   - Return the newly created object
    return newAlbum;
}//end addToCollection

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

//add album  and test
const albumOne = addToCollection('Red Ruby da Sleeze', 'Nicki Minaj', '2023');
console.log('Album 1:', albumOne);
console.log('Added Item to Collection', collection);

const albumTwo = addToCollection('Waving Flag', 'Knaan', '2011');
console.log('Album 2:', albumTwo);
console.log('Added Item to Collection', collection);

const albumThree = addToCollection('Code', 'Dave Chappelle', '2003');
console.log('Album 3:', albumThree);
console.log('Added Item to Collection', collection);

const albumFour = addToCollection('Blue', 'Mr. Bluey', '1829');
console.log('Album 4:', albumFour);
console.log('Added Item to Collection', collection);

const albumFive = addToCollection('Red', 'Ms. Red', '2013');
console.log('Album 5:', albumFive);
console.log('Added Item to Collection', collection);


const albumSix = addToCollection('So What', 'Pink', '2008');
console.log('Album 6:' , albumSix);
console.log('Added Item to Collection', collection);


// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

////////////////////
////////////////////
//COME BACK FOR THIS ONE
//////////////////////
/////////////////////////


function showCollection(albums){
    //Show items in array
    console.log('Number of items in collection:', albums.legnth);

    //Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for (let i = 0; i<albums.legnth; i++){
        console.log(albums[i].title, "by ", albums[i].artist, "Published in ", albums[i].yearPublished );
    }//end for
}//end


// - Test the `showCollection` function.

showCollection(collection);



// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!

