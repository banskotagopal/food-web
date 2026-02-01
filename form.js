let page = document.getElementById("main");

page.addEventListener('mouseover',() =>{
       page.style.backgroundColor = "rgb(13, 31, 48)";
       page.style.border = "none";
});

page.addEventListener("mouseleave",() =>{
    page.style.backgroundColor = "";
    page.style.border = "1px solid aliceblue";
});

let loginform = document.getElementById("login");
let createform = document.getElementById("create");
let login_btn = document.getElementById("login-btn");
let create_btn = document.getElementById("create-btn");

login_btn.addEventListener("click",(e) =>{
    e.preventDefault();
     createform.style.display = "block";
      loginform.style.display = "none";
});

create_btn.addEventListener('click',(e) =>{
     e.preventDefault();
     createform.style.display = "none";
     loginform.style.display = "block";
});