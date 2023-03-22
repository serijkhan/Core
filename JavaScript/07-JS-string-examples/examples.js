let message = "Good Morning";

console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.length);
console.log(message.substring(0, 4))
console.log(message.charAt(0));

let reverseString = (str) => {
    let tmp = "";
    for (let i = str.length - 1; i >= 0; i--) {
        tmp += str.charAt(i);
    }
    console.log(tmp);
};
reverseString(message);
console.log(Array(message));
let revString = message.split('').reverse().join('');
console.log(revString);

/**
 * NAVEEN
 * NAVEE
 * NAVE
 * NAV
 * NA
 * N
 */
let printTriangleOne = (str) => {
    let temp = "";
    for (let i = str.length; i >= 1; i--) {
        temp += `${str.substring(0, i)} \n`;
    }
    console.log(temp);
};
printTriangleOne("NAVEEN SAGGAM");

/**
 *  N
 *  NA
 *  NAV
 *  NAVE
 *  NAVEE
 *  NAVEEN
 */

/**
 *   NAVEEN
 *    AVEEN
 *     VEEN
 *      EEN
 *       EN
 *        N
 */

/**
 *        N
 *       EN
 *      EEN
 *     VEEN
 *    AVEEN
 *   NAVEEN
 */












