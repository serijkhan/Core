/**
 * normal function
 * function expression
 * arrow function
 */
function greetNF(name) {
    console.log(`Iam from greetNF ${name}`);
}

greetNF("John");

let greetFE = function (name) {
    console.log(`Iam from greetFE ${name}`);
};
greetFE('John');

let greetAF = (name) => {
    console.log(`Iam from greetAF ${name}`);
};
greetAF('John');

let sum = (a, b) => {
    return a + b;
};
let result = sum(10, 20);
console.log(result);

// Dis-adv
let printData = (name, age) => {
    let result = `Hello ${name} you are ${age}yrs`;
    console.log(result);
};
printData("John", 40);

// print numbers
result = "";
let printNumbers = (startNumber, endNumber, incrNumber) => {
    result = "";
    if (startNumber <= endNumber) {
        for (let i = startNumber; i <= endNumber; i += incrNumber) {
            result += `${i} `
        }
        console.log(result);
    } else {
        console.log('Start number should be less than end number Bro');
    }
};
printNumbers(5, 20, 5);
printNumbers(5, 2000, 10);













