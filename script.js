// -------------------------------------change color-------------------------------
const bdy = document.getElementById("body");
const btn = document.getElementById("change-color");

btn.addEventListener('click', () => {
  bdy.classList.toggle("black");
  btn.classList.toggle("btn-white");
});

// ---------------------------------------sign in / logout-------------------------
const slider = document.querySelector("#slider");
const show = document.querySelector("#show");
const slid = document.querySelector("#slid");
const bar = document.querySelectorAll("#show a");
const sign_in = document.getElementById("sign-in");
const log_out = document.getElementById("log-out");

function closeMenu() {
  bar.forEach(item => {
    item.addEventListener("click", () => {
      show.style.display = "none";
      slid.style.display = "none";
      slider.style.display = "inline";
    });
  });
}

slider.addEventListener('click', () => {
  show.style.display = "inline";
  slider.style.display = "none";
  slid.style.display = "inline";
  closeMenu();
});

slid.addEventListener("click", () => {
  slid.style.display = "none";
  slider.style.display = "inline";
  show.style.display = "none";
});

// Handle login status
if (localStorage.getItem("login")) {
  sign_in.style.display = "none";
  log_out.style.display = "block";
}

log_out.addEventListener('click', () => {
  const input = prompt("If you logout, account will be deleted permanently. Type 'y' to confirm.");

  if (input && input.toLowerCase() === "y") {
    localStorage.removeItem("login");
    localStorage.removeItem("eml");
    localStorage.removeItem("passs");
    localStorage.removeItem("accountCreated");
    log_out.style.display = "none";
    sign_in.style.display = "inline";
    alert("Account deleted successfully");
  } else if (input && input.toLowerCase() === "n") {
    alert("Account deletion canceled");
  } else {
    alert("Invalid operation");
  }
});

// -------------------------------------slide review-------------------------------
const reviews = document.querySelectorAll(".review-1, .review-2, .review-3");
let currentReview = 0;

function showReview(index) {
  reviews.forEach(r => r.style.display = "none");
  reviews[index].style.display = "block";
}

document.querySelector(".review").addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-arrow-right")) {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
  }
  if (e.target.classList.contains("fa-arrow-left")) {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
  }
});

showReview(currentReview);

// -------------------------------------bag/cart logic-----------------------------
const bag = document.getElementById("bag");
const bag_container = document.getElementById("bag_continer");
const close_bag = document.getElementById("close_bag");
const menulist = document.getElementById("menu-list");
const totalEl = document.querySelector("#total_price");

let cart = []; // array of {product, count}

// Show/hide bag
bag.addEventListener('click', () => {
  bag_container.style.display = "block";
});
close_bag.addEventListener('click', () => {
  bag_container.style.display = "none";
});

// Recalculate total
function recalcTotal() {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.count, 0);
  totalEl.textContent = total.toFixed(2);
}

// Render cart items
function renderCart() {
  const cartList = document.querySelector(".list");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const bagdiv = document.createElement("div");
    bagdiv.classList.add("list-card");

    bagdiv.innerHTML = `
      <div class="list-img">
        <img src="${item.product.image}">
      </div>
      <div class="list-about">
        <h4>
          ${item.product.name}<br>
          <span class="priceplus">$${(item.product.price * item.count).toFixed(2)}</span>
        </h4>
      </div>
      <div class="action">
        <i class="fa-solid fa-minus decrement"></i>
        <h4 class="count">${item.count}</h4>
        <i class="fa-solid fa-plus increment"></i>
      </div>
    `;

    const decrease = bagdiv.querySelector(".decrement");
    const increase = bagdiv.querySelector(".increment");
    const countEl = bagdiv.querySelector(".count");
    const priceEl = bagdiv.querySelector(".priceplus");

    increase.addEventListener("click", () => {
      item.count++;
      countEl.textContent = item.count;
      priceEl.textContent = `$${(item.product.price * item.count).toFixed(2)}`;
      recalcTotal();
    });

    decrease.addEventListener("click", () => {
      item.count--;
      if (item.count <= 0) {
        cart.splice(index, 1); // remove item from cart
      }
      renderCart();
      recalcTotal();
    });

    cartList.appendChild(bagdiv);
  });

  recalcTotal();
}

// Add product to cart
function addToCart(product) {
  const existing = cart.find(item => item.product.name === product.name);
  if (existing) {
    existing.count++;
  } else {
    cart.push({ product, count: 1 });
  }
  renderCart();
}

// -------------------------------------show products-----------------------------
let bag_val = 0;
let products = [];

function showcard() {
  menulist.innerHTML = "";
  products.forEach(product => {
    const ordercard = document.createElement('div');
    ordercard.classList.add("item");
     bag_val = bag_val +1;
    ordercard.innerHTML = `
      <div class="item-image">
        <img src="${product.image}">
      </div>
      <h4>${product.name}</h4>
      <h4>$${product.price}</h4>
      <button class="btn add-to-cart">Add to Cart</button>
    `;

    ordercard.querySelector(".add-to-cart").addEventListener("click", (e) => {
        e.preventDefault();
               bag_val++;
        document.querySelector(".bag-value").innerHTML = bag_val;
        alert(`Item ${product.name} successfully added to the bag`);
        addToCart(product);
      });

    menulist.appendChild(ordercard);
  });
}

// Fetch products
function initial() {
  fetch('list.json')
    .then(res => res.json())
    .then(data => {
      products = data.map(p => ({ ...p, price: Number(p.price) }));
      showcard();
    });
}

initial();
