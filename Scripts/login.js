let getData = JSON.parse(localStorage.getItem("user_data"));

document.querySelector("form").addEventListener("submit", handleLogin);
let id=""
function handleLogin(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const user = getData.filter((item) => {
    if (item.email == email && item.password == password) {
        id=item.id
        return true;
      }
    });
    
    if (user.length != 0) {
      
      alert("login successful");
    localStorage.setItem("id",JSON.stringify(id))
    window.location.href = "../Html/quiz.html";
  } else {
    alert("Invalid credentials");
  }
}

document.querySelector(".signup_button").addEventListener("click", handleSignup);

function handleSignup(){
  window.location.href=("../index.html")
}