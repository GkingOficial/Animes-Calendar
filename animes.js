let listOfLocalStorage = []
let animes = localStorage.getItem('Animes')
if (animes) {
  let listOfLocalStorage = JSON.parse(animes)

  listOfLocalStorage.forEach(anime => {
    let item = document.createElement('li')
    item.classList.add('anime')

    let shape = document.createElement('div')
    shape.classList.add('shape')

    let paragraph = document.createElement('p')
    paragraph.innerHTML = anime.name

    let image = document.createElement('img')
    image.src = anime.img
    image.alt = `Capa de ${anime.name}`
    image.classList.add('cover')

    shape.appendChild(paragraph)
    item.appendChild(image)
    item.appendChild(shape)

    document.querySelector('.animesList').appendChild(item)
  })
}
