


// UI logic
$(document).ready(function() {
  $("#text").submit(function(event) {
    event.preventDefault();
    let textString = $("#word-order-text").val();
    textString = textString.toLowerCase();
    let eachChar = textString.split("");
    const punctArray = [",", ".", ";", ":", "?", "!", "-"];
    let noPunctArray = [];
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
    sentenceArray.forEach(function(word) {
      if (word === lastWord) {
        lastCount += 1;
      } else {
        $("#result").append("<li>" + lastWord + " - " + lastCount);
        lastWord = word;
        lastCount = 1;
      }
    });
  });
});