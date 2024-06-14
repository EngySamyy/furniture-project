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

  let price = document.createElement("span");
  price.classList.add("price");
  price.innerHTML = element.price + " " + "$";

  let btn = document.createElement("button");
  btn.classList.add("addCart");
  btn.innerHTML.add = "<i class="fa-solid fa-cart-shopping"></i>";
  btn.onclick = function (){
    addToCart(element)
  };

  div.appendChild(image);
  div.appendChild(text);
  div.appendChild(price);
  div.appendChild(btn);

  return div;
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

