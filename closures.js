// Exercise:
// write the getDivideByFunction 

function getDivideByFunction(divisor) {
    return function(number) {
        return number / divisor;
    };
}

const divideByFive = getDivideByFunction(5);
divideByFive(10); // 2
divideByFive(50); // 10

const divideByTwo = getDivideByFunction(2);
divideByTwo(8); // 4
divideByTwo(50); // 25

// Exercise:
// Write the getSmallestNumber function using the forEach function

function getSmallestNumber(numbers) {
    let smallest = numbers[0];

    numbers.forEach(number => {
        if (number < smallest) {
            smallest = number;
        }
    });

    return smallest;
}

getSmallestNumber([2, -5, 10, 1, 4]); // -5
getSmallestNumber([200, 25, 4, 123, 87]); // 4

// Exercise:
// write the getSquaredNumbers function using map 

function getSquaredNumbers(numbers) {
    return numbers.map(number => number ** 2);
}

getSquaredNumbers([1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25]
getSquaredNumbers([6, 7, 8, 9, 10]); // [36, 49, 64, 81, 100]


// Exercise:
// write findUserWithFullName  using the find function

function findUserWithFullName(users, fullName) {
    return users.find(user => `${user.firstName} ${user.lastName}` === fullName);
}

const usersArray = [
  {
    firstName: "John",
    lastName: "Smith",
    heightInCm: 184
  },
  {
    firstName: "Kate",
    lastName: "Williams",
    heightInCm: 169
  }
]

const kate = findUserWithFullName(usersArray, "Kate Williams");
console.log(kate.heightInCm); // 169

// Exercise:
// write the getNegativeNumbers  function using the filter  function

function getNegativeNumbers(numbersArray) {
    return numbersArray.filter(number => number < 0);
}

getNegativeNumbers([1, -5, -3, 12, -152]); // [-5, -3, -152]

//HomeWork

// 1. write the getDeltaFunction

function getDeltaFunction(initialParams) {
    return function (updatedParams = {}) {
        // Merging initial params with updated ones
        const { a, b, c } = { ...initialParams, ...updatedParams };

        if (a === undefined || b === undefined || c === undefined) {
            return NaN;
        }

        return b*b - 4*a*c;
    };
}

// delta = b*b - 4*a*c
const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
getDelta(); // -8
getDelta({ b: 12 }); // 132
getDelta({ a: 4, b: 10 }); // 52
getDelta({ a: 4, b: 0 }); // -48

// The nested function returns NaN if any of the arguments are missing
getDeltaFunction({ a: 1, c: 3 })(); // NaN
getDeltaFunction({ a: 1, c: 3 })({ b: 15 }); // 213

// 2. https://www.codewars.com/kata/5715eaedb436cf5606000381
// solve using forEach function

// You get an array of numbers, return the sum of all of the
// positives ones.
// Note
// If there is nothing to sum, the sum is default to 0.

function sumOfPositives(numbersArray) {
    let sum = 0;

    numbersArray.forEach(number => {
        if (number > 0) {
            sum += number;
        }
    });

    return sum;
}

console.log(sumOfPositives([1, -4, 7, 12])); // 20

// 3. https://www.codewars.com/kata/54edbc7200b811e956000556
// solve using the filter function

// Consider an array/list of sheep where some sheep may be 
// missing from their place. We need a function that counts 
// the number of sheep present in the array (true means present).

function countSheeps(sheep) {
    return sheep.filter((sheep) => sheep === true).length
}

const sheepArray = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];

console.log(countSheeps(sheepArray)); // 17

// 4. https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
// solve using the findIndex  function
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of 
// junk but containing one "needle"
// After your function finds the needle it should return a
// message (as a string) that says:
// "found the needle at position " plus the index it found 
// the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
//  --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
    const index = haystack.findIndex(item => item === "needle");
    return index !== -1 ? `found the needle at position ${index}` : "needle not found";
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])); 
//  "found the needle at position 5"

// 5. https://www.codewars.com/kata/57f781872e3d8ca2a000007e
// solve using the map  function
// Given an array of integers, return a new array 
// with each value doubled.

function doubleArrayValues(numbersArray) {
    return numbersArray.map(number => number * 2);
}

console.log(doubleArrayValues([1, 2, 3])); // Output: [2, 4, 6]

// 6. https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
// solve using the map  function
// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

function invertNumbers(numbersArray) {
    return numbersArray.map(number => -number);
}

