//data from js files
var inquirer = require('inquirer');
var Letter = require('./letter');
var game = require('./game');
var Register = require('./register');




console.log('The Current Word is:', game.currentWord);
var letters = new Letter(game.currentWord);
var register = new Register({counter: 10, wordArray: game.currentWord, letters: letters});
console.log("letters object: ", letters);

//this prompts user to make a letter guess
//recursive function to make the game continue
function ask() {  
  inquirer.prompt([
     {
      type: "input",
      name: "guess",
      message: "Guess a Letter:",
       
    }
    ]).then(function (game) {
      //if the persons types anything other than a letter
      //they get an message
      if (game.guess < 64 || game.guess > 91){
        console.log("Please type a letter.");
        ask();
      }
      else{
      //the game continues  
       register.letterCheck(game.guess);
       console.log('checking game');
       register.gameCheck();
       console.log('done gameCheck()');
       ask();
      }
  }); 
}

ask();

