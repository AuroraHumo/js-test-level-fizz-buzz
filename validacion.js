let input = document.getElementById('input')
let button = document.getElementById('btn')
let result = document.getElementById('result')

//events

button.addEventListener("click", function() {

    try {
        let numero = parseInt(input.value)
        if (numero % 3 === 0 && numero % 5 === 0) {
            result.innerHTML = 'FizzBuzz'
            return
        }
        if (numero % 3 == 0) {
            result.innerHTML = 'Fizz'
            return
        }
        if (numero % 5 == 0) {
            result.innerHTML = 'Buzz'
            return
        } else {
            if(numero) result.innerHTML = numero
        }
    } catch (error) {
        if(isNaN(numero)){
            result.innerHTML = 'No se ha introducido un numero'
    }
    
}})