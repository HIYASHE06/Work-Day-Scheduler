$(document).ready(function() {
    // Display the current day at the top of the calendar
    $("#currentDay").text(dayjs().format('MMMM D, YYYY'));

  // Create timeblocks for standard business hours (9AM to 5PM)
for (let hour = 9; hour <= 17; hour++) {
    let row = $("<div>").addClass("row time-block");
    let timeCol = $("<div>").addClass("col-1 hour").text(dayjs().hour(hour).format('h A')).attr('data-hour', hour);
    let eventCol = $("<textarea>").addClass("col-10 description");
    let saveBtn = $("<button>").addClass("col-1 saveBtn").html('<i class="fas fa-save"></i>');

    // Load events from local storage
    eventCol.val(localStorage.getItem(hour));

    // Color-code each timeblock based on past, present, and future
    if (dayjs().hour() > hour) {
        eventCol.addClass("past");
    } else if (dayjs().hour() === hour) {
        eventCol.addClass("present");
    } else {
        eventCol.addClass("future");
    }

    // Append timeblocks to the container
    row.append(timeCol, eventCol, saveBtn);
    $(".container").append(row);
}
// Save the event in local storage when the save button is clicked
$(".saveBtn").on("click", function() {
    let hour = $(this).siblings(".hour").data('hour');
    let event = $(this).siblings(".description").val();
    localStorage.setItem(hour, event);
});
})
    