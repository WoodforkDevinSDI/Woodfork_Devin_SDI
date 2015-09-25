/**
 * Created by DevinWoodfork on 9/24/15.
 */
/* Woodfork, Devin
   SDI Section 2
   September 24, 2015
 */


//alert("It is linked properly!");

var vgConsole;
var totalGames;
var totalFunds;
var costOfGames;
var taxNumber = 9;


vgConsole = prompt ("What is the price of the game console?");
    while (vgConsole === "" || isNaN (vgConsole)){
        vgConsole = prompt("Please enter the correct price of the console");
    }
totalGames = prompt ("How many games do you wish to buy with your game console?");
    while (totalGames === "" || isNaN (totalGames)){
        totalGames = prompt ("Please enter a number value for the amount of games you want.");
    }
totalFunds = prompt ("How much money do you have in total?");
    while (totalFunds === "" || isNaN (totalFunds)){
        totalFunds = prompt ("Please enter a number value for the amount of money you have in total.");
    }
costOfGames = prompt ("How much are games at the store?");
    while (costOfGames === "" || isNaN (costOfGames)){
    }


var customerOption = doTheMath (vgConsole, totalGames, totalFunds, costOfGames, taxNumber);

    console.log ("With only " + totalFunds + " and wanting " + totalGames + " with your console at " + vgConsole + " " + customerOption);

function doTheMath (console, games, funds, cost, tax){
    var customerOrder = Number (console + (games * cost) + tax);
    var customerTotal = (funds);
    var customerAnswer;


    customerAnswer = ((customerOrder <= customerTotal) ? "You have enough money!" : "You do not have enough money!");

    return customerAnswer;
}

