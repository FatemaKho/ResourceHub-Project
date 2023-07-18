 // Function to update the date and time display
 function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleString();
    dateTimeElement.textContent = formattedDate;
}

// Call the updateDateTime function initially and every second (1000ms)
updateDateTime();
setInterval(updateDateTime, 1000);