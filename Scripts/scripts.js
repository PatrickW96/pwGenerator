/* Defining charset variables */
var letters = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]; 
var numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0];
var special = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "{" ,  "}" , "[" , "]" , "<" , ">" , "/" , "?"];

/* Creating var to hold the value of the password length  */
var pwLength = 0;

/* Creating array to hold charater type values */

var userChoice = 0;

/* Creating a function to activate generator when button is clicked */
function generateBtn() {
    pwLength = prompt("Choose password length between 8 and 128 character");

/* Conditional setting alert if user chooses pwLength less than 8 characters */
    if (pwLength < 8) {
        alert("Password must be at least 8 characters long");
        pwLength = prompt("Choose password length between 8 and 128 character");
    } else {
        pwLength = pwLength;
    }
    
/* Conditional setting alert if user choose pwLength more than 128 characters */
    if (pwLength > 128) {
        alert("Password cannot exceed 128 characters");
        pwLength = prompt("Choose password length between 8 and 128 character");
    } else {
        pwLength = pwLength;
    }

/* Nothing below this line is working. Figure the logic out tomorrow. Figure out how to get the userChoice prompt to work. */




/* Prompt for user to choose character types used in random password */
userChoice = prompt("Choose what kind of characters to include in your password: numbers, special, lowercase, uppercase");

    /* Conditional to define userCharChoice */
    if (userChoice !== "numbers" || "special" || "lowercase" || "uppercase" || "all") {
        alert("You must choose one of the listed");
        userChoice = prompt("Choose what kind of characters to include in your password: numbers, special, lowercase, uppercase");
    } else {
        userChoice = userChoice;
    }

        console.log(userChoice);
}

