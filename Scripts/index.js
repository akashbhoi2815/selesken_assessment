let userData = JSON.parse(localStorage.getItem("user_data")) || [];
console.log('userData: ', userData);

document.querySelector("form").addEventListener("submit", handleSignUp);

function handleSignUp(event) {
  event.preventDefault();

  let userName = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let unique_id = Math.floor(Math.random() * (10000000 - 999999) + 999);

if(email && password){
  let obj = {
    id: unique_id,
    userName: userName,
    email: email,
    password: password,
  };
  userData.push(obj);
  localStorage.setItem("user_data", JSON.stringify(userData));
  alert("signup successfull");
  window.location.href=("../Html/login.html")
}
    

}

document.querySelector(".login_button").addEventListener("click", handleLogin);

function handleLogin(){
  window.location.href=("../Html/login.html")
}