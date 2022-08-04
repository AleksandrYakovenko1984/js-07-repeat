const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', () => {
console.log(input.value);
input.value === ''?output.textContent = 'незнакомец': output.textContent = input.value
})