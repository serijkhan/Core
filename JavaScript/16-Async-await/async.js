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

const makeCoffee = async () => {
    try {
        let response = await getMilkFromShop;
        console.log(response);
        response = await boilMilk;
        console.log(response);
        response = await addSugarAndCoffee;
        console.log(response);
    } catch (e) {
        console.error(e);
    }
};
makeCoffee();













