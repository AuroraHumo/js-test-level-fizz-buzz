
let button = document.getElementById('btn')
let resultDiv = document.getElementById('result')
let historialDiv = document.getElementById('historial')
let historial = []

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

        createObject(input, result)

        historialDiv.innerHTML = historial
    }

function createObject(input, result){

        let numberActual = [input, result]
        historial.push(numberActual)
}

//try catch 