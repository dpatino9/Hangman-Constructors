
var fruits = {
  words: ["banana", "orange", "apple", "mango"]
}

var currentWord = fruits.words[Math.floor(Math.random()*fruits.words.length)];


module.exports.currentWord = currentWord;
