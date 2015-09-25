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