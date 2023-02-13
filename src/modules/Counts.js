export const Counts = () => {
    let countDecrement = document.querySelectorAll('.count-decrement');
    let countIncrement = document.querySelectorAll('.count-increment');
  
    countDecrement.forEach(decrement => decrement.addEventListener('click', function() {
        if(decrement.nextElementSibling.innerHTML > 0) {
          decrement.nextElementSibling.innerHTML--
        }
    }))
    countIncrement.forEach(decrement => decrement.addEventListener('click', function() {
        decrement.previousElementSibling.innerHTML++
    }))
}