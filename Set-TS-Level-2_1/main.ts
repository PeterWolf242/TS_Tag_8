const arrayMarvel: string[] = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider Man"];

arrayMarvel.push("Iron Man", "Thor");

console.log(arrayMarvel);

const marvelSet = [...new Set(arrayMarvel)];

console.log(marvelSet);