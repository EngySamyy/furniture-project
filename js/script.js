// ====== Navbar Scroll ======
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});



// fetch(
//   "https://stylish-deer-64895ba9aa.strapiapp.com/api/products?populate=image"
// )
  // .then((res) => {
  //   console.log(res);
  //   return res.json();
  // })
  // .then((result) => {
  //   console.log(result);

  //   let data = result.data;
  //   let container = document.getElementById("main-section");

  //   data.forEach((element, index) => {
  //     element.attributes["id"] = element.id;
  //     element.attributes["image"] = element.attributes.image.data.attributes.url;
  //     let newCard = createCard(element.attributes);
  //     container.appendChild(newCard);
  //   });
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
