export let product;
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
products.forEach((element) => {
  product = document.getElementById("container").insertAdjacentHTML(
    "afterend",
    `<div class="card">
        <a href="single product.html">
          <div class="imgBox">
            <img src="${element.img}" />
          </div>
          <div class="contentBox">
            <h3>${element.name}</h3>
            <h2 class="price">${element.price}</h2>
            <a href="#" class="buy">Buy Now</a>
          </div>
        </a>
      </div>`
  );
});
