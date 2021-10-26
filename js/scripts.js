// BUSINESS LOGIC
function toArray(string, spacing) {
  string = string.toLowerCase();
  return string.split(spacing);
}

function noPunct(eachCharacterArray) {
  const punctArray = [",", ".", ";", ":", "?", "!", "-"];
  if (punctArray.includes(eachCharacterArray.at(-1))) {
    eachCharacterArray.pop();
  }
  eachCharacterArray.forEach(function(char) {
    if (punctArray.includes(char)) {
      eachCharacterArray.splice(eachCharacterArray.indexOf(char), 1);
    } 
  });
  return eachCharacterArray.join("")
}

function wordCountSort(arrayOfWords) {
  arrayOfWords.sort();
  lastCount = 0;
  lastWord = "";
  let wordCountArray = [];
  arrayOfWords.forEach(function(word) {
    if (word === lastWord) {
      lastCount += 1;
    } else {
      wordCountArray.push([lastCount, lastWord]);
      lastWord = word;
      lastCount = 1;
    }
  });
  wordCountArray.sort();
  wordCountArray.reverse();
  return wordCountArray;
}

// UI LOGIC
$(document).ready(function() {
  $("#text").submit(function(event) {
    event.preventDefault();

    let textString = $("#word-order-text").val();
    let eachChar = toArray(textString, "");
    let newTextString = noPunct(eachChar);
    let wordArray = toArray(newTextString, " ")
    let wordCountArray = wordCountSort(wordArray);

    wordCountArray.forEach(function(numberWords) {
      $("#result").append("<li>" + numberWords[1] + " - " + numberWords[0] + "</li>");
    });
  });
});