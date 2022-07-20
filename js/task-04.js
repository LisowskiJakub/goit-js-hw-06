let valueCounter = 0;
const incrementButton = document.querySelector(`button[data-action="increment"]`);
const decrementButton = document.querySelector(`button[data-action="decrement"]`)


incrementButton.addEventListener('click', () => {
    valueCounter++;
    document.querySelector('#value').innerText = valueCounter;
});
decrementButton.addEventListener('click', () => {
    valueCounter--;
    document.querySelector('#value').innerText = valueCounter;
});
