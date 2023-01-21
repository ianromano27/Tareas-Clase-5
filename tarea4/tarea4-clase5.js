const botonDatos = document.querySelector('#procesar-numeros')


botonDatos.onclick = function () {
    const numerosLista = document.querySelectorAll('li')
    let arrayNumeros = []
    for (let i = 0; i < numerosLista.length; i++) {
        arrayNumeros.push(Number(numerosLista[i].innerText))
    }
    let promedio = calcularPromedio(arrayNumeros)
    document.querySelector('#promedio').innerText = promedio
    let menorNumero = obtenerMenor(arrayNumeros)
    document.querySelector('#menor').innerText = menorNumero
    let mayorNumero = obtenerMayor(arrayNumeros)
    document.querySelector('#mayor').innerText = mayorNumero
    let masRepetido = numeroRepetido(arrayNumeros)
    document.querySelector('#repetido').innerText = masRepetido
}




function calcularPromedio(arrayNumeros) {
    let acumulador = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        acumulador += arrayNumeros[i]
    }
    return acumulador / arrayNumeros.length
}

function obtenerMenor(arrayNumeros) {
    let numeroMenor = arrayNumeros[0]
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] < numeroMenor) {
            numeroMenor = arrayNumeros[i]
        }
    }
    return numeroMenor
}

function obtenerMayor(arrayNumeros) {
    let numeroMayor = arrayNumeros[0]
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > numeroMayor) {
            numeroMayor = arrayNumeros[i]
        }
    }
    return numeroMayor
}

function numeroRepetido(arrayNumeros) {
    let numRepetido = 0
    cantidadRepeticiones = 0

    for (let i = 0; i < arrayNumeros.length; i++) {
        let acumuladordeRepeticion = 0
        for (let x = 0; x < arrayNumeros.length; x++) {
            if (arrayNumeros[x] == arrayNumeros[i]) {
                acumuladordeRepeticion++
            }
        }
        if (acumuladordeRepeticion > cantidadRepeticiones) {
            numRepetido = arrayNumeros[i]
            cantidadRepeticiones = acumuladordeRepeticion
        }
    }
    if (cantidadRepeticiones == 1) { numRepetido = 'No hay numeros repetidos' }
    return numRepetido
}
