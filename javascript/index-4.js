let counterValue = 0;

const valueSpan = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');


function incrementCounter() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
}

function decrementCounter() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
