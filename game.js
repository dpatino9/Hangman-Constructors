
var sports = {
  words: ["baseball", "football", "basketball", "golf", "hockey"]
}

var currentWord = sports.words[Math.floor(Math.random()*sports.words.length)];


module.exports.currentWord = currentWord;
