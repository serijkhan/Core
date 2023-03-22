/*
const doTask = (success, failure) => {
    let isDone = false;
    if (isDone) {
        success("Task is finished");
    } else {
        failure("Task is Failed to finished");
    }
};
let success = (msg) => {
    console.log("SUCCESS:" + msg);
};
let failure = (msg) => {
    console.log("FAILURE:" + msg);
};
doTask(success, failure);
*/

// actual promise
/*let doTask = new Promise((resolve, reject) => {
    let isDone = false;
    if (isDone) {
        resolve("Task is done");
    } else {
        reject("Task is Not Done");
    }
});
doTask.then((msg) => {
    console.log("SUCCESS:" + msg);
}).catch((error) => {
    console.log("FAILURE:" + error);
});*/

/**
 * make coffee with promises
 */
const getMilkFromShop = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1. Get milk from Shop");
    }, 2000);
});

const boilMilk = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2. Boil Milk");
    }, 1000);
});

const addSugarAndCoffee = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3. add Sugar & Coffee");
    }, 500);
});

const makeCoffee = () => {
    getMilkFromShop.then((msg) => {
        console.log(msg);
        boilMilk.then((msg) => {
            console.log(msg);
            addSugarAndCoffee.then((msg) => {
                console.log(msg);
            })
        })
    })
};
makeCoffee();













