$(document).ready(function() {
    // Display the current day at the top of the calendar
    $("#currentDay").text(dayjs().format('MMMM D, YYYY'));

  // Create timeblocks for standard business hours (9AM to 5PM)
for (let hour = 9; hour <= 22; hour++) {
    let row = $("<div>").addClass("row time-block");
    let timeCol = $("<div>").addClass("col-1 hour").text(dayjs().hour(hour).format('h A')).attr('data-hour', hour);
    let eventCol = $("<textarea>").addClass("col-10 description");
    let saveBtn = $("<button>").addClass("col-1 saveBtn").html('<i class="fas fa-save"></i>');
}

})
    