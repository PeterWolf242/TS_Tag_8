type Apple = {
    color: string;
    size: string;
    isSweet: boolean;
};

const redApple: Apple = { color: 'red', size: 'big', isSweet: true };
const greenApple: Apple = { color: 'green', size: 'small', isSweet: false };
const yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: false };
const apples: Apple[] = [redApple, greenApple, yellowApple];

apples.forEach(element => {
    console.log(element.size);
});

apples.forEach(element => {
    console.log(element.color);
});

console.log(apples.length);

const pinkApple: Apple = { color: 'pink', size: 'small', isSweet: true };

apples.push(pinkApple);

console.log(apples);

// console.log(apples.map(Object.entries));





