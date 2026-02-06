
// -------------------------------------change color-------------------------------
let bdy = document.getElementById("body");
let btn = document.getElementById("change-color");

btn.addEventListener('click', () => {
  bdy.classList.toggle("black");
  btn.classList.toggle("btn-white");
});


// ---------------------------------------for sign in button---------------------------------

let slider = document.querySelector("#slider");
let show = document.querySelector("#show");
let slid = document.querySelector("#slid");
let bar = document.querySelectorAll("#show a")

function close() {
  bar.forEach(item => {
    item.addEventListener("click", () => {
      show.style.display = "none";
      slid.style.display = "none";
      slider.style.display = "inline";
    });
  })
}

slider.addEventListener('click', () => {
  show.style.display = "inline";
  slider.style.display = "none";
  slid.style.display = "inline";
  close();
});

slid.addEventListener("click", () => {
  slid.style.display = "none";
  slider.style.display = "inline";
  show.style.display = "none";
});



//  ----------------------------------------------slide review-----------------------------------
const reviews = document.querySelectorAll(
  ".review-1, .review-2, .review-3"
);

let currentReview = 0;
function showReview(index) {
  reviews.forEach(r => r.style.display = "none");
  reviews[index].style.display = "block";
}


document.querySelector(".review").addEventListener("click", (e) => {

  if (e.target.classList.contains("fa-arrow-right")) {
    currentReview++;
    if (currentReview >= reviews.length) {
      currentReview = 0;

    }
    showReview(currentReview);
  }

  if (e.target.classList.contains("fa-arrow-left")) {
    currentReview--;
    if (currentReview < 0) {
      currentReview = reviews.length - 1;
    }
    showReview(currentReview);
  }
});

showReview(currentReview);

let sign_in = document.getElementById("sign-in");
let log_out = document.getElementById("log-out");

if (localStorage.getItem("login")) {
  sign_in.style.display = "none";
  log_out.style.display = "block";
}



log_out.addEventListener('click', () => {
  let input = prompt("If you logout, account will be deleted permantely 'y' for deleted")

  if (input.toLocaleLowerCase() === "y") {
    localStorage.removeItem("login");
    log_out.style.display = "none";
    sign_in.style.display = "inline";
    localStorage.removeItem("eml");
    localStorage.removeItem("passs");
    localStorage.removeItem("accountCreated");
    alert("Account deleted Sucessfully");
  } else if (input.valueOf === "n") {
    alert("account delection cancled");
  } else {
    alert("Invalid Operation");
  }

});


let bag = document.getElementById("bag");
let bag_continer = document.getElementById("bag_continer");
let close_bag = document.getElementById("close_bag");
let menulist = document.getElementById("menu-list")

bag.addEventListener('click', () => {
  bag_continer.style.display = "block";
});

close_bag.addEventListener('click', () => {
  bag_continer.style.display = "none";
});

const showBag = (product) => {
  let count = 1;
  let price = Number(product.price); // ✅ convert once

  const bagdiv = document.createElement("div");
  const cartList = document.querySelector(".list");

  bagdiv.classList.add("list-card");

  bagdiv.innerHTML = `
    <div class="list-img">
      <img src="${product.image}">
    </div>

    <div class="list-about">
      <h4>
        ${product.name}<br>
        <span class="priceplus">$${price}</span>
      </h4>
    </div>

    <div class="action">
      <i class="fa-solid fa-minus decrement"></i>
      <h4 class="count">${count}</h4>
      <i class="fa-solid fa-plus increment"></i>
    </div>
  `;

  const totalEl = document.querySelector("#total_price");
  let total = Number(totalEl.textContent || 0);

  const decrease = bagdiv.querySelector(".decrement");
  const increase = bagdiv.querySelector(".increment");
  const countEl = bagdiv.querySelector(".count");
  const priceEl = bagdiv.querySelector(".priceplus");

  // ✅ add price when item is first added
  total += price;
  totalEl.textContent = total;

  increase.addEventListener("click", () => {
    count++;
    countEl.textContent = count;

    priceEl.textContent = `$${price * count}`;

    total += price;
    totalEl.textContent = total;
  });

  decrease.addEventListener("click", () => {
    if (count > 1) {
      count--;
      countEl.textContent = count;

      priceEl.textContent = `$${price * count}`;

      total -= price;
      totalEl.textContent = total;
    } else {
      total -= price;
      totalEl.textContent = total;
      bagdiv.remove();
    }
  });

  cartList.appendChild(bagdiv);
};

let products = [];

const showcard = () => {
  products.forEach(product => {
    const odercard = document.createElement('div');
    odercard.classList.add("item");

    odercard.innerHTML = `
      <div class="item-image">
        <img src="${product.image}">
      </div>
      <h4>${product.name}</h4>
      <h4>$${product.price}</h4>
      <button class="btn add-to-cart">Add to Cart</button>
    `;

    odercard.querySelector(".add-to-cart")
      .addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Item ${product.name} successfully added to the bag`);
        showBag(product);
      });

    menulist.appendChild(odercard);
  });
}

const initial = () => {
  fetch('list.json')
    .then(res => res.json())
    .then(data => {
      products = data;
      showcard();
    });
};

initial();
