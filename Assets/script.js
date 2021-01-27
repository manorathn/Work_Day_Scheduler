// ## Acceptance Criteria

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// moment.js day & time


$(document).ready(function () {

  var date = moment().format('MMMM Do YYYY');
  $('#currentDay').html(date);

  // saveBtn click listener
  $('.saveBtn').on('click', function () {

    // Get nearby values of the description in JQuery
    var input = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');

    // Save text in local storage
    localStorage.setItem(hour, input);

  })

  // Gets items from local storage
  $("#8am .description").val(localStorage.getItem("8am"));
  console.log($("#8am .description").val(localStorage.getItem("8am")))

  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12pm .description").val(localStorage.getItem("12pm"));
  $("#1pm .description").val(localStorage.getItem("1pm"));
  $("#2pm .description").val(localStorage.getItem("2pm"));
  $("#3pm .description").val(localStorage.getItem("3pm"));
  $("#4pm .description").val(localStorage.getItem("4pm"));
  $("#5pm .description").val(localStorage.getItem("5pm"));

  // localStorage.clear();
});


// Change background of time-block to indicate present, future, past


var now = moment().hours();
// var now = 10;
function timeColor() {

  // $(".description").each(function () {
  // var hour = parseInt($(this).parent().attr('id'));
  for (var i = 8; i < 18; i++)

    if (i > now) {
      // $(".description").removeClass("present")
      $('#' + i).children('textarea').addClass("future")
      // $(".description").addClass("past")
    } else if (i < now) {
      // $(".description").removeClass("past")
      // $(".description").removeClass("future")
      // $(".description").addClass("past")
      $('#' + i).children('textarea').addClass("past")
    }
    else if (i === now) {
      // $(".description").removeClass("past")
      // $(".description").addClass("present")
      // $(".description").addClass("future")
      $('#' + i).children('textarea').addClass("present")
    }
}
timeColor();
  // parseInt(hour);
    // var hour = 12;
    // var { hour, currentHour } = timeBlockColor();
  // var now = 12;
