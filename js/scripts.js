


// UI logic
$(document).ready(function() {
  $("#text").submit(function(event) {
    event.preventDefault();
    let textString = $("#word-order-text").val();
    textString = textString.toLowerCase();
    let sentenceArray = textString.split(" ");
    sentenceArray.sort();
    nestedSen = [];
    sentenceArray.forEach(function(word) {
      sentenceArray.filter(word => nestedSen.push(word));
    });


    const resultSentence = sentenceArray.join(" ");
    $("#result").text(resultSentence);
  });
});