function Letter(word) {
  this.dashedWord = word.split('');
  for(var i = 0; i< word.length; i++) {
    this.dashedWord[i] = '_ ';
  }

  
}

module.exports = Letter;


