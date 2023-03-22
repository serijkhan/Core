/**
 * Console statements
 * console.log() -> log message
 * console.warn() -> warn message
 * console.info() -> Info message
 * console.error() -> Error message
 * console.table() -> Tabular message
 */

console.log('Iam a log message');
console.info('Iam an information message');
console.warn('Iam a warning message');
console.error('Iam a Error message');
console.table({name: 'John', age: 40});

/**
 * Variable declarations
 * let , const -> keyword
 * 1. use camelCase letters
 * 2. do not start with number
 * 3. no special chars, except $ _
 * 4. not too shortname , not too long names max 15 char
 */

/**
 * Data Types
 * 1. string
 * 2. number
 * 3. boolean
 * 4. object
 * 5. array
 * 6. undefined
 * 7. null
 */

let employeeName = "John";
console.log("Employee Name : " + employeeName + " Type : " + typeof employeeName);

/**
 * backtick operator (`) replacement of concatenation operator
 */
console.log(`Employee Name : ${employeeName} Type : ${typeof employeeName}`);

const employeeSalary = 50000.00;
console.log(`Salary : ${employeeSalary} Type : ${typeof employeeSalary}`);

const isManager = true;
console.log(`is Manager ? ${isManager} Type : ${typeof isManager}`);

// object
let mobile = {
    brand: "Nokia",
    price: 25000,
    color: "black",
    isInsured: true
};
console.log(mobile);
console.log(`Mobile Brand : ${mobile.brand} `);

// arrays
let colors = ["White", "Black", "Silver"];
console.log(colors);
console.log(colors[0]);

// undefined - default value
// null - dummy value
let abc = null;
console.log(abc);



