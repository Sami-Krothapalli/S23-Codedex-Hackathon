// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons within the menu
    const buttons = document.querySelectorAll('.menu button');

    // Add click event listener to each button
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Get the target section ID from the button's data attribute
            const targetId = button.getAttribute('data-target');
            // Get the target element by ID
            const targetElement = document.getElementById(targetId);
            // Scroll smoothly to the target element
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Select the first element with class 'card'
const unnecessaryClass = document.getElementsByClassName('card');
const invitation = unnecessaryClass[0];

// Function to display the invitation
function displayInvitation() {
    // Remove the envelope container
    const envelope = document.getElementsByClassName('container')[0];
    envelope.remove();
    // Show the letter and change the background color
    const letter = document.getElementsByClassName('letter')[0];
    letter.style.display = 'block';
    document.body.style.backgroundColor = '#9cf6fb';
}

// Function to scroll to the map section
function goToMap() {
    const map = document.getElementById('map');
    map.scrollIntoView({ behavior: 'smooth' });
}

// Select the container element
const cardsContainer = document.querySelector(".container");

// Add click event listener to the share button
document.getElementById('shareButton').addEventListener('click', function () {
    if (navigator.share) {
        // Use Web Share API to share event details
        navigator.share({
            title: 'Scoop Sale Invitation',
            text: 'Description or text to share',
            url: 'https://brooklynstoopsale.vercel.app/', // URL of the shared content
        })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Sharing failed', error));
    } else {
        console.log('Web Share API not supported.');
    }
});

// Function to download the QR code image
function downloadQR() {
    var qrImage = new Image();
    qrImage.src = './assets/Brooklyn Stoop Sale.png';
    var downloadLink = document.createElement('a');
    downloadLink.href = qrImage.src;
    downloadLink.download = 'qr-code.png';
    downloadLink.style.display = 'none';

    // Append the download link to the body and trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Function to open Google Calendar with event details
function showCalendar() {
    const eventDate = '20240820';
    const startTime = '100000';
    const endTime = '150000';
    const calendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=' +
        eventDate + 'T' + startTime + 'Z/' + eventDate + 'T' + endTime + 'Z' +
        '&text=Brooklyn%20Stoop%20Sale&location=Court%20Street%20and%202nd%20Ave';

    window.open(calendarUrl, '_blank');
}
