const input = document.querySelector('#validation-input')

input.addEventListener('blur', () => {
    // console.log(input.dataset.length);
    console.log(input.value.length);
    if (input.value.length >= input.dataset.length) {
        input.classList.remove('invalid')  
      input.classList.add('valid')  
    } else {
        input.classList.remove('valid')  
        input.classList.add('invalid') 
    }
})