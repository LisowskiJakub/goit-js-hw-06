const form=document.querySelector('.login-form');

form.addEventListener('submit',(e)=>{
e.preventDefault();

    const {
        elements: {password , email }
      } = e.currentTarget;
    if(password.value=='' || email.value==''){
       return alert('Uzupełnij wszystkie pola');
    }
const elements={password:password.value, email:email.value};
console.log(elements);
e.currentTarget.reset();


});



