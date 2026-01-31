
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
