
let button = document.getElementById('btn')
let resultDiv = document.getElementById('result')

//events

button.addEventListener("click", validacion)

function validacion() {
    
        let input = document.getElementById('input').value
        let numero = parseInt(input)
        let result = ''
        
        if (isNaN(numero)) {
            result = 'No se ha introducido un número';
        } else if (numero % 3 === 0 && numero % 5 === 0) {
            result = 'FizzBuzz';
        } else if (numero % 3 === 0) {
            result = 'Fizz';
        } else if (numero % 5 === 0) {
            result = 'Buzz';
        } else {
            result = numero;
        }

        resultDiv.innerHTML = result
    }


function createObject(){

        let historial = {}
        let numberActual = [input.value, result]
}