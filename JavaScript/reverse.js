function reverse(sentence) {
    var words = sentence.split(' ');
    
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].split('').reverse().join('');
    }
    
    var reversedSentence = words.join(' ');
    
    return reversedSentence;
  }
  
  var inputSentence = "This is a sunny day";
  var reversedSentence = reverse(inputSentence);
  console.log(reversedSentence); 
  