


// UI logic
$(document).ready(function() {
  $("#text").submit(function(event) {
    event.preventDefault();
    let textString = $("#word-order-text").val();
    textString = textString.toLowerCase();
    let eachChar = textString.split("");
    const punctArray = [",", ".", ";", ":", "?", "!", "-"];
    if (punctArray.includes(eachChar.at(-1))) {
      eachChar.pop();
    }
    eachChar.forEach(function(char) {
      if (punctArray.includes(char)) {
        console.log(char);
        console.log(eachChar.indexOf(char));
        eachChar.splice(eachChar.indexOf(char), 1);
      } 
    });
    let newTextString = eachChar.join("")
    console.log(newTextString);
    let sentenceArray = newTextString.split(" ");
    sentenceArray.sort();
    lastCount = 0;
    lastWord = "";
    let wordCountArray = [];
    sentenceArray.forEach(function(word) {
      if (word === lastWord) {
        lastCount += 1;
      } else {
        wordCountArray.push([lastCount, lastWord]);
        // $("#result").append("<li>" + lastWord + " - " + lastCount);
        lastWord = word;
        lastCount = 1;
      }
    });
    wordCountArray.sort();
    wordCountArray.reverse()
    wordCountArray.forEach(function(wordArray) {
      $("#result").append("<li>" + wordArray[1] + " - " + wordArray[0] + "</li>");
    });
  });
});