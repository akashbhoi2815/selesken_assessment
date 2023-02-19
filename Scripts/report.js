let data = JSON.parse(localStorage.getItem("selected")) || [];
let id = JSON.parse(localStorage.getItem("id")) || ""
let userData = JSON.parse(localStorage.getItem("user_data")) || [];

let count=0
function getData(data) {
  data?.map((el, i) => {
    let tr = document.createElement("tr");

    let question = document.createElement("td");
    question.textContent = el.Question;

    let correctAnswer = document.createElement("td");
    correctAnswer.textContent = el.CorrectAnswer;

    let selectedAnswer = document.createElement("td");
    selectedAnswer.textContent = el.SelectedAnswer;

    if (el.CorrectAnswer == el.SelectedAnswer) {
        selectedAnswer.setAttribute("style", "background-color: green;")
         count++
    } else {
        selectedAnswer.setAttribute("style", "background-color: red;")
    }

    tr.append(question, correctAnswer, selectedAnswer);
    document.querySelector("tbody").append(tr);
    

  });


  let h2 = document.createElement("h2");
  h2.textContent=`Obtained Mark:${count} out of ${data.length}`
  h2.setAttribute("style", "color: orange;")
  document.querySelector(".mark").append(h2)


}

getData(data);

document.querySelector("#logout_button").addEventListener("click", handleLogout);

//userDetails 

function userDetails(userData){
    let userarr =userData?.filter((el)=>{
      if(el.id==id){
        return true;
      }
    })
    console.log('userarr: ', userarr);

    if(userarr.length !==0){
      let name = document.createElement("h3")
      name.textContent = `UserName:${userarr[0].userName}`
      let id = document.createElement("h3")
      id.textContent = `UserId:${userarr[0].id}`
      document.getElementById("useDetails").append(name,id)
    }
    
}
userDetails(userData)

// logout
function handleLogout(){
  let id="";
  localStorage.setItem("id",JSON.stringify(id))
  window.location.href=("../Html/login.html")
}
