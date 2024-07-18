"use strict";
// Function to create an album object
function make_album(artist, album_title, tracks) {
    let album = {
        artist: artist,
        album_title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating albums using the make_album function
let album1 = make_album('Coldplay', 'A Rush of Blood to the Head');
let album2 = make_album('Ed Sheeran', 'Divide', 16); // Album with tracks specified
let album3 = make_album('Taylor Swift', '1989');
// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
