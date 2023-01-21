const botonDatos = document.querySelector('#procesar-datos')


botonDatos.onclick = function () {
    const segClase1 = Number(document.querySelector('#segundos-clase-1').value)
    const segClase2 = Number(document.querySelector('#segundos-clase-2').value)
    const segClase3 = Number(document.querySelector('#segundos-clase-3').value)
    const segClase4 = Number(document.querySelector('#segundos-clase-4').value)
    const segClase5 = Number(document.querySelector('#segundos-clase-5').value)
    let totalSeg = segClase1 + segClase2 + segClase3 + segClase4 + segClase5

    const minClase1 = Number(document.querySelector('#minutos-clase-1').value)
    const minClase2 = Number(document.querySelector('#minutos-clase-2').value)
    const minClase3 = Number(document.querySelector('#minutos-clase-3').value)
    const minClase4 = Number(document.querySelector('#minutos-clase-4').value)
    const minClase5 = Number(document.querySelector('#minutos-clase-5').value)
    const totalMin = minClase1 + minClase2 + minClase3 + minClase4 + minClase5

    const hsClase1 = Number(document.querySelector('#horas-clase-1').value)
    const hsClase2 = Number(document.querySelector('#horas-clase-2').value)
    const hsClase3 = Number(document.querySelector('#horas-clase-3').value)
    const hsClase4 = Number(document.querySelector('#horas-clase-4').value)
    const hsClase5 = Number(document.querySelector('#horas-clase-5').value)
    const totalHs = hsClase1 + hsClase2 + hsClase3 + hsClase4 + hsClase5

    let finalSegundos = totalSeg
    let finalMinutos = totalMin
    let finalHoras = totalHs
    while (finalSegundos >= 60) {
        finalSegundos = finalSegundos - 60
        finalMinutos = finalMinutos + 1
    }
    while (finalMinutos >= 60) {
        finalMinutos = finalMinutos - 60
        finalHoras = finalHoras + 1
    }
    console.log(finalHoras)
    console.log(finalMinutos)
    console.log(finalSegundos)







    let datosObtenidos
    if (finalHoras > 0) {
        datosObtenidos = `Las clases tuvieron un total de ${finalHoras} horas`
    }
    if (finalMinutos > 0) {
        datosObtenidos = datosObtenidos + ` con ${finalMinutos} Minutos`
    }
    if (finalSegundos > 0) {
        datosObtenidos = datosObtenidos + ` y ${finalSegundos} Segundos`
    }
    document.querySelector('#duracion').innerText = datosObtenidos
    return false
}


