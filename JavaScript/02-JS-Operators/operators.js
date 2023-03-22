/**
 * JS Operators
 * 1. math Operators + - / *
 * 2. shorthand math += -= /= *=
 * 3. conditional : <= , >= !==
 * 4. logical : || &&
 * 5. incr / decr : ++ , --
 * 6. ternary : ?:
 * 7. equality operators : == ===
 */

let num1 = 10;
let num2 = 20;
console.log(`sum : ${num1 + num2}`);
console.log(`sub : ${num1 - num2}`);
console.log(`mul : ${num1 * num2}`);
console.log(`div : ${num1 / num2}`);


let a = 10;
let b = 20;
let sum = 100;
sum *= (a + b); // sum = sum * (a + b)
console.log(sum); // 130

let marks = 75;
let result = "";
if (marks <= 34) {
    result = "You Failed the exam";
} else {
    result = "You Pass the exam";
}
console.log(result);

let courseFinished = true;
let projectFinished = true;
result = "";
if (courseFinished && projectFinished) {
    result = "You can try for Job openings";
} else {
    result = "Keep Practice & make project";
}
console.log(result);


let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);

// (condition) ? true : false;
marks = 75;
result = "";
(marks <= 34) ? result = "You Failed the exam" : result = "You Pass the exam";
console.log(result);

let p = 10;
let q = "10";
if (p === q) {
    console.log('Both are Equal');
} else {
    console.log('Both are NOT Equal');
}
