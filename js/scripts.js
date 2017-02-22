//Back-end logic
var unluckyCheck = [];
var luckyCheck = [];
// var unluckyResult = (unluckyCheck.length > luckyCheck.length)
// var luckyResult = (luckyCheck.length > unluckyCheck.length)
// var mediocreResult = (luckyCheck.length === unluckyCheck.length)

//Front-end logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unlucky = $(this).val();
      unluckyCheck.push(unlucky);
      });
    $("input:checkbox[name=lucky]:checked").each(function() {
      var lucky = $(this).val();
      luckyCheck.push(lucky);
      });
    var unluckyResult = (unluckyCheck.length > luckyCheck.length)
    var luckyResult = (luckyCheck.length > unluckyCheck.length)
    var mediocreResult = (luckyCheck.length === unluckyCheck.length)
    if (unluckyResult) {
    $("#result").text("You have been very unlucky. Keep your family near, the time of reckoning is soon.");
    }
    else if (luckyResult) {
      $("#result").text("Luck is on your side. Feel safe to skydive or invest in the stock market.");
    }
    else if (mediocreResult) {
      $("#result").text("Your luck has been pretty even. Keep going through the motions with your fingers crossed for a good change in fortune.");
    }
  });
});
