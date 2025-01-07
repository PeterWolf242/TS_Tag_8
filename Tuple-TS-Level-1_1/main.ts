type starWarsArtists = [string, string][];

const artists: starWarsArtists = [["Luke Skywalker", "Mark Hamill"],
["Darth Vader", "James Earl Jones"],
["Yoda", "Frank Oz"],
["Han Solo", "Harrison Ford"],
["Princess Leia", "Carrie Fisher"]];

artists.forEach(element => {
    console.log(element[1] + " spielt " + element[0]);
});