// let place

//Обращаемся к  JSON файлу
// let requestURL = 'https://lashkevi4.github.io/project2/data.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function () {
//   place = request.response;
//   console.log(place);
// }

// создаем новую функцию для кнопки SEARCH
function find() {
  let cityNumber = document.search_panel.city.selectedIndex
  let city = document.search_panel.city.options[cityNumber].value
  let adults = document.search_panel.adults.value
  let children = document.search_panel.children.value
  let infants = document.search_panel.infants.value
  console.log(city, adults, children, infants)


  //Обращаемся к  JSON файлу
  let requestURL = 'https://lashkevi4.github.io/project2/data.json';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    let place = request.response;
    console.log(place);
  }



  // console.log(place);

  city = "NewYork"
  place = "Avenue Street"
  description = "Good place"
  photos = ["img/cities/mikkeli/place1/001.webp"]
  kitchen = 1
  living = 1
  bedroom = 2
  balcony = true
  sauna = true
  wc = 2
  swimming_pool = true
  wifi = true
  cam = true
  deposit = true
  bicycle = true
  animal = true
  bed = 1
  price = 101
  let variants = new Variant(city, place, description, photos, kitchen, living, bedroom, balcony, sauna, wc, swimming_pool, wifi, cam, deposit, bicycle, animal, bed, price)

  variants.card()
}

class Variant {
  constructor(city, place, description, photos, kitchen, living, bedroom, balcony, sauna, wc, swimming_pool, wifi, cam, deposit, bicycle, animal, bed, price) {
    this.city = city
    this.place = place
    this.description = description
    this.photos = photos
    this.kitchen = kitchen
    this.living = living
    this.bedroom = bedroom
    this.balcony = balcony
    this.sauna = sauna
    this.wc = wc
    this.swimming_pool = swimming_pool
    this.wifi = wifi
    this.cam = cam
    this.deposit = deposit
    this.bicycle = bicycle
    this.animal = animal
    this.bed = bed
    this.price = price
  }

  card() {
    let main = document.querySelector("main")

    let section = document.createElement("section")
    main.appendChild(section)

    let figure = document.createElement("figure")
    section.appendChild(figure)

    let img = document.createElement("img")
    figure.appendChild(img)
    img.src = this.photos[0]

    let h1 = document.createElement("h1")
    section.appendChild(h1)
    h1.innerHTML = this.city + ", " + this.place

    let p = document.createElement("p")
    section.appendChild(p)
    p.classList.add("discription")
    p.innerHTML = this.description

    p = document.createElement("p")
    section.appendChild(p)
    p.classList.add("bed")
    p.innerHTML = this.bed + " bed"

    p = document.createElement("p")
    section.appendChild(p)
    p.classList.add("price")
    p.innerHTML = "€ " + this.price

    let span = document.createElement("span")
    p.appendChild(span)
    span.innerHTML = "/ night"
  }
}



// function writePlace(jsonPlace) {
//   var header = document.querySelector('header');

//   for (let i = 0; i < jsonPlace.length; i++) {
//     card = document.createElement('div');
//     H1 = document.createElement('h1');
//     H1.textContent = jsonPlace[i]['name'] + " " + jsonPlace[i]['surname'];
//     header.appendChild(card);
//     card.appendChild(H1);
