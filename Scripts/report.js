let data = JSON.parse(localStorage.getItem("selected")) || [];
console.log("data: ", data);
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
        tr.setAttribute("style", "background-color: green;")
         count++
    } else {
        tr.setAttribute("style", "background-color: red;")
    }

    tr.append(question, correctAnswer, selectedAnswer);
    document.querySelector("tbody").append(tr);
  });
}

getData(data);
console.log(count)