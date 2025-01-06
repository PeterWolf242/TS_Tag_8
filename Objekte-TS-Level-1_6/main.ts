import { lightFormat } from "date-fns";

type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
};

const meineTopVier: Musik[] = [
    {
        kunstler: 'The Beatles',
        title: 'Abbey Road',
        release_jahr: 1969,
        formate: ['LP', 'CD', 'MC', 'Download'],
        gold: true
    },
    {
        kunstler: 'Pink Floyd',
        title: 'Dark Side of the Moon',
        release_jahr: 1978,
        formate: ['CS', 'CD', 'LP', 'Download'],
        gold: true
    },
    {
        kunstler: 'Led Zeppelin',
        title: 'Led Zeppelin IV',
        release_jahr: 1971,
        formate: ['CS', 'LP', 'Download'],
        gold: true
    },
    {
        kunstler: 'Metallica',
        title: 'Kill ’Em All und Ride the Lightning',
        release_jahr: 1983,
        formate: ['LP', 'CD', 'MC', 'Download'],
        gold: true
    }
];

// * "The Beatles" ausgeben
console.log(meineTopVier[0].kunstler);

// * "Download" aus "Pink Floyd" ausgeben
console.log(meineTopVier[1].formate[3]);

// * true aus "Pink Floyd" ausgeben
console.log(meineTopVier[1].gold);

// * Releasejahre 1971 und 1983 ausgeben
console.log(meineTopVier[2].release_jahr);
console.log(meineTopVier[3].release_jahr);

// * von Metallica "MC" ausgeben
console.log(meineTopVier[3].formate[2]);

// * von Metallica "Ride" ausgeben
const ride = meineTopVier[3].title.split(" ");

// const rideNew = slice
console.log(ride[4]);

const newMusic: Musik = {
    kunstler: 'Rammstein',
    title: 'Sehnsucht',
    release_jahr: 1997,
    formate: ['CD', 'LP'],
    gold: false
}

meineTopVier.push(newMusic);


console.log(meineTopVier);