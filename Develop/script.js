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

// Date
var date = moment().format('MMMM Do YYYY, h:mm a');
$('#currentDay').html(date);

$(document).ready(function () {

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
  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12pm .description").val(localStorage.getItem("12pm"));
  $("#13pm .description").val(localStorage.getItem("13pm"));
  $("#14pm .description").val(localStorage.getItem("14pm"));
  $("#15pm .description").val(localStorage.getItem("15pm"));
  $("#16pm .description").val(localStorage.getItem("16pm"));
  $("#17pm .description").val(localStorage.getItem("17pm"));

});
