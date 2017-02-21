//Back-end logic
var unluckyResult = (unluckyCheck.length > luckyCheck.length)
var luckyResult = (luckyCheck.length > unluckyCheck.length)
var mediocreResult = (luckyCheck.length === unluckyCheck.length)

//Front-end logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
  });
});
