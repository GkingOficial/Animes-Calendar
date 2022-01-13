//localStorage.clear()
let animeInput = document.getElementById('input-text')
let imageInput = document.getElementById('input-image')
let state = document.getElementById('states')
let day = document.getElementById('days')

let ul = document.querySelector('.list')

let listToSend = []

async function getList(array) {
  let animesListJson = JSON.parse(array)

  animesListJson.forEach(anime => {
    listToSend.push(anime)

    let li = document.createElement('li')
    li.classList.add('anime')

    let p = document.createElement('p')
    p.innerHTML = anime.name

    let button = document.createElement('input')
    button.type = 'button'
    button.value = 'x'
    button.id = anime.name
    button.addEventListener('click', function () {
      remove(button.id)
    })

    li.appendChild(p)
    li.appendChild(button)
    ul.appendChild(li)
  })
}

function update() {
  let animesLocalStorage = localStorage.getItem('Animes')
  if (animesLocalStorage) {
    getList(animesLocalStorage)
  }
}

function showDays() {
  day.style.display = state.value == 'new' ? 'inline-block' : 'none'
}

function add() {
  if (animeInput.value == '') {
    alert('Digite o nome do anime!')
  } else {
    let list = [
      {
        name: animeInput.value,
        day: day.value,
        img: imageInput.value,
        state: state.value == 'new' ? state.value : 'finished'
      }
    ]

    getList(JSON.stringify(list))
    animeInput.value = ''
    imageInput.value = ''
  }
}

function remove(id) {
  let parent = document.getElementById(id).parentNode

  listToSend.forEach(function (element, index) {
    if (element.name === parent.querySelector('p').innerHTML) {
      listToSend.splice(index, 1)
    }
  })

  ul.removeChild(parent)
}

function save() {
  localStorage.removeItem('Animes')
  localStorage.setItem('Animes', JSON.stringify(listToSend))
}

function clearAll() {
  listToSend = []
  save()
  ul.childNodes.forEach(son => {
    ul.removeChild(son)
  })
}

update()
