//localStorage.clear()
let animeInput = document.getElementById('input-text')
let imageInput = document.getElementById('input-image')
let state = document.getElementById('states')
let day = document.getElementById('days')

//get list
let ul = document.querySelector('.list')

let listToSend = []

//get image
let url =
  'https://customsearch.googleapis.com/customsearch/v1?key=AIzaSyBHbF6ychO-WzUYjuc0oU-jAC7zIov-fcM&cx=8199ad216d7844fa0&num=1&imgSize=huge&searchType=image'
var xhttp = new XMLHttpRequest()

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

function searchImage(query) {
  xhttp.open('GET', url + '&q=' + query, false)
  xhttp.send()

  return JSON.parse(xhttp.response).items[0].link
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
        img: searchImage(animeInput.value),
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
  ul.innerHTML = ''
}

update()
