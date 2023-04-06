$(document).ready(function() {
  $("#hour-9 .description").val(localStorage.getItem('hour-9'));
  $("#hour-10 .description").val(localStorage.getItem('hour-10'));
  $("#hour-11 .description").val(localStorage.getItem('hour-11'));
  $("#hour-12 .description").val(localStorage.getItem('hour-12'));
  $("#hour-13 .description").val(localStorage.getItem('hour-13'));
  $("#hour-14 .description").val(localStorage.getItem('hour-14'));
  $("#hour-15 .description").val(localStorage.getItem('hour-15'));
  $("#hour-16 .description").val(localStorage.getItem('hour-16'));
  $("#hour-17 .description").val(localStorage.getItem('hour-17'));
});
console.log("Page loaded");

$(".saveBtn").on("click", function(event){
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});

function hourUpdater() {
  var currentTime = moment().hours();
  $(".time-block").each(function(){
      var block = parseInt($(this).attr("id").split("-")[1]);
      if(block < currentTime) {
          $(this).addClass("past");
      } else if (block === currentTime) {
          $(this).removeClass("past");
          $(this).addClass("present");
      } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
      }        
  });
}
hourUpdater();


var interval = setInterval(hourUpdater, 15000);

$("#hour-9 .description").val(localStorage.getItem('hour-9'));
$("#hour-10 .description").val(localStorage.getItem('hour-10'));
$("#hour-11 .description").val(localStorage.getItem('hour-11'));
$("#hour-12 .description").val(localStorage.getItem('hour-12'));
$("#hour-13 .description").val(localStorage.getItem('hour-13'));
$("#hour-14 .description").val(localStorage.getItem('hour-14'));
$("#hour-15 .description").val(localStorage.getItem('hour-15'));
$("#hour-16 .description").val(localStorage.getItem('hour-16'));
$("#hour-17 .description").val(localStorage.getItem('hour-17'));


$("#currentDay").text(moment().format('MMMM Do, YYYY'));