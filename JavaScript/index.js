export const navbar = `
  <nav class="navParent" id="navbar">
    <a href="index.html"> <img id="logo" src="./Images/logo.png" /></a>
    <a href="index.html" class="navItem">Home</a>
    <a href="shop.html" class="navItem">Shop</a>
    <a href="wholesale.html" class="navItem">Wholesale</a>
    <a href="ourStory.html" class="navItem">Our Story</a>
    <a href="#" class="navItem">Contact Us</a>
    <a href="account.html" class="navItem">Account</a>
    <!-- search icon -->
    <div class="container">
      <input
        placeholder="Type to search..."
        required=""
        class="input-search"
        name="text"
        type="text"
      />
      <div class="icon">
        <svg
          viewBox="0 0 512 512"
          class="ionicon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Search</title>
          <path
            stroke-width="32"
            stroke-miterlimit="10"
            stroke="currentColor"
            fill="none"
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          ></path>
          <path
            d="M338.29 338.29L448 448"
            stroke-width="32"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke="currentColor"
            fill="none"
          ></path>
        </svg>
      </div>
    </div>
  </nav>
`
document.getElementById('header').innerHTML=navbar;

export const footer = `
<p>
© 2023 Coffee Beans. All Rights Reserved.
<a href="Privacy Policy.html">Privacy Policy</a>
</p>`;
document.getElementById("footer").innerHTML = footer;
