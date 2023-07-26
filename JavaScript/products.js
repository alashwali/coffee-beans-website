const products = [
  {
    id: 1,
    img: "Images//product1.png",
    name: "Original Blend Ground Coffee Canister",
    price: 30,
  },
  {
    id: 2,
    img: "Images//product2.png",
    name: "Original Blend Ground Coffee Canister",
    price: 49,
  },
  {
    id: 3,
    img: "Images//product3.png",
    name: "Dunkin' Decaf Ground Coffee",
    price: 30,
  },
  {
    id: 4,
    img: "Images//product1.png",
    name: "Dunkin' Espresso-Style Extra Dark Roast Coffee",
    price: 21,
  },
];
let container = document.querySelector(".product-row");

// loop for  displaying all the products in html page
function init2() {
  for (let index = 0; index < 4; index++) {
    products.forEach((element) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML = `<div class="card">
              <a href="single product.html">
                <div class="imgBox">
                  <img src="${element.img}" />
                </div>
                <div class="contentBox">
                  <h3>${element.name}</h3>
                  <h2 class="price">${element.price}$</h2>
                  <a href="#" class="buy">Buy Now</a>
                </div>
              </a>
            </div>`;
      container.appendChild(newDiv);
    });
  }
}
let loader = document.getElementById("loader");
function doSomething(callback) {
  loader.innerHTML = `
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
 `;
  setTimeout(function () {
    loader.style.visibility = "hidden"; // to hidden loader svg
    loader.style.margin = 0;
    callback();
  }, 3000);
}
function doSomethingElse() {
  init2(); //call
}
doSomething(doSomethingElse);

