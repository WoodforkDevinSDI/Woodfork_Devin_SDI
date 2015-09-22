/*
 Devin Woodfork
 SDI Section #2
 GoTo Training Week #2
 September 10, 2015
 */

//alert("Test to see if connected.");

// Create a Calculator

//variables

var firstName; //user's first name
var firstNumber; //rectangle's "length"
var secondNumber; //rectangle's "width"
var thirdNumber; //rectangle's "height"
var surfaceArea1; //variable for the surface area of a rectangle
var surfaceArea2; //variable for the surface area of two same-sized rectangles
var surfaceArea3; //variable for the surface area of three same-sized rectangle
var surfaceArea4; //variable for the surface area of four same-sized rectangle
var array = [2,3,4]; //used to create array
var volume; //variable for the volume of a rectangle

//prompts

firstName = prompt("Let's get the surface area of your rectangle tile for your wall panels! We will calculate the measurements needed to cover 1/4, 1/2, 3/4 and your entire wall plus the volume of your rectangle tile! \n" +
                   "Please type in your name!");  //gets user's first name

firstNumber = prompt("What is the length of the rectangle?"); //gets user's first number for the length
secondNumber = prompt("What is the width of the rectangle?"); //gets user's second number for the width
thirdNumber = prompt("What is the height of the rectangle?"); //gets user's third number for the height

//formulas



surfaceArea1 = (Number(2*firstNumber*secondNumber) + Number(2*firstNumber*thirdNumber) + Number(2*secondNumber*thirdNumber)); //formula for the surface area of 1/4 of a wall
surfaceArea2 = (array [0] * (Number(2*firstNumber*secondNumber) + Number(2*firstNumber*thirdNumber) + Number(2*secondNumber*thirdNumber))); //formula for the surface area of 1/2 of a wall
surfaceArea3 = (array [1] * (Number(2*firstNumber*secondNumber) + Number(2*firstNumber*thirdNumber) + Number(2*secondNumber*thirdNumber))); //formula for the surface area of 3/4 of a wall
surfaceArea4 = (array [2] * (Number(2*firstNumber*secondNumber) + Number(2*firstNumber*thirdNumber) + Number(2*secondNumber*thirdNumber))); //formula for the surface area of theh entire wall
volume = Number ((firstNumber *= secondNumber *= thirdNumber));

//plugs in the user's numbers for the formula and solves




//outputs
console.log(firstName + ", " + "the surface area of tile for 1/4 of your wall is:" + " " + surfaceArea1 + "."); //outputs the 1/4 formula with the user's name
console.log("The surface area of tile for 1/2 of your wall is:" + " " + surfaceArea2 + "."); //outputs the 1/2 of tile formula
console.log("The surface area of tile for 3/4 of your wall is:" + " " + surfaceArea3 + "."); //outputs the 3/4 of tile formula
console.log("The surface area of tile to cover the entire wall is:" + " " + surfaceArea4 + "."); //outputs the entire wall of tile formula
console.log ("The volume of your rectangle tile is " + volume + "."); //outputs the volume of the rectangle


