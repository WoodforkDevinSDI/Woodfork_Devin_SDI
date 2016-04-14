/**
 * Created by DevinWoodfork on 9/24/15.
 */
/* Woodfork, Devin
   SDI Section 2
   September 24, 2015
 */


//alert("It is linked properly!");

var vgConsole; //declares the variable used to get the value for the cost of the video game console
var totalFunds; //declares the variable used to get the value for the total amount of money the user has
var costOfGames; //declares the variable used to get the value for the cost of the games at the user's store



vgConsole = prompt ("Let's get the purchase amount before taxes for a new game console and games! \n What is the price of the game console?");
//prompts user for the cost of the game console
    while (vgConsole === "" || isNaN (vgConsole)){
        //determines if the user entered nothing or a value other than a number
        vgConsole = prompt("Please enter the correct price of the console");
        //prompts the user to enter correct values if the user did not enter anything or entered a value other than a number
    }
totalGames = prompt ("How many games do you wish to buy with your game console?");
//prompts the user for the total amount of games they want
    while (totalGames === "" || isNaN (totalGames)){
        //determines if the user entered nothing or a value other than a number
        totalGames = prompt ("Please enter a number value for the amount of games you want.");
        //prompts the user to enter correct values if the user did not enter anything or entered a value other than a number
    }
totalFunds = prompt ("How much money do you have in total?");
//prompts user for the total amount of money they have
    while (totalFunds === "" || isNaN (totalFunds)){
        //determines if the user entered nothing or a value other than a number
        totalFunds = prompt ("Please enter a number value for the amount of money you have in total.");
        //prompts the user to enter correct values if the user did not enter anything or entered a value other than a number
    }
costOfGames = prompt ("How much are games at the store?");
//prompts user for the cost of games at the store
    while (costOfGames === "" || isNaN (costOfGames)){
        //determines if the user entered nothing or a value other than a number
        costOfGames = prompt ("Please enter a number value for the cost of the games at the store.");
        //prompts the user to enter correct values if the user did not enter anything or entered a value other than a number
    }


var customerOption = doTheMath (vgConsole, totalGames, totalFunds, costOfGames);
//declares variable for catching the value of the function called

    console.log ("With only $" + totalFunds + " and wanting " + totalGames + " games with your console at $" + vgConsole + " for the console " + customerOption);
//displays the calculations after the function is called and ran

function doTheMath (console, games, funds, cost){

    //declares the function, parameters and arguments
    var customerOrder = (Number (console) + Number (games * cost)); //declares the variable to execute the math
    var customerTotal = (funds); //declares the variable to hold the user's funds
    var customerAnswer; //declares the variable to determine if the customer has enough money before taxes



    customerAnswer = ((customerOrder <= customerTotal) ? "You have enough money before taxes with a total of " + customerOrder : "You do not have enough money before taxes! " + customerOrder);
// determines if the user's order total equals the amount of money they have or is less than and if so tell them they have enough and if not tell them they do not have enough
    return (customerAnswer) ;
    //sends the value of the customer's ability to purchase or not to the main code

}

var getTaxes = function (num1, num2){
    //declares variable that gets the value of the declared function
    num1 = prompt ("Let's get the total with taxes. \n What is your total before taxes?");
    //declares the variable to hold the value of the declared prompt of the user's first number
    num2 = prompt ("What is the total amount of taxes in your state as a decimal?");
    //declares the variable to hold the value of the declared prompt of the user's second
    var total =  Number ((num1 * num2) + Number (num1)) ;
    //declares the value of the total and executes the formula for the total
    return (total);
    //sends the value of customer's purchase to the main code of the anonymous function
};
var totalReturned = getTaxes ();
//declares the variable that gets the value of the function
console.log ("Your total after taxes is :" + totalReturned);
//displays the calculations of the function

//the values used for testing this code include: Console Price: 219.60, Amount of Games: 3, Total Amount of Money: $350
    // The Total Cost Of Games: 19, The Total Before Taxes: 276.6, The Taxes In The State In Decimal: .0925