console.log(invertNumbers([1, 2, 3, 4, 5])); // Output: [-1, -2, -3, -4, -5]

// 7. https://www.codewars.com/kata/563e320cee5dddcf77000158
// solve using forEach
// It's the academic year's end, fateful moment of your school report. 
// The averages must be calculated. All the students come to you
// and entreat you to calculate their average for them. Easy ! 
// You just need to write a script.
// Return the average of the given array rounded down to its 
// nearest integer.
// The array will never be empty.

function getAverage(marks) {
    let sum = 0;

    marks.forEach(number => {
        sum += number;
    });

    return Math.floor(sum / marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5]));  // 3

// 8. write isStringInArray  using the find function

function isStringInArray(array, searchString) {
    return array.find(item => item === searchString) !== undefined;
}

isStringInArray(["Orange", "Apple"], "Apple"); // true
isStringInArray(["Onion", "Cabbage"], "Potato"); // false

// 9. write the forEach  function from scratch using a for  loop

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const vegetables = ["Carrot", "Cabbage", "Onion"];

function printVegetable(vegetable, index) {
  console.log(vegetable, index);
}

forEach(vegetables, printVegetable);
// Carrot 0
// Cabbage 1
// Onion 2

const fruits = ["Apple", "Orange", "Watermelon"];
forEach(
  fruits,
  function(fruit, index) {
    console.log(fruit, index);
  }
)
// Apple 0
// Orange 1
// Watermelon 2

// 10. Create the executeAfterFiveSeconds function that calls the
// provided function after five seconds

function executeAfterFiveSeconds(callback) {
    setTimeout(callback, 5000);
}

function sayHello() {
    console.log("Hello!");
  }
  
  executeAfterFiveSeconds(sayHello);

// 11. create the getRandomIntegerGenerator  function. It should 
// return a function that returns a random integer between two 
// provided numbers.

function getRandomIntegerGenerator(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

const getRandomDigit = getRandomIntegerGenerator(0, 9);
getRandomDigit(); // random number between 0 and 9 

getRandomIntegerGenerator(-10, 10)(); // random number between -10 and 10

// 12. create the findObjectProperty that returns the name of a property 
// from an object.
// -> it works similarly to the find built into JavaScript, but works 
// with an object instead of an array
// -> if there is no matching property name, return undefined 

function findObjectProperty(object, callback) {
    for (const objectProperty in object) {
        if (object.hasOwnProperty(objectProperty) && callback(object[objectProperty])) {
            return objectProperty;
        }
    }

    return undefined;
}

const redApple = {
  color: "red",
  weightInGrams: 150
}

const propertyName = findObjectProperty(redApple, function(propertyValue) {
  return propertyValue === "red";
})
console.log(propertyName); // color

const john = {
  name: "John",
  bestFriend: {
    name: "Adam"
  }
}

const adamPropertyName = findObjectProperty(john, function(propertyValue) {
  return propertyValue && propertyValue.name === "Adam";
})
console.log(adamPropertyName); // bestFriend


// 13. create the getRandomCharacterGenerator function. 
// It should return a function that returns a random character
//  from the provided string.

function getRandomCharacterGenerator(string) {
    return function() {
        const randomIndex = Math.floor(Math.random() * string.length);
        return string[randomIndex];
    };
}

const getRandomDigit = getRandomCharacterGenerator("0123456789");

getRandomDigit(); // returns a random string that contains a single digit

const getRandomABC = getRandomCharacterGenerator("abcABC");
getRandomABC(); // returns a random string that is a, A, b, B, c, or C

// 14. create the getPrefixedStringGenerator function.
// It should return a function that returns a string with the added prefix.

function getPrefixedStringGenerator(prefix) {
    return function(string) {
        return prefix + string;
    };
}

const prefixStringWithMister = getPrefixedStringGenerator("Mr.");
console.log(prefixStringWithMister(" John")); // Mr. John
console.log(prefixStringWithMister(" Adam")); // Mr. Adam

const prefixStringWithMiss = getPrefixedStringGenerator("Ms.");
console.log(prefixStringWithMiss(" Kate")); // Ms. Kate
console.log(prefixStringWithMiss(" Julie")); // Ms. Julie

const prefixStringWithNegative = getPrefixedStringGenerator("un");
console.log(prefixStringWithNegative("happy")); // unhappy
console.log(prefixStringWithNegative("productive")); // unproductive
console.log(prefixStringWithNegative("fair")); // unfair