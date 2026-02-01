
// -------------------------------------change color-------------------------------
let bdy = document.getElementById("body");
let btn = document.getElementById("change-color");

btn.addEventListener('click',() =>{
      bdy.classList.toggle("black");
     btn.classList.toggle("btn-white");
});


// ---------------------------------------for sign in button---------------------------------

 let slider = document.querySelector("#slider");
 let show = document.querySelector("#show");
 let slid =document.querySelector("#slid");

 slider.addEventListener('click',() =>{
    show.style.display = "inline";
    slider.style.display = "none";
    slid.style.display = "inline";
 });

 slid.addEventListener("click",() =>{
    slid.style.display = "none";
    slider.style.display = "inline";
    show.style.display ="none";
    
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
