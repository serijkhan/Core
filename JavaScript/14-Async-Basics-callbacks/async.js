/*
let count = 1;
console.log(new Date().toLocaleTimeString());
let greet = () => {
    console.log(new Date().toLocaleTimeString());
    console.log(`Iam from Greet ${count}`);
    count++;
};
const someNumber = setInterval(() => {
    greet();
}, 1000);

setTimeout(() => {
    clearInterval(someNumber);
}, 5000);
*/

/*let students = [{name: "Rajan", branch: "MEch"}, {name: "Mahesh", branch: "Civil"}];

const addNewStudent = (student, callback) => {
    setTimeout(() => {
        console.log('creating a new student');
        students.push(student);
        callback();
    }, 2000);
};

const displayStudents = () => {
    setTimeout(() => {
        console.log('display students')
        console.log(students);
    }, 1000);
};
addNewStudent({name: "John", branch: "CSC"}, displayStudents);*/

/**
 * callbacks
 * Make a Coffee
 * 1. Get milk from Shop
 * 2. Boil milk
 * 3. add sugar , coffee
 *
 */

const getMilkFromShop = (boilMilk, addSugarAndCoffee) => {
    setTimeout(() => {
        console.log("1. Get milk from Shop");
        boilMilk(addSugarAndCoffee);
    }, 2000);
};

const boilMilk = (addSugarAndCoffee) => {
    setTimeout(() => {
        console.log("2. Boil milk");
        addSugarAndCoffee();
    }, 1000);
};

const addSugarAndCoffee = () => {
    setTimeout(() => {
        console.log("3. add sugar & coffee");
    }, 500);
};

const makeCoffee = () => {
    getMilkFromShop(boilMilk, addSugarAndCoffee);
};
makeCoffee();












