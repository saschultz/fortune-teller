//Back-end logic
var unluckyResult = (unluckyCheck.length > luckyCheck.length)
var luckyResult = (luckyCheck.length > unluckyCheck.length)
var mediocreResult = (luckyCheck.length === unluckyCheck.length)
var unluckyCheck = [];
var luckyCheck = [];

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
  });
});
