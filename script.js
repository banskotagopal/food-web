
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
 let bar = document.querySelectorAll("#show a")

function close()
{
  bar.forEach(item =>{
      item.addEventListener("click",() =>{
         show.style.display = "none";
         slid.style.display = "none";
         slider.style.display ="inline";
  });
  })
}

 slider.addEventListener('click',() =>{
    show.style.display = "inline";
    slider.style.display = "none";
    slid.style.display = "inline";
    close();
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

let sign_in = document.getElementById("sign-in");
let log_out = document.getElementById("log-out");

 if(localStorage.getItem("login"))
 {
    sign_in.style.display = "none";
    log_out.style.display = "block";
 }



log_out.addEventListener('click',() =>{
let input = prompt("If you logout, account will be deleted permantely 'y' for deleted")
 
if(input.toLocaleLowerCase() === "y")
{ 
    localStorage.removeItem("login");
    log_out.style.display = "none";
    sign_in.style.display = "inline";
    localStorage.removeItem("eml");
    localStorage.removeItem("passs");
    localStorage.removeItem("accountCreated");
    alert("Account deleted Sucessfully");
}else if(input.valueOf === "n")
{
  alert("account delection cancled");
}else{
  alert("Invalid Operation");
}

});


