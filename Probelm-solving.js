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


//Define an object named person with the following properties:
// name (string) - representing the person's name.
// age (number) - representing the person's age.
// isStudent (boolean) - representing whether the person is a student or not.
// hobbies (array) - representing an array of the person's hobbies.
// Create the object and set some values for each property. Then, log the entire object to the console.

 
const Stu = {
    name : 'Isszo',
    age : 23,
    isStudent : true,
    hobbies : ['cricket', 'football'],

}
console.log(Stu);

// Object Manipulation:
// Add a new property city to the Stu object and set its value to the city where the person lives.
// Update the age property to reflect the person's current age.
// Log the modified Stu object to the console.
 
Stu.city = 'Tokyo';
Stu.age = 25;
console.log(Stu)



// Write a function called filterStudents that takes an array of students
// and returns a new array containing only the students who are students (where isStudent is true).
// Log the result to the console.
// Call the function with the students array.

const students = [
    { name: 'Alice', age: 20, isStudent: true, hobbies: ['reading', 'painting'], city: 'New York' },
    { name: 'Bob', age: 22, isStudent: false, hobbies: ['gaming', 'coding'], city: 'San Francisco' },
    { name: 'Charlie', age: 21, isStudent: true, hobbies: ['music', 'photography'], city: 'Los Angeles' }
];

function filterStudents(StuArr){
    return  StuArr.filter(students => students.isStudent === false);
}
const New = filterStudents(students);
console.log(New);


// Write a function called updateStudent that takes an object representing a student, 
// and updates the isStudent property to false. Log the modified object to the console.
// Call the function with the Stu object.

const Stu = {
    name: 'Isszo',
    age: 25,
    isStudent: true,
    hobbies: ['cricket', 'football'],
    city: 'Tokyo',
}

function updateStudent(student){
    student.isStudent =false;
    console.log(student)
}
updateStudent(Stu)


//Task: Extract Specific Elements
//Given an array of strings, write a function called extractElement
//that takes the array and returns a new array containing only
// the elements that start with the letter 'A'.

function extractElements(stringsArray) {
    const filteredArray = stringsArray.filter(str => str.startsWith('A'));
    return filteredArray;
}
const array1 = ['Apple', 'Banana', 'Orange', 'Avocado', 'Grapes'];
console.log(extractElements(array1)); 


// Given an array of numbers, write a function called manipulateArray that performs
//the following operations and returns the modified array:
// Remove the last element from the array.
// Add a new element with the value 10 to the beginning of the array.
// Double the value of each element in the array.

function manipulateArray(){
    const task = [23, 58, 96, 45, 12];
    task.pop();
    task.unshift(10)
    const doubleArr = task.map(num => num * 2)
    return doubleArr;
}
console.log(manipulateArray());


// Task: Template literals
// Create a welcome message that includes the user's 
//name and the current year using template literals.

const userName = "Alice";
const currentYear = 2024;

const welcomeMessage = `Welcome, ${userName}! We hope you have a fantastic ${currentYear}.`;
console.log(welcomeMessage);



// Task: Extract Information from an Object
// Given an object representing a book, write a function called printBookInfo 
//that takes the book object as a parameter and
// uses object destructuring to extract and print the book's title, author, and year of publication.
// Test your function with different book objects.

function printBookInfo(book){
    
    const { title, author, yearOfPublication } = book;
 
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Year of Publication: ${yearOfPublication}`);
};
const bookObject = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearOfPublication: 1925
};
printBookInfo(bookObject);


// Task: Swap Object Properties
// Write a function called swapProperties that takes an object 
//with properties a and b and swaps their values using object destructuring.
// Test your function with different objects.

function swapProperties(obj) {
     
    const { a, b } = obj;
    const updatedObj = { a: b, b: a };

    return updatedObj;
}
const sampleObject = { a: 5, b: 10 };
const swappedObject = swapProperties(sampleObject);

console.log(swappedObject);


// Task: Extract Nested Object Properties
// Given a nested object representing a person's details, 
//write a function called printPersonDetails that takes 
//the person object as a parameter and uses object destructuring to extract and print the person's name, age, and city.
// Test your function with different nested person objects.

const nested = {
    firstName : 'Tom',
    lastName : 'Lotham',
    person : {
        name : 'David',
        age : 12,
        city : 'Austraila'
    }
};
const {person : {name, age, city}} = nested;
console.log( `Name : ${name}`)
console.log(`Age : ${age}`)
console.log( `city :${city}`)


// Task: Extract Array Elements from an Object
// Given an object with an array property, write a function called printArrayElements that takes the object as a parameter and uses object destructuring to extract and print each element of the array.
// Test your function with different objects having an array property.

function printArrayElements(obj) {
    const [{ name, type }] = obj;
    
    console.log(`Name: ${name}`);
    console.log(`Type: ${type}`);
}
const obj1 = [{ name: 'Bovonto', type: 'juice' }];
const obj2 = [{ name: 'Apple', type: 'fruit' }];

printArrayElements(obj1);
printArrayElements(obj2);


// Task: Hoisting Exploration
// Write a function called hoistingExample that includes a variable declaration, a function declaration, and a function expression.
// Inside the function, try to log the values of the variables before and after their declaration.
// Call the function and observe the outputs.
// Explain the concept of hoisting based on your observations.

 
hoistingExample();

function hoistingExample(){
    console.log("Hello wrold")
}


console.log("Before declaration : ", a);
var a = 5;
console.log("After declaration : ", a);


// Create an object named car with the following properties:
// brand (string): representing the brand of the car.
// speed (number): representing the current speed of the car.
// accelerate (method): a function that increases the speed of the car by 10 units.
// brake (method): a function that decreases the speed of the car by 5 units.

const car = {
    brand : 'Thar',
    Speed : 180,
    accelerate : function(){
        this.Speed += 10;
        console.log(`Accelerated! Current Speed: ${this.Speed}`)
    },
    brake : function(){
        this.Speed -= 5;
        console.log(`Braked! Current Speed:${this.Speed}` )
    },
    Mahendra : function(){
        console.log( `Brand: ${this.brand}, Current Speed: ${this.Speed}`)
    }
};
 car.Mahendra() ;
 car.brake() ;
 car.accelerate();


 // Task: this in Event Handlers
// Create an HTML button with the id "myButton".
// In your JavaScript, select the button using document.getElementById and attach a click event handler to it.
// Inside the event handler, use the this keyword to refer to the button and change its text content to "Clicked!" when it's clicked.

let element = document.getElementById('myButton');
element.addEventListener('click', function() {
    this.textContent = 'Clicked!';
});


// Task: this in Constructor Functions
// Create a constructor function named Person that takes parameters name and age.
// Inside the constructor function, assign name and age to properties of the object using this.
// Create an instance of Person and log the object properties.

function Employee(name, age){
    this.name = name,
    this.age = age
}
let Person1 = new Employee('John', 20);

console.log( `Name :  ${Person1.name},  Age : ${Person1.age}`)



// Call the processArray function with the numbers array.

 function processArray(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i]);
            
        }
}
const myNumbers = [2, 5, 7, 9, 20, 29];
processArray(myNumbers) 


// Arrays:
// Task: Create an array named fruits containing the names of your favorite fruits. Add a new fruit to the array and then log the array to the console.
 
const  fruitsName = ['apple', 'mango', 'strawberry','waterlemon']

 fruitsName.push('banana')
 console.log(fruitsName)


//Task: Create an object named person with properties name, age, and gender. Fill in the values for a fictional person and log the object to the console.

const id = {
    name : 'alexa',
    age : 39,
    gender : 'Female'
}
console.log(id)


//Task: Write a function named hoistingExample that includes both function declaration and variable declaration. Call the function before the actual declarations in the code and observe the behavior.

hoistingEg()
// console.log(x) // variable declaration
function hoistingEg(){
    let x = 10;
    console.log(x) //function declaration
}


//Task: Write a function named multiply that takes two parameters and returns their product. Call the function with two different sets of numbers and log the results.

function multiply(p1, p2){
    return p1 * p2
}
console.log(multiply(23, 3))


//Task: Implement a simple if-else statement. Check if a variable number is even or odd, then log a message accordingly.

let i = 1
if ( i % 2 !== 0) {
    console.log('Odd')
} else {
    console.log('Even')
}


// Task: Use a loop to iterate through the fruits array from task 1. Log each fruit to the console during the iteration.

for (let  i = 0;   i < fruits.length;  i++) {
    console.log( i)
}



//Task: Declare a variable named temperature and assign it a value. Use a conditional statement to log whether it's hot or cold based on the value.

let temperature = 100
if ( temperature > 90 ) {
    console.log( 'The whether is hot')
} else{
    console.log('The whether is cold')
}


//Template Literals:
// Task: Create a template literal to generate a sentence using the name and age properties from the person object in task 2. Log the generated sentence to the console.

console.log(`my Name is ${id.name} and my age is ${id.age}`)


//Task: Declare variables with different data types (string, number, boolean, array, object) and log their types to the console.

let property = 'Javascript'
console.log(typeof property) //String
let N = 2
console.log(typeof N) //number
let Bool = true
console.log(typeof Bool)//boolean
let Ob = { a : 'Javascript'}
console.log(typeof Ob)//object
let Ar = []
console.log(typeof Ar)//Array


//Task: Use arithmetic operators to perform calculations (addition, subtraction, multiplication, division) on two variables and log the results.

let A = 5, B = 20
console.log('Addition :', A + B, 
' Subract:', A - B, 
' Multiply:', A * B, 
' Div:', A / B)
 