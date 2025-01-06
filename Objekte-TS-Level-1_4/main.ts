type Pet = {
    tiertyp: string;
    namen: string[];
};

const unsereHaustiere: Pet[] = [
    {
        tiertyp: 'Katze',
        namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
        tiertyp: 'Hunde',
        namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    },
    {
        tiertyp: 'Hamster',
        namen: ['Pupsi', 'Waldi']
    }
];

// * "Nala" ausgeben
console.log(unsereHaustiere[0].namen[1]);

// * "Droopy" ausgeben
console.log(unsereHaustiere[1].namen[2]);

console.log("Hundenamen: " + unsereHaustiere[1].namen);

// * Droopy in Snoppy ändern
unsereHaustiere[1].namen[2] = 'Snoppy';


console.log("Hundenamen: " + unsereHaustiere[1].namen);

console.log(unsereHaustiere);