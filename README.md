# Week 6: JavaScript Practice Workshop
## Functions, Control Flow, Loops, and Array Methods

### Learning Objectives
By completing this workshop, you will:
- Write functions with parameters and return values
- Apply control flow structures (if/else, switch, ternary operators)
- Use loops (for, while, for...of) to iterate through data
- Apply array methods (forEach, filter, map, reduce)
- Understand function scope and return values
- Practice debugging JavaScript using console.log

### Prerequisites
Before starting, you should have:
- Completed Week 6 lecture on Functions & Control Flow
- Reviewed prep work: Modern JavaScript Chapters 4-5 (Functions & Control Flow)
- Optional: Modern JavaScript Chapter 6 (Array Methods)
- Understanding of variables, data types, arrays, and objects from Week 4

### Workshop Overview
This is a **hands-on coding practice session** where you'll write JavaScript functions and control flow logic step-by-step. Think of this as a workout for your JavaScript skills - you'll practice the concepts from the lecture by writing code that demonstrates each pattern.

**No application building** - just focused practice on the fundamentals. Each exercise reinforces a specific concept from your prep work and lecture.

### Getting Started

**First:** Accept the GitHub Classroom assignment link provided by your instructor. This will create a new repository with the Week 6 starter code.

1. **Clone your new repository:**
   ```bash
   git clone [your-github-classroom-repo-url]
   cd [your-repo-name]
   ```

2. **Choose your path:**

This workshop is **completely standalone** - you don't need any previous week's code:

**Setup:**
Use the provided starter files in your cloned repository:

1. **Open the project** in your code editor
2. **Open `index.html`** in your browser
3. **Open the browser console** (Right-click > Inspect > Console)
4. You'll see starter messages confirming setup

### Step-by-Step Exercises

#### Exercise 1: Function Basics (10 minutes)

**Goal:** Practice writing functions with parameters and return values

**Exercise 1.1: Greet Function**

Write a simple function that takes a name parameter and returns a greeting:

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

// Or using template literals:
function greetModern(name) {
    return `Hello, ${name}!`;
}
```

**What's happening:**
- Function takes one parameter: `name`
- Uses the `return` keyword to send back a string
- The function doesn't run until you call it

**Test it:**
```javascript
console.log(greet("Sarah")); // "Hello, Sarah!"
console.log(greetModern("Alex")); // "Hello, Alex!"
```

**Exercise 1.2: Math Functions**

Write functions that perform calculations:

```javascript
function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculateArea(width, height) {
    return width * height;
}
```

**Test it:**
```javascript
console.log(add(5, 3)); // 8
console.log(multiply(4, 7)); // 28
console.log(calculateArea(10, 20)); // 200
```

**Exercise 1.3: Functions Calling Functions**

Functions can call other functions:

```javascript
function square(num) {
    return num * num;
}

function sumOfSquares(num1, num2) {
    return square(num1) + square(num2);
}
```

**Test it:**
```javascript
console.log(square(5)); // 25
console.log(sumOfSquares(3, 4)); // 9 + 16 = 25
```

**Key concepts:**
- Functions can call other functions
- Break complex problems into smaller functions
- `return` exits the function immediately

**Common mistakes:**
- Forgetting to `return` a value
- Code after `return` never runs
- Misspelling function names

#### Exercise 2: Control Flow (10 minutes)

**Goal:** Practice if/else, switch, and ternary operators

**Exercise 2.1: If/Else Statements**

Write functions that make decisions:

```javascript
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
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
```

**Test it:**
```javascript
console.log(checkAge(25)); // "Adult"
console.log(checkAge(15)); // "Minor"
console.log(getGrade(85)); // "B"
console.log(getGrade(72)); // "C"
```

**Exercise 2.2: Switch Statements**

Use switch for multiple specific cases:

```javascript
function getDayType(day) {
    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday";
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}

function getSeasonEmoji(season) {
    switch(season) {
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
```

**Test it:**
```javascript
console.log(getDayType("Monday")); // "Weekday"
console.log(getDayType("Saturday")); // "Weekend"
console.log(getSeasonEmoji("summer")); // "☀️"
```

**Exercise 2.3: Ternary Operator**

Shorthand for simple if/else:

```javascript
function isEven(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

function getPassFail(score) {
    return (score >= 60) ? "Pass" : "Fail";
}

function getAbsoluteValue(num) {
    return (num >= 0) ? num : -num;
}
```

**Test it:**
```javascript
console.log(isEven(4)); // "Even"
console.log(isEven(7)); // "Odd"
console.log(getPassFail(75)); // "Pass"
console.log(getAbsoluteValue(-5)); // 5
```

**Key concepts:**
- `if/else` for binary decisions
- `else if` for multiple conditions
- `switch` for many specific cases
- Ternary `?:` for simple conditionals
- Always include a `default` in switch statements

#### Exercise 3: Loops (10 minutes)

**Goal:** Practice for loops, while loops, and for...of loops

**Exercise 3.1: For Loop**

Use for loops to iterate:

```javascript
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
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
```

**Test it:**
```javascript
printNumbers(5); // Logs 1, 2, 3, 4, 5
console.log(sumNumbers(10)); // 55
countDown(3); // 3, 2, 1, Blast off!
```

**Exercise 3.2: Looping Through Arrays**

Process array data with loops:

```javascript
const numbers = [5, 12, 8, 20, 3];

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function countEvens(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
```

**Test it:**
```javascript
console.log(findMax(numbers)); // 20
console.log(countEvens(numbers)); // 3 (12, 8, 20 are even)
```

**Exercise 3.3: For...Of Loop**

Modern loop syntax for arrays:

```javascript
function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

const fruits = ["apple", "banana", "cherry"];

function printItems(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
```

**Test it:**
```javascript
console.log(sumArray([1, 2, 3, 4, 5])); // 15
printItems(fruits); // Logs each fruit
```

**Key concepts:**
- For loop: `for (let i = 0; i < arr.length; i++)`
- Access array element: `arr[i]`
- For...of loop: cleaner syntax for iterating
- Loop counter variable is typically `i` for index
- Use `arr.length` to know when to stop

#### Exercise 4: Array Methods (15 minutes)

**Goal:** Use forEach, filter, map, and reduce

**Exercise 4.1: forEach Method**

Execute a function for each array element:

```javascript
const colors = ["red", "green", "blue"];

// Using forEach to log each item
colors.forEach(function(color) {
    console.log(color);
});

// With arrow function (shorter)
colors.forEach(color => console.log(color));

// With index parameter
colors.forEach(function(color, index) {
    console.log(`${index}: ${color}`);
});
```

**Exercise 4.2: filter Method**

Create a new array with elements that pass a test:

```javascript
const numbers = [5, 12, 8, 20, 3, 15, 7];

// Get numbers greater than 10
const large = numbers.filter(function(num) {
    return num > 10;
});

// Arrow function version
const largeArrow = numbers.filter(num => num > 10);

// Get even numbers
const evens = numbers.filter(num => num % 2 === 0);

console.log(large); // [12, 20, 15]
console.log(evens); // [12, 8, 20]
```

**Exercise 4.3: map Method**

Transform each element in an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(function(num) {
    return num * 2;
});

// Arrow function version
const tripled = numbers.map(num => num * 3);

// Transform strings
const names = ["alice", "bob", "charlie"];
const uppercase = names.map(name => name.toUpperCase());

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(tripled); // [3, 6, 9, 12, 15]
console.log(uppercase); // ["ALICE", "BOB", "CHARLIE"]
```

**Exercise 4.4: reduce Method (Optional)**

Reduce an array to a single value:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0); // 0 is the starting value

// Arrow function version
const product = numbers.reduce((total, num) => total * num, 1);

console.log(sum); // 15
console.log(product); // 120
```

**Exercise 4.5: Combining Methods**

Chain methods together:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers, double them, then sum
const result = numbers
    .filter(num => num % 2 === 0)  // [2, 4, 6, 8, 10]
    .map(num => num * 2)            // [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0);  // 60

console.log(result); // 60
```

**Key concepts:**
- `forEach()`: Execute function for each element (no return)
- `filter()`: Create new array with elements that pass test
- `map()`: Transform each element into something new
- `reduce()`: Combine all elements into single value
- Methods can be chained: `arr.filter().map().reduce()`
- Original array is never modified

### Practice Challenges

Once you've completed the exercises above, try these:

1. **FizzBuzz**: Write a function that prints numbers 1-100, but for multiples of 3 print "Fizz", multiples of 5 print "Buzz", and multiples of both print "FizzBuzz"
2. **Palindrome Checker**: Write a function that checks if a string reads the same forwards and backwards
3. **Find Duplicates**: Given an array, return all duplicate values
4. **Calculate Average**: Use reduce to calculate the average of an array of numbers
5. **Filter and Transform**: Given an array of objects, filter by a condition and map to extract specific properties

### Extension Challenges

#### Intermediate
- Write a function that takes an array of numbers and returns an object with `min`, `max`, and `average` properties
- Create a function that removes all falsy values from an array
- Implement a function that groups an array of objects by a property value

#### Advanced
- Write a function that flattens a nested array (e.g., `[1, [2, [3, 4]], 5]` becomes `[1, 2, 3, 4, 5]`)
- Create a function that finds the longest word in a sentence
- Implement your own version of `map` using a for loop

#### Graduate (253A)
- Write a function that takes two arrays and returns their intersection (common elements)
- Create a function that implements debouncing (limits how often a function can run)
- Implement a higher-order function that takes a function and returns a memoized version

### Troubleshooting Guide

#### Problem: "function is not defined"
**Solution**: Make sure you define functions before calling them, or place all function calls at the bottom of your script

#### Problem: "My filter/map isn't working"
**Solution**: Remember to `return` a value from your callback function
```javascript
// Wrong - no return in block syntax
numbers.filter(num => { num > 10 })  // ✗

// Correct
numbers.filter(num => { return num > 10 })  // ✓
numbers.filter(num => num > 10)  // ✓ (implicit return)
```

#### Problem: "Infinite loop crashed my browser"
**Solution**: Always make sure your loop counter increments
```javascript
// Dangerous!
let i = 0;
while (i < 10) {
    console.log(i);
    // Forgot to increment i!
}

// Safe
let i = 0;
while (i < 10) {
    console.log(i);
    i++;  // Eventually makes condition false
}
```

#### Problem: "I don't see any output"
**Solution**: Check that you're calling the function, not just defining it
```javascript
// Just defining - nothing happens
function sayHello() {
    console.log("Hello");
}

// Actually calling it - output appears
sayHello();
```

### Resources & References

**Functions:**
- [MDN: Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Function Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Return Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

**Control Flow:**
- [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: switch Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN: Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [MDN: Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

**Loops:**
- [MDN: for Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [MDN: while Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [MDN: for...of Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

**Array Methods:**
- [MDN: forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN: filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Workshop Checklist

Use this to track your progress:

**Exercise 1: Functions (Required)**
- [ ] Wrote `greet(name)` function with return value
- [ ] Wrote `add(num1, num2)` function
- [ ] Wrote `calculateArea(width, height)` function
- [ ] Wrote `sumOfSquares(num1, num2)` using function composition
- [ ] Tested all functions with console.log()

**Exercise 2: Control Flow (Required)**
- [ ] Wrote `checkAge(age)` using if/else
- [ ] Wrote `getGrade(score)` using else if
- [ ] Wrote `getDayType(day)` using switch
- [ ] Wrote `isEven(num)` using ternary operator
- [ ] All functions return correct values

**Exercise 3: Loops (Required)**
- [ ] Wrote `sumNumbers(n)` using for loop
- [ ] Wrote `findMax(arr)` looping through array
- [ ] Wrote `countEvens(arr)` with conditional in loop
- [ ] Wrote `sumArray(arr)` using for...of loop
- [ ] Tested with different array values

**Exercise 4: Array Methods (Required)**
- [ ] Used `forEach()` to log array elements
- [ ] Used `filter()` to get subset of array
- [ ] Used `map()` to transform array elements
- [ ] (Optional) Used `reduce()` to calculate sum
- [ ] Chained multiple array methods together

**Code Quality:**
- [ ] All functions have clear, descriptive names
- [ ] Functions use parameters correctly
- [ ] Functions return appropriate values
- [ ] No syntax errors in browser console
- [ ] Code is readable and well-organized

**Challenge Exercises (Optional):**
- [ ] Completed FizzBuzz challenge
- [ ] Completed Palindrome checker
- [ ] Attempted advanced challenges
- [ ] Tried 253A graduate challenges

### What's Next?

**Week 7 Preview - DOM Manipulation:**
Next week, you'll use these same functions to manipulate the webpage! Instead of `console.log()`, you'll update HTML elements. The `filter()` and `map()` patterns you practiced today will dynamically create and update page content.

**How This Connects:**
Every function you wrote today can be adapted to work with DOM elements. The logic patterns are identical - you're just changing WHERE the output goes (webpage vs console).

### Key Takeaways

By completing this workshop, you've practiced:
- **Functions** organize code and make it reusable
- **Parameters** pass data into functions
- **Return values** get data out of functions
- **Control flow** makes decisions (if/else, switch, ternary)
- **Loops** process multiple items (for, while, for...of)
- **Array methods** transform data functionally (forEach, filter, map, reduce)

**Why This Matters:**
These are the building blocks of all JavaScript programming. Every web application uses functions, control flow, loops, and array methods. Master these fundamentals, and you can build anything!