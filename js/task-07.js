const sizeValue=document.querySelector('input#font-size-control');
const textOutput=document.querySelector('span#text');

sizeValue.addEventListener('input',e=>{
    textOutput.style.fontSize=`${e.target.value}px`;
})