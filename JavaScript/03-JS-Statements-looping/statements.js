/**
 1. if-else
 2. switch
 3. for-loop
 4. while
 5. do-while
 */

let currentTime = -180;
let result = "";
if (currentTime >= 0 && currentTime <= 12) {
    result = "Good Morning";
} else if (currentTime > 12 && currentTime <= 17) {
    result = "Good Afternoon";
} else if (currentTime > 17 && currentTime <= 23) {
    result = "Good Evening";
} else {
    result = "Invalid Time";
}
console.log(result);


/**
 * for -loop - print from 0 to 10
 */
result = "";
for (let i = 0; i <= 10; i++) {
    if (i <= 9) {
        result += `${i}, `
    } else {
        result += `${i}`
    }
}
console.log(result);


/**
 * for -loop - print from 20 to 0 diff 2
 */
result = "";
for (let i = 20; i >= 0; i -= 2) {
    if (i > 0) {
        result += `${i}, `
    } else {
        result += `${i}`
    }
}
console.log(result);















