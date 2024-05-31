// ====== Navbar Scroll ======
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// function creatElement (elemnt) {
//     let div = document.createElement('div');
//     div.classList.add('listProduct');

//     let image = document.creatElement('img');
//     image.scr = "/images/chair1-removebg.png";
//     image.setAttribute('alt' , 'product_1');

//     let text = document.creatElement('h2');
//     text.classList.add('text-product');
//     text.innerHTML = "chair";

//     let btn = document.creatElement('button');
//     btn.classList.add('addCart')
//     btn.innerHTML = "add to cart";

//     div.appendChild(image)
//     div.appendChild(text)
//     div.appendChild(btn);

//     return div;
// }

// let container = document.getElementById("main-section");

// let newCard = creatCard();

{
  /* <div class="listProduct">
            <div class="item">
                <img src="images/chair1-removebg.png" alt="">
                <h2>chair</h2>
                <div class="price">50$</div>
                <button class="addCart">add to cart</button>
            </div>
        </div> */
}

fetch(
  "https://stylish-deer-64895ba9aa.strapiapp.com/api/products?populate=image"
)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((result) => {
    console.log(result);

    let data = result.data;
    let container = document.getElementById("main-section");

    data.forEach((element, index) => {
      element.attributes["id"] = element.id;
      element.attributes["image"] = element.attributes.image.data.attributes.url;
      let newCard = createCard(element.attributes);
      container.appendChild(newCard);
    });
  })
  .catch((error) => {
    console.log(error);
  });
