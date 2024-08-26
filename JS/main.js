// Toggle class active search form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button-nav").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// Toggle Sidebar

const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger di klik muncul Side bar
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle Shopping Cart

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Ketika klik diluar hamburger maka sidebarnya hilang
const hamburger = document.querySelector("#hamburger-menu");
const sbox = document.querySelector("#search-button-nav");
const scart = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sbox.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  } 

  if (!scart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }

  // Contact Form terintegrasi dengan gmail
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url,{
      method: 'POST',
      body: formData,
      mode: "no-cors",
    }).then(() => {
      // url
      window.location.href='send_email.html';
    }).catch((e) => alert('error accurced'));
  });

  
});


