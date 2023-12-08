const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());


// Show or hide signup form
signupLoginLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});

/*
function login(){
  acno =login_acno.value;
  pswd =login_pswd.value;
  console.log(acno,pswd);
}
if(acno in localStorage){
  accountDeatils.Json.parse(localStorage.getItem(acno));
  if(pswd==accountDeatils.pswd){
    alert("login successful")
    window.location="./online.html";
  }else{
    alert("incorrect account number")
  }
}
else{
  alert("invalid account number")
}

let amnt =0;
let withdraw =0;
let totalBalance =0;

function depositeMoney(){
  amnt =deposite_amnt.value;
  acno =deposite_acno.value;
  amnt= math.floor(amnt);

  if(acno in localStorage){
    accountDeatils=Json.parse(localStorage.getItem(acno));
    if(acno==accountDeatils.acno && amnt <= 0){
      alert("value canot be empty or negative")
    }else{
      accountDeatils.balance += amnt;
      localStorage.setItem(acno,Json.stringlfy(accountDeatils));
      alert("Your amount issuccessfully added")
      document.getElementById("balance_amount").innerHTML=`<div style="color:red;"font-weight:500">your current account`;
    }
  }
}
function register(){
  acno =reg_acno.value;
  pswd =reg_pswd.value;
 uname =reg_pswd.value;
  console.log(acno,uname,pswd);
 
  accountDeatils={
    acno,
    uname,
    pswd,balance:0
  }
  if(acno in localStorage){
    alert("user already registerd")
}else{
  localStorage.setItem=(acno,Json.strigify(accountDeatils));
  alert("user  registerd")

}
//*/