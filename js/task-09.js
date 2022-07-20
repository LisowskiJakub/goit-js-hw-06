function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const button = document.querySelector('button.change-color');
const colorHex = document.querySelector('span.color');

button.addEventListener('click',(e)=>{
 const color=getRandomHexColor();
 colorHex.textContent=color;
 body.style.backgroundColor=color;
})

