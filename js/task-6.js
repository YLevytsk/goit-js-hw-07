
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


function createBoxes(amount) {
  
  const fragment = document.createDocumentFragment();
  
  
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    
   
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    
   
    div.style.backgroundColor = getRandomHexColor();
    
   
    fragment.appendChild(div);
  }

  
  boxesContainer.innerHTML = ''; 
  boxesContainer.appendChild(fragment); 
}


function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}


createButton.addEventListener('click', () => {
  const amount = Number(input.value);

  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); 
  } else {
    alert('Please enter a number between 1 and 100');
  }

  input.value = ''; 
});


destroyButton.addEventListener('click', destroyBoxes);
