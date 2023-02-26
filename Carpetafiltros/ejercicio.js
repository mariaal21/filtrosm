

const filtros = document.querySelector('.filtroBoton')
const fotos = document.querySelector('.foto')


filtros.forEach(filtro => {
    filtro.addEvenListener('click', () => {
        filtros.forEach(filtro => filtro.classList.remove('active'))
        filtro.classList.add('active')

        const filtroSeleccionado =filtro.getAttribute('data-filtro')

        fotos.forEach(foto => {
            const tags = foto.getAttribute('data-tags'.split(''))
            if(filtroSeleccionado == 'todos' || tags.includes(filtroSeleccionado)){
                foto = true 
            } else {
                foto = none
            }

        })
    })
});