/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * @type {string[]}
 */
const technologies = ["HTML", "CSS", "JavaScript", "Bootstrap"];
console.log(technologies);
console.log(technologies[0]);
console.log(technologies[3]);
console.log(technologies[4]); // undefined
console.log(technologies.length);

// normal for-loop
let result = "";
for (let i = 0; i < technologies.length; i++) {
    result += `${technologies[i].toUpperCase()} `;
}
console.log(result);

// for-in loop
result = "";
for (let index in technologies) {
    result += `${technologies[index].toUpperCase()} `;
}
console.log(result);

// for-of loop
result = "";
for (let technology of technologies) {
    result += `${technology.toUpperCase()} `;
}
console.log(result);

// forEach function
result = "";
technologies.forEach(function (technology) {
    result += `${technology.toUpperCase()} `;
})
console.log(result);

// forEach Arrow function
result = "";
technologies.forEach(technology => result += `${technology.toUpperCase()} `);
console.log(result);

// few functions of array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.reverse());
console.log(numbers.join('-'));
numbers.push(6);
console.log(numbers);
numbers.splice(1, 1);
console.log(numbers);
numbers.splice(4, 1, 8);
console.log(numbers);

/**
 * complex arrays
 */
let employees = [
    {
        sno: "A001",
        name: "Rajan",
        age: 25,
        designation: "Software Engineer"
    },
    {
        sno: "A002",
        name: "Mahesh",
        age: 30,
        designation: "Sr.Software Engineer"
    },
    {
        sno: "A003",
        name: "John",
        age: 35,
        designation: "Tech Lead"
    },
    {
        sno: "A004",
        name: "Laura",
        age: 40,
        designation: "Manager"
    },
    {
        sno: "A005",
        name: "Wilson",
        age: 45,
        designation: "Director"
    }
];
console.log(employees);

// for loop
let jrEmployees = [];
for (let employee of employees) {
    if (employee.age <= 30) {
        jrEmployees.push(employee);
    }
}
console.log(jrEmployees);

// filter
let juniorEmployees = employees.filter(employee => employee.age <= 30);
console.log(juniorEmployees);


