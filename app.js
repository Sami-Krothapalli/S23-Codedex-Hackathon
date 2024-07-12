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
  

   document.body.appendChild(newInvite);
    console.log("It works!");
}

