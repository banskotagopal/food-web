 


let loginform = document.getElementById("login");
let createform = document.getElementById("create-form");
let login_btn = document.getElementById("login-btn");
let create_btn = document.getElementById("create-btn");


let email = document.getElementById("email");
let login_pass = document.getElementById("login-pass");
let log = document.getElementById("log");

let create_email = document.getElementById("create-email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let createFormEl = document.getElementById("createForm");
let sign_in = document.getElementById("sign-in");


if (localStorage.getItem("accountCreated")) {
    login_btn.remove();
}

login_btn.addEventListener("click", (e) => {
    e.preventDefault();
    loginform.style.display = "none";
    createform.style.display = "block";
});


create_btn.addEventListener("click", (e) => {
    e.preventDefault();
    createform.style.display = "none";
    loginform.style.display = "block";
});


createFormEl.addEventListener("submit", (e) => {
    e.preventDefault(); 

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
    }
       if(password.value.length > 5)
       {
              localStorage.setItem("eml", create_email.value);
    localStorage.setItem("passs", password.value);

    alert("Account created successfully!");
    createform.style.display = "none";
    loginform.style.display = "block";
    login_btn.style.display = "none";
    localStorage.setItem("accountCreated", "true");
       } else{
        alert("password must more than 5");
       }
});


log.addEventListener("click", (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("eml");
    const storedPass = localStorage.getItem("passs");

    if (email.value === storedEmail && login_pass.value === storedPass) {
        alert("Login successfully!");
        window.location.href = "index.html";
        localStorage.setItem("login","sucess");
    } else {
        alert("Incorrect Email or password");
    }
});
