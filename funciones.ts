
type Operation = (number: number) => number;

const zero = (operation?: Operation) => !operation ? 0 : operation(0);
const one = (operation?: Operation) => !operation ? 1 : operation(1);
const two = (operation?: Operation) => !operation ? 2 : operation(2);
const three = (operation?: Operation) => !operation ? 3 : operation(3);
const four = (operation?: Operation) => !operation ? 4 : operation(4);
const five = (operation?: Operation) => !operation ? 5 : operation(5);
const six = (operation?: Operation) => !operation ? 6 : operation(6);
const seven = (operation?: Operation) => !operation ? 7 : operation(7);
const eight = (operation?: Operation) => !operation ? 8 : operation(8);
const nine = (operation?: Operation) => !operation ? 9 : operation(9);

const plus = (number: number) => (otherNumber: number) => otherNumber + number;
const minus = (number: number) => (otherNumber: number) => otherNumber - number;
const times = (number: number) => (otherNumber: number) => otherNumber * number;
const dividedBy = (number: number) => (otherNumber: number) => otherNumber / number;

//console.log(seven(times(five())), 35); // must return 35
//console.log(four(plus(nine())), 13); // must return 13
//console.log(eight(minus(three())), 5); // must return 5

console.log(one(plus(zero())), 3); // must return 3
console.log(one(minus(zero(plus(six())))), -6); // must return 3
