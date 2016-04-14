/*
 Devin Michael Woodfork
 Thursday, September 17, 2015
 Conditionals Assignment
 */


//create variables confirmations and prompts

var userName; //variable declaring user's name
var femaleRatio; //variable declaring user's female ratio value
var maleRatio; //variable declaring user's male ratio value
var totalStudents; //variable declaring user's total student body count
var verifyOne; //variable for verifying the user's ratio values are correct
var verifyTwo; //variable for verifying the user's total student body count is correct
var moreProblems; //variable for declaring the user's prompt if they have more than one equation to solve or not
var equationOne; //variable for declaring the formula for the first part of the equation
var maleEquation; //variable for the male ratio equation answer
var femaleEquation; //variable for the female ratio equation answer
var ratioChoice; //variable for getting which ratio equation the user wants to get
var verifyRatioChoice; //variable for verifying which equation the user wants
var moreCalculations; //variable for verifying if the user has more equations to solve

userName = prompt ("Let's solve your female to male ratio! Enter your name!"); //gets user's name value
femaleRatio = prompt ("Enter the female count of the ratio."); //gets user's female ratio value
maleRatio = prompt ("Enter the male count of the ratio."); //gets user's male ratio value
totalStudents = prompt ("Enter the total amount of students."); //gets user's total student body count
ratioChoice = prompt ("Which ratio do you want to solve : female or male?"); //gets which equation(s) user wants the value of
moreCalculations = prompt ("Do you have more than one problem to solve?"); //finds out if the user has more than one problem to solve


//validate
userName = confirm ("Is this your name? " + userName); //confirms the user's name is entered correctly
verifyOne = confirm ("Is this your female to male ratio? " + femaleRatio + ":" + maleRatio); //confirms the user's ratios entered are correct
verifyTwo = confirm ("Is this your total amount of students? " + totalStudents); //confirms the user's total student body count is correct
verifyRatioChoice = confirm ("Is this the ratio you want to solve? " + ratioChoice); //confirms the user's choice of equation(s) to be solved
moreCalculations = confirm ("Is your answer to having more problems: " + moreCalculations + "?"); //confirms if the user already solved the equation or not

//solve with if else statements & print to console

equationOne = Number ((Number (femaleRatio) + (Number (maleRatio)))); //formula for the first part of ratio equation
moreProblems = ((moreCalculations != "yes") ? "Good Job, You're All Done!" : "Refresh To Solve More!"); //verifies if the user's entered they had more problems to solve

if ((ratioChoice === "female") && (userName != "")) //initiates if the user entered female for choice of ratio answer and name is a proper value
{

    femaleEquation = Number ((Number (femaleRatio / equationOne)) * (Number (totalStudents))); //formula for solving for the female ratio
    console.log (userName + ", the total amount of female students equals " + femaleEquation + ".  " + moreProblems); //displays the user's name and answer for female equation

    // ***** values entered for testing, name:Devin,  female: 9; male: 8, total students: 374, ratioChoice: female, solved equation answer: no, final answer:198*****
}
    else if ((ratioChoice === "male") && (userName != "" )) //initiates if the user entered male for choice of ratio answer and name is a proper value
{
    maleEquation = Number ((Number ((maleRatio / equationOne)) * (Number (totalStudents)))); //formula for solving for the male ratio
    console.log (userName + ", the total amount of male students equals " + maleEquation + ". " + moreProblems + "."); //displays the user's name and answer for male equation

    // ***** values entered for testing, name: Devin, female: 9; male: 8, total students: 374, ratioChoice: male, solved equation answer: no , final answer: 176*****

}
    else if ((ratioChoice != "female") || (ratioChoice != "male")) //initiates if the user did not enter the requested values for ratioChoice
{
    console.log ("Refresh your screen and enter the correct values!"); //displays a message telling the user to refresh and start over

    // ***** values entered for testing, name: Devin, female: 9; male: 8, total students: 374, ratioChoice: zebra, more equations answer: no *****
    // ***** values entered for testing, name: " ", female: 9; male: 8, total students: 374, ratioChoice: zebra, more equations answer: no *****
}

    else if ((moreCalculations = "") || (userName = "") || (ratioChoice = "")) //initiates if the user left some lines blank
{
    console.log ("You left some needed information blank! Refresh and Try Again!"); //informs the user to refresh because they left some information blank
}


// coding error came from the Number() needed to be added before the entire equation otherwise the math would return as a string although each equation had Number () in front of it!
// console.log displayed errors because of human logical errors !
//over thought logic causing major errors
//reduce the amount of () used around equations
