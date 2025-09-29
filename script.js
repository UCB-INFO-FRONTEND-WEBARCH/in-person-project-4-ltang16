// Week 6: JavaScript Practice Workshop
// INFO 153A/253A - UC Berkeley

// ============================================
// SAMPLE DATA FOR PRACTICE
// ============================================

// Arrays for practice exercises
const numbers = [5, 12, 8, 20, 3, 15, 7];
const colors = ["red", "green", "blue", "yellow"];
const names = ["Alice", "Bob", "Charlie", "Diana"];
const fruits = ["apple", "banana", "cherry"];

console.log("✅ JavaScript Practice Workshop Loaded!");
console.log("📚 Follow README.md for step-by-step exercises");
console.log("💡 Open browser console (F12) to see your output");
console.log("");

// ============================================
// EXERCISE 1: FUNCTION BASICS
// ============================================
// Practice writing functions with parameters and return values

// Exercise 1.1 - Write a greet(name) function
function greet(name) {
    return "Hello, " + name + "!";
}

function greet2(name) { /* Using template literal */
    return `Hello, ${name}!`;
}

console.log(greet('Sarah'));
console.log(greet2('Alex'));


// TODO: Exercise 1.2 - Write math functions
// add(num1, num2) - returns sum
// multiply(num1, num2) - returns product
// calculateArea(width, height) - returns width * height

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculateArea(width, height) {
    return multiply(width, height);
}

console.log(add(5, 3)); // 8
console.log(multiply(4, 7)); // 28
console.log(calculateArea(10, 20)); // 200


// TODO: Exercise 1.3 - Write functions that call other functions
// square(num) - returns num * num
// sumOfSquares(num1, num2) - uses square() function

function square(num) {
    return num * num;
}

function sumOfSquares(num1, num2) {
    return square(num1) + square(num2);
}

console.log(square(5)); // 25
console.log(sumOfSquares(3, 4)); // 9 + 16 = 25


// Test your Exercise 1 functions here:
console.log(greet("Sarah"));
console.log(add(5, 3));
console.log(sumOfSquares(3, 4));


// ============================================
// EXERCISE 2: CONTROL FLOW
// ============================================
// Practice if/else, switch statements, and ternary operators

// TODO: Exercise 2.1 - Write control flow functions
// checkAge(age) - returns "Adult" if >= 18, else "Minor"
// getGrade(score) - returns letter grade A-F based on score

function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor";
}

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(checkAge(25)); // "Adult"
console.log(checkAge(15)); // "Minor"
console.log(getGrade(85)); // "B"
console.log(getGrade(72)); // "C"


// TODO: Exercise 2.2 - Write switch statement functions
// getDayType(day) - returns "Weekday" or "Weekend"
// getSeasonEmoji(season) - returns emoji for each season

function getDayType(day) {
    switch (day) {
        case ("Saturday" || "Sunday"):
            return "Weekend";
        case ("Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday"):
            return "Weekday";
        default:
            return "Invalid day given";
    }
}

function getSeasonEmoji(season) {
    switch (season) {
        case "spring":
            return "🌸";
        case "summer":
            return "☀️";
        case "fall":
            return "🍂";
        case "winter":
            return "❄️";
        default: 
            return "🌍";
    }
}

console.log(getDayType("Monday")); // "Weekday"
console.log(getDayType("Saturday")); // "Weekend"
console.log(getSeasonEmoji("summer")); // "☀️"


// TODO: Exercise 2.3 - Write ternary operator functions
// isEven(num) - returns "Even" or "Odd"
// getPassFail(score) - returns "Pass" if >= 60, else "Fail"
// getAbsoluteValue(num) - returns absolute value of num

function isEven(num) {
    return (num % 2 === 0) ? "Even": "Odd";
}

function getPassFail(score) {
    return (score >= 60) ? "Pass": "Fail";
}

function getAbsoluteValue(num) {
    return (num > 0) ? num: -num;
}

console.log(isEven(4)); // "Even"
console.log(isEven(7)); // "Odd"
console.log(getPassFail(75)); // "Pass"
console.log(getAbsoluteValue(-5)); // 5


// Test your Exercise 2 functions here:
console.log(checkAge(25));
console.log(getGrade(85));
console.log(getDayType("Monday"));
console.log(isEven(4));


// ============================================
// EXERCISE 3: LOOPS
// ============================================
// Practice for loops, while loops, and for...of loops

// TODO: Exercise 3.1 - Basic for loops
// printNumbers(n) - logs numbers 1 to n
// sumNumbers(n) - returns sum of 1 to n
// countDown(n) - logs countdown from n to 1

function printNumbers(n) {
    for (let i=1; i <= n; i++) {
        console.log(i);
    }
}

function sumNumbers(n) {
    let sum = 0;
    for (let i=1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function countDown(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }   
    console.log("Blast off!");
}

printNumbers(5); // Logs 1, 2, 3, 4, 5
console.log(sumNumbers(10)); // 55
countDown(3); // 3, 2, 1, Blast off!

// TODO: Exercise 3.2 - Loop through arrays
// findMax(arr) - returns largest number in array
// countEvens(arr) - returns count of even numbers

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    return max;
}

function countEvens(arr) {
    let numEvens = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            numEvens++;
        }
    }
    return numEvens;
}

console.log(findMax(numbers)); // 20
console.log(countEvens(numbers)); // 3 (12, 8, 20 are even)


// TODO: Exercise 3.3 - for...of loops
// sumArray(arr) - returns sum of all numbers in array
// printItems(arr) - logs each item in array

function sumArray(arr) {
    arrSum = 0;
    for (const num of arr) {
        arrSum += num;
    }
    return arrSum;
}

function printItems(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
printItems(fruits); // Logs each fruit


// Test your Exercise 3 functions here:
console.log(sumNumbers(10));
console.log(findMax(numbers));
console.log(sumArray([1, 2, 3, 4, 5]));


// ============================================
// EXERCISE 4: ARRAY METHODS
// ============================================
// Practice forEach, filter, map, and reduce

// TODO: Exercise 4.1 - forEach practice
// Use forEach to log each color in the colors array
// Use forEach with index to log "0: red", "1: green", etc.

colors.forEach(function(color) { console.log(color); } );

colors.forEach(color => console.log(color)); /* Using arrow syntax */

colors.forEach(function(color, index) { console.log(`${index}: ${color}`)}); /* Including index */


// TODO: Exercise 4.2 - filter practice
// Create function getLargeNumbers(arr) that returns numbers > 10
// Create function getEvens(arr) that returns only even numbers

function getLargeNumbers(arr) {
    return arr.filter(num => num > 10);
}

function getEvens(arr) {
    return arr.filter(num => num % 2 == 0);
}

const numbers2 = [5, 12, 8, 20, 3, 15, 7];
console.log(getLargeNumbers(numbers2)); // [12, 20, 15]
console.log(getEvens(numbers2)); // [12, 8, 20]


// TODO: Exercise 4.3 - map practice
// Create function doubleNumbers(arr) that doubles each number
// Create function uppercaseNames(arr) that converts names to uppercase

const numbers3 = [1, 2, 3, 4, 5];
const names2 = ["alice", "bob", "charlie"];

function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

function uppercaseNames(arr) {
    return arr.map(name => name.toUpperCase());
}

tripled = numbers3.map(num => num * 3);

console.log(doubleNumbers(numbers3)); // [2, 4, 6, 8, 10]
console.log(tripled); // [3, 6, 9, 12, 15]
console.log(uppercaseNames(names2)); // ["ALICE", "BOB", "CHARLIE"]


// TODO: Exercise 4.4 - reduce practice (optional)
// Create function sumAll(arr) that returns sum using reduce
// Create function findProduct(arr) that returns product of all numbers

const numbers4 = [1, 2, 3, 4, 5];

function sumAll(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

function findProduct(arr) {
    return arr.reduce((total, num) => total * num, 1);
}

console.log(sumAll(numbers4)); // 15
console.log(findProduct(numbers4)); // 120


// TODO: Exercise 4.5 - Combine methods
// Create function processNumbers(arr) that:
// 1. Filters for even numbers
// 2. Doubles each number
// 3. Returns the sum of results

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function processNumbers(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num * 2).reduce((total, num) => total + num, 0);
}

console.log(processNumbers(numbers5));


// Test your Exercise 4 functions here:
colors.forEach(color => console.log(color));
console.log(getLargeNumbers(numbers));
console.log(doubleNumbers([1, 2, 3, 4, 5]));


// ============================================
// BONUS CHALLENGES
// ============================================
// Try these if you finish early!

// CHALLENGE 1: FizzBuzz
// Write a function fizzBuzz() that prints numbers 1-100
// For multiples of 3 print "Fizz"
// For multiples of 5 print "Buzz"
// For multiples of both print "FizzBuzz"


// CHALLENGE 2: Palindrome Checker
// Write function isPalindrome(str) that checks if a string
// reads the same forwards and backwards
// Example: isPalindrome("racecar") should return true


// CHALLENGE 3: Find Duplicates
// Write function findDuplicates(arr) that returns
// array of duplicate values
// Example: [1, 2, 3, 2, 4, 3] should return [2, 3]


// ============================================
// TESTING AREA
// ============================================
// Write your own test code here!

console.log("=== Your Test Code Below ===");

// Example: Test a function you wrote
// console.log(greet("World"));