const unnecessaryClass = document.getElementsByClassName('card');
const invitation = unnecessaryClass[0];

  function displayInvitation (){
   const envelope =  document.getElementsByClassName('container')[0];
  envelope.remove();
  const newInvite = document.createElement('div');
  newInvite.textContent = 'Hello!';
  newInvite.classList = 'letter';

   document.body.appendChild(newInvite);
    console.log("It works!");
}