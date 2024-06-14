function createCard(element) {
  let div = document.createElement("div");
  div.classList.add("listProduct");

  console.log(element);
  let image = document.createElement("img");
  image.src = element.image;
  image.setAttribute("alt", "product_1");

  let text = document.createElement("h2");
  text.classList.add("text-product");
  text.innerHTML = element.title ;

  let info = document.createElement("p");
  info.classList.add("info");
  info.innerHTML = "descriptiob product";

  let price = document.createElement("span");
  price.classList.add("price");
  price.innerHTML = element.price + " " + "$";

  let rate = document.createElement("span");
  rate.classList.add("rate")
  rate.innerHTML = '<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>'

  let btn = document.createElement("button");
  btn.classList.add("addCart");
  btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
  btn.onclick = function (){
    addToCart(element)
  };

  div.appendChild(image);
  div.appendChild(text);
  div.appendChild(info);
  div.appendChild(price);
  div.appendChild(rate);
  price.appendChild(btn);
  

  return div;
}

function categoryCards (category) {
  let sectionCategory = document.createElement("section");
  sectionCategory.classList.add("category");

  console.log(category);
  let categoryDiv = document.createElement("div");
  categoryDiv.classList.add("cat-icons");
  // categoryDiv.innerHTML = '<i class="fa-solid fa-bed"></i>';

  let btnIcon = document.createElement("button");
  btnIcon
  btnIcon.innerHTML = '<i class="fa-solid fa-bed"></i>'


  sectionCategory.appendChild(categoryDiv);
  categoryDiv.appendChild(btnIcon);

  return sectionCategory;
}


function addToCart (element) {
  
  if(!localStorage.getItem('cards')){
    let cards= [];
    localStorage.setItem('cards' , JSON.stringify(cards));
  }
  let cards = JSON.parse(localStorage.getItem('cards'));
  cards.push(element);

  localStorage.setItem('cards', JSON.stringify(cards));
}

// let cards = JSON.parse(localStorage.getItem(cards));


let container = document.getElementById("main-section");
container.classList.add("card-group");

