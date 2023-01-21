const botonDatos = document.querySelector('#procesar-datos')


botonDatos.onclick = function () {
    const edadUsuario = Number(document.querySelector('#edad').value)
    const primerNombre = document.querySelector('#primer-nombre').value
    const segundoNombre = document.querySelector('#segundo-nombre').value
    const datosObtenidos = `El nombre completo del usuario es ${primerNombre} ${segundoNombre} y tiene ${edadUsuario} años`
    document.querySelector('#datos-obtenidos').innerText = datosObtenidos
    const tituloPagina = document.querySelector('h1')
    tituloPagina.innerText = `Bienvenido ${primerNombre}!`
    return false
}






