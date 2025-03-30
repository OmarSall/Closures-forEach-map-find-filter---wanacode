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
