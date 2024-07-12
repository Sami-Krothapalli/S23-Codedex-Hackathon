document.addEventListener('DOMContentLoaded', function (){
    const buttons = document.querySelectorAll('.menu button');

    buttons.forEach( (button) => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView( {behavior : 'smooth'});
        })
    })
})


const unnecessaryClass = document.getElementsByClassName('card');
const invitation = unnecessaryClass[0];
  
  function displayInvitation (){
   const envelope =  document.getElementsByClassName('container')[0];
  envelope.remove();
  const letter = document.getElementsByClassName('letter')[0];
  letter.style.display = 'block';
  document.body.style.backgroundColor = '#9cf6fb';
 
}

function goToMap() {
    const map = document.getElementById('map');
    map.scrollIntoView({ behavior: 'smooth' });
}
const cardsContainer = document.querySelector(".container");




document.getElementById('shareButton').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: 'Scoop Sale Invitation',
            text: 'Description or text to share',
            url: 'http://127.0.0.1:5500/', // URL of the shared content
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Sharing failed', error));
    } else {
        console.log('Web Share API not supported.');
       
    }
});

function downloadQR() {
    var qrImage = new Image();
    qrImage.src = './assets/qrcode.png';
    var downloadLink = document.createElement('a');
    downloadLink.href = qrImage.src; 
    downloadLink.download = 'qr-code.png'; 
    downloadLink.style.display = 'none'; 

   
    document.body.appendChild(downloadLink);


    downloadLink.click();

  
    document.body.removeChild(downloadLink);
}


function showCalendar (){
    const eventDate = '20240820'; 
    const startTime = '100000'; 
    const endTime = '150000'; 
    const calendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=' +
                      eventDate + 'T' + startTime + 'Z/' + eventDate + 'T' + endTime + 'Z' +
                      '&text=Brooklyn%20Stoop%20Sale&location=Court%20Street%20and%202nd%20Ave';

    window.open(calendarUrl, '_blank');
}

