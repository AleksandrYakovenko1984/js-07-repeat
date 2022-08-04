const btnMinus = document.querySelector('[data-action="decrement"]')
const btnPlus = document.querySelector('[data-action="increment"]')
const data = document.querySelector('#value')

function getCount() {
    let count = 0
    function dec() {
      return  (count -= 1)
    }
    function inc() {
     return (count += 1)

    } 
    return {dec, inc}
}

const x = getCount()

btnMinus.addEventListener('click', () => {
    console.log('click');
    let result = x.dec()
    data.textContent = result
   console.log(result); 
})

btnPlus.addEventListener('click', () => {
    console.log('click');
    let result = x.inc()
    data.textContent = result
    console.log(result);
})