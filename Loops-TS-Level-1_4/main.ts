const friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

let i: number;

for (i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}

for (const friendName of friendNames) {
    console.log(friendName);
}