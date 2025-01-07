const bands = new Map<string, string[]>(
    [
        ["The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]],
        ["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
        ["Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"]],
        ["NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]],
        ["Kraftwerk", ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"]],
        ["Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]],
        ["Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]],
        ["The Rolling Stones", ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"]],
        ["U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]]
    ]
);

bands.set("Hocico", ["Erk Aicrag", "Racso Agroyam"]);

const bandInfo = bands.get("Metallica");


if (bandInfo) {
    const membersFilter = bandInfo.filter((member) => member.length > 12).map((member) => ({ name: member, length: member.length }));

    membersFilter.forEach((member) => {
        console.log(`Band: Metallica, ${member.name}, Length: ${member.length}`);
    });
}

