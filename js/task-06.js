const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', e => {
    if (textInput.getAttribute('data-length') == e.target.value.length) {
        textInput.classList.add('valid'); 
        textInput.classList.remove('invalid');
    }
    else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
})
