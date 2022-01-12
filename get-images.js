let url = 'https://customsearch.googleapis.com/customsearch/v1?'
let key = 'key=AIzaSyBHbF6ychO-WzUYjuc0oU-jAC7zIov-fcM'
let search = '&cx=8199ad216d7844fa0'
let more = '&num=1&imgSize=huge&image&searchType=image'
let query = '&q=shingeki-no-kyojin'

let t =
  'https://customsearch.googleapis.com/customsearch/v1?key=AIzaSyBHbF6ychO-WzUYjuc0oU-jAC7zIov-fcM&cx=8199ad216d7844fa0&num=1&imgSize=huge&searchType=image&q=shingeki-no-kyojin&callback=hnldr'

console.log(document.querySelector('.image-search'))

function hndlr(response) {
  console.log(response)
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i]
    // in production code, item.htmlTitle should have the HTML entities escaped.
    document.getElementById('test').innerHTML += '<br>' + item.htmlTitle
  }
}
