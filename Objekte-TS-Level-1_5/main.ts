type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

const unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

// * "Geheimnisse" ausgeben
console.log(unserLager.schrank["Obere Schublade"].Ordner2);

// * "Cola" ausgeben
console.log(unserLager.schrank["Untere Schublade"]);

// * "Hefter" ausgeben
console.log(unserLager.schreibtisch);