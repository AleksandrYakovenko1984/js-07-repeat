const input = document.querySelector('#font-size-control')
const data = document.querySelector('#text')

input.addEventListener('input', onInputChange )

function onInputChange(event) {
    console.log(event.currentTarget.value);
    console.log(event.target);
    if (event.target !== event.currentTarget.value) {
        data.setAttribute("style", `font-size: ${event.currentTarget.value}px`)
    }
 } 