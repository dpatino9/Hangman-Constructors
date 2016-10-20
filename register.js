
// if a letter was found in the currentWord
var found = 0;
var gameWon = 0;


function register(options) {
  //the number of guesses remaining
  this.counter = options.counter;
  this.wordArray = options.wordArray.split('');
 
  this.letters = options.letters;

  //Method to decrease the counter
  this.decreaseCounter = function(){
    this.counter--;
    console.log("Number of guesses remaining: "+ this.counter);
  }

  
  this.gameCheck = function(){
    console.log('in gameCheck');

   
    if (this.wordArray.join('') == this.letters.dashedWord.join('')){
      
      console.log(" ==================!!! it works !!!=================== ");

    }


      if (gameWon == 1) {
      console.log('Wow! You won!');
      gameWon = 0;
      
       
      }else if (this.counter == 0) {
        console.log('Sorry, you lost. Try again!');
      }


  } 


  this.letterCheck = function(L){

    console.log("your letterCheck is: " + L);
    console.log('wordArray', this.wordArray);
    for(var i = 0; i< this.wordArray.length; i++){
      if (L == this.wordArray[i]) {
        console.log('matched!', this.letters);
        this.letters.dashedWord[i] = L;
        found = 1; 
        console.log('this.letters', this.letters);
        console.log('calling lines!');
        
      }
    }
    if (found == 1){
        found = 0;
    }
    else {
        this.decreaseCounter();
    }

  } 

}

module.exports = register;

