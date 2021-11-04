/* Variables - containers that store values
   Multi-line comment here */

var name; // a declared variable, but not initialized and it's in the global scope (BAD)

let foo; // a declared variable that can be changed

//const bar; // a declared cariable that cannot be changed - short for 'constant'

const ANSWER = 42; // const is declared and initialized with the value 42

// Strings

let string1 = "Hello World!";  // preferred way

let string2 = new String("Hello World!");  // constructor

// Number

let myNum = 29038424;

let myNum2 = 345.89;

"1" == 1; // this statement is true because of type coercion and loose equality checking
"1" === 1; // false because this is strict equality checking

// Boolean

let myBool = false;

// Array

let myArray = []; // this is an empty array

//               0     1       2       3      4
let my Array2 = [42, "Bob", myBool, ANSWER, true];

let secondElement = myArray2[1]; // the second position is at index #1

myArray2.push("Tyler"); // added an element to the end of myArray2

myArray2.unshift("Hello World!");

let myLongString = "32408usfjalieriweur938u425ksdjfowiur84uwrlwshdjfo8wuroiwejr4eadfwefds"; // just an array of characters

myLongString.length;

//object

let minObject = {};

let myCar = {
    make: "Ford",
    color: "Matte Black",
    year: "2022",
    model: "Raptor R"
};

myCar.numDoors = 4;

const anotherObject = {
    wordz: ["foo", "bar", "baz"],
    car: {
        make: "Ford",
        model: "Bronco"
    },
    awesomeness: true
};

// Functions