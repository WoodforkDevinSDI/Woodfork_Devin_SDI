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



vgConsole = prompt ("Let's get the purchase amount before taxes for a new game console and games! \n What is the price of the game console?");
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


var customerOption = doTheMath (vgConsole, totalGames, totalFunds, costOfGames);

    console.log ("With only $" + totalFunds + " and wanting " + totalGames + " games with your console at $" + vgConsole + " for the console " + customerOption);


function doTheMath (console, games, funds, cost){
    var customerOrder = (Number (console) + Number (games * cost));
    var customerTotal = (funds);
    var customerAnswer;



    customerAnswer = ((customerOrder <= customerTotal) ? "You have enough money before taxes with a total of " + customerOrder : "You do not have enough money before taxes! " + customerOrder);

    return (customerAnswer) ;

}

var getTaxes = function (num1, num2){
    num1 = prompt ("Let's get the total with taxes. \n What is your total before taxes?");
    num2 = prompt ("What is the total amount of taxes in your state as a decimal?");
    var total =  Number ((num1 * num2) + Number (num1)) ;
    return (total);
};
var totalReturned = getTaxes ();
console.log ("Your total after taxes is :" + totalReturned);