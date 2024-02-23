// Global Scope:
// Declare a variable globalVar outside of any function or block and assign it a value.
// Write a function printGlobalVar that prints the value of globalVar to the console.
// Call the printGlobalVar function.

 
var globalVar = 'Hai, there!'
function printGlobalVar (){
    console.log(globalVar) // inside of the function
}
printGlobalVar();
console.log(globalVar) // outside of the function


// Function Scope:
// Write a function called functionScopeExample that declares a variable localVar inside it and assigns a value.
// Print the value of localVar within the function.
// Try to print the value of localVar outside the function. What happens?

function functionScopeExample() {
    var localVar = 'Hello World';
    console.log(localVar); // inside function working
}

functionScopeExample();
console.log(localVar); // localVar is not defined


// Block Scope:
// Use the let keyword to declare a variable blockVar inside an if statement.
// Print the value of blockVar inside the if block.
// Try to print the value of blockVar outside the if block. What happens?

function example() {
    if (true) {
        let blockVar = 'Hello World';
        console.log(blockVar); // inside of the function is working
    }
    // console.log(blockVar); // blockVar is not defined
}

example();


// Traffic Light Simulator:
// Imagine a traffic light with three colors: 'Red', 'Yellow', and 'Green'.
// Write a function called trafficLightSimulator that takes a color as a parameter and prints a message based on the color.
// If the color is 'Red', print "Stop!"
// If the color is 'Yellow', print "Proceed with caution."
// If the color is 'Green', print "Go!"
// If the color is anything else, print "Invalid color!"


function trafficLightSimulator(color) {
   let message;
    switch (color) {
        case 'Red':
            message = 'Stop';
            break;
        case 'Yellow':
            message = 'Proceed with caution.';
            break;
        case 'Green':
            message = 'Go';
            break;
        default:
            message = 'Invalid color!';
            break;
    }
    let Light = message;

    console.log(Light);
}
 
trafficLightSimulator('Red');
trafficLightSimulator('Yellow');
trafficLightSimulator('Green');
trafficLightSimulator('Blue'); // Test with an invalid color


// Write a function called calculateGrade that takes a numeric
// grade as a parameter and prints the corresponding letter grade.
// Use the following grading scale:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59


function calculateGrade(score) {
    if (score >= 90) {
        console.log('A');
    } else if (score >= 80) {
        console.log('B');
    } else if (score >= 70) {
        console.log('C');
    } else if (score >= 60) {
        console.log('D');
    } else if (score >= 0 && score < 60) {
        console.log('F');
    } else {
        console.log('Invalid score');
    }
}

calculateGrade(23);


// Sum of Even Numbers:
// Write a function called sumOfEvenNumbers that takes a positive integer n as a parameter.
// Use a loop to calculate and return the sum of all even numbers from 1 to n.
// Test your function with various values of n.

function sumOfEvenNumbers(n){
    let sum = 1;

    for (let i = 1; i <= n; i++) {
        
        if (i % 2  === 0) {
            sum *= i;
        }
     
    }
    return sum;
}

console.log(sumOfEvenNumbers(12)); 


// Reverse String:
// Write a function called reverseString that takes a string as a parameter and returns the reverse of that string.
// Use a loop to reverse the string.
// Test your function with different input strings.

function reverseString(inputString){
    let reversedString = inputString.split('').reverse().join('');
    for (let i = 0; i < reversedString.length; i++) {
        console.log(reversedString[i]);
    }
}
 reverseString('Front-end developer');

// Countdown:
// Write a function called countdown that takes a positive integer start as a parameter.
// Use a for loop to print a countdown from the specified start value to 1.
// Test your function with different values of start.

function countdown(start) {
    // Ensure that start is a positive integer
    if (start <= 0 || !Number.isInteger(start)) {
        console.log('Please provide a positive integer for start.');
        return;
    }

    // Use a for loop to print the countdown
    for (let i = start; i >= 1; i--) {
        console.log(i);
    }
}
 
countdown(2);   
 
// Countdown with While Loop:

// Write a function called countdownWhile that takes a positive integer start as a parameter.
// Use a while loop to print a countdown from the specified start value to 1.
// Test your function with different values of start.

function countdownWhile(start) {
    while (start <= 0 || !Number.isInteger(start)) {
        console.log('Please provide a positive integer for start.');
        return;
    }

    let i = start;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}

countdownWhile(3);   
 
// Sum of Digits:
// Write a function called sumOfDigits that takes a positive integer num as a parameter.
// Use a while loop to calculate and return the sum of the digits of the given number.
// For example, if num is 123, the function should return 6 (1 + 2 + 3).

function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
         
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}
console.log(sumOfDigits(495)); 

//Write a JavaScript for loop that iterates from 0 to 15. For each iteration,
//it checks if the current number is odd or even, and displays a message on the screen.

for (let i = -15; i <= 15; i++) {
 
   if (i % 2 === 0) {
        console.log(`${i} is even`)

   } else{
        console.log(`${i} is odd`)

   }
   
}

// Loop through numbers from 1 to 100
for (var i = 1; i <= 30; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    // If none of the above conditions are met, print the number
    else {
        console.log(i);
    }
} 

function sumArray(ar)
{
    let n = ar.length;
    let sum = 0;
    
    for(let i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum / n;
}

 
function findMax(ar)
{
    let max = ar[0];
    
    for(let i = 0; i < ar.length; i++)
    {
        if (ar[i] > max)
        {
            max = ar[i];
        }
    }
    
    return max;
}


//Find the max number of an array
let ar = [10,20,30,40,50];
let max = findMax(ar);
console.log("Max: ", max);


//Find the even or odd
let n = 8;
function isEven(n) {
    return n % 2 == 0 ?   "Even"  :   "Odd" ;
}

console.log(isEven(n)) 

//Find the palindromeCheck
function palindromeCheck(num) { 
    let numStr = num.toString(); 
    let result = numStr.split('').reverse().join(''); 
    return numStr === result; 
} 
console.log(palindromeCheck(14541))


//
function largestNum(num1, num2, num3){
    return  Math.max(num1, num2, num3)
}

const  num = largestNum(2, 85, 98);
console.log(num) 


//Write a simple for loop that prints numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
     
    console.log(i) 
}

// Create an array of fruits (["apple", "banana", "orange", "grape"]). Use a for loop to print each fruit on a new line.
let  fruits = ["apple", "banana", "orange", "grape"];
for (let  i =  0;  i <= fruits.length;  i++) {
    console.log(fruits[i])
}

//Implement a while loop that counts from 3 to 7 (inclusive).

let i = 3;
while ( i <= 7) {
    console.log(i);
    i++
}

//Write nested loops to print a pattern of stars:
for (let i = 1; i <= 4; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

//Use a do-while loop to prompt the user for a positive number. Continue prompting until a positive number is entered.

let userInput = parseFloat(prompt("Enter a positive number:"));
do {
    if (isNaN(userInput) || userInput <= 0) {
        console.log("Invalid input. Please enter a positive number.");
    }
} while (isNaN(userInput) || userInput <= 0);

console.log("Valid input!");


//In a for loop, skip the iteration when the loop variable is 3.

for (let  i = 1;  i <= 5;  i++) {
    if (i == 3) {
        continue;
    }
    console.log(i)
}

//Given an array of numbers, double the value of each element using a for loop.

let array = [11, 12, 13, 14, 15]
for (let  i = 0;  i < array.length;  i++) {
    array[i] *= 2;
    console.log(array[i])
}

//Use a while loop to find the first even number greater than 10 in an array of numbers.

 
let numbers = [5, 8, 12, 15, 18, 20];
let i = 0;

while (i < numbers.length) {
    if (numbers[i] > 10 && numbers[i] % 2 === 0) {
        console.log("First even number greater than 10:", numbers[i]);
        break;
    }
    i++;
}


//write a Js program to check two numbers and return true 
//if one of the number is 100 or if the sum of the two number is 100

 function sum(a, b ) {
    if ( a === 100 ||  b === 100 || a + b === 100) {
        return true;
    } else{
        return false;
    }
 }
 console.log(sum(10, 90)); 


 //Given a two values, write a JS program to 
 //find out which one is nearest to 100 
 
const closeto = (a, b) => (100 - a) < (100 - b) ? a : b;
console.log(closeto(10, 98))


//find the number of even digits in an array of integers
const Even = (arr) => arr.filter(num  => num % 2 === 0 ).length
console.log(Even([12, 16, 8, 20]))


// check the whether a given array of intergers is sorted in ascending order
const ascending = (arr) =>{
    for (let i = 0; i < arr.length; i+= 1) {
      
        if (arr[i+1] < arr[i]) return false;
    }
    return true;
}
console.log( ascending([1,2,3,4,5,6,7,8]))
console.log(ascending([1,4,8,2,4]))

//To get the largest even number from an arr of interger
const even = (arr) => Math.max(...arr.filter(num => num % 2 === 0))
console.log(even([12, 95, 80, 81]))


//given a year, if it's a leap yr or not

const Leapyear = (year) => year % 4 === 0;
console.log(Leapyear(2024))

//Write a simple if-else statement that checks if a number is positive or negative.

let number = -7;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//Create a switch statement that prints different messages based on the value of a variable.
let dayOfWeek = "Wednesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week!");
        break;
    case "Wednesday":
        console.log("It's the middle of the week!");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's an ordinary day.");
}


// Function Declaration and Invocation:
// How do you declare a function in JavaScript?
// Write a function that takes two parameters and returns their sum.

function sum(a, b){
    return a + b;
}

 console.log(sum(4 , 7))

//Arrow function
 const plus = (a, b) => a + b;
 console.log(plus(4,7))


//function that return the a passed string with letters in alphabetics
//order.

const alpha = (str) => 
str.split('').sort((a,b) => a > b ? 1 : -1).join('');
console.log(alpha("javascript"))

 