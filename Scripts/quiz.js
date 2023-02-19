const questions = [
  {
    id: 1,
    title: "Javascript is an _______ language?",
    questionNo: "Question1",
    category: {
      option1: "Object-Oriented",
      option2: "Object-Based",
      option3: "Procedural",
      option4: "None of the above",
    },
    correctAns: `Object-Oriented`,
  },
  {
    id: 2,
    questionNo: "Question2",
    title:
      "Which of the following keywords is used to define a variable in Javascript?",
    category: {
      option1: "var",
      option2: "let",
      option3: "Both A and B",
      option4: "None of the above",
    },
    correctAns: `Both A and B`,
  },
  {
    id: 3,
    title:
      "Which of the following methods is used to access HTML elements using Javascript?",
    questionNo: "Question3",
    category: {
      option1: "getElementsByClassName()",
      option2: "getElementbdId()",
      option3: "Both A and B",
      option4: "None of the above",
    },
    correctAns: `Both A and B`,
  },
  {
    id: 4,
    title:
      "Which of the following methods can be used to display data in some form using Javascript?",
    questionNo: "Question4",
    category: {
      option1: "document.write()",
      option2: "console.log()",
      option3: "window.alert()",
      option4: "All of the above",
    },
    correctAns: `All of the above`,
  },
  {
    id: 5,
    title:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    questionNo: "Question5",
    category: {
      option1: "Throws an error",
      option2: "Ignores the statements",
      option3: "Gives a warning",
      option4: "None of the above",
    },
    correctAns: `Ignores the statements`,
  },
  {
    id: 6,
    title: "Commonly used data types DO NOT include:",
    questionNo: "Question6",
    category: {
      option1: "strings",
      option2: "booleans",
      option3: "alerts",
      option4: "numbers",
    },
    correctAns: `alerts`,
  },
  {
    id: 7,
    title: "The condition in an if/else statement is enclosed with ____.",
    questionNo: "Question7",
    category: {
      option1: "quotes",
      option2: "curly braces",
      option3: "parenthesis",
      option4: "square brackets",
    },
    correctAns: `curly braces`,
  },
  {
    id: 8,
    title: "Arrays in JavaScript can be used to store ____.",
    questionNo: "Question8",
    category: {
      option1: "numbers and strings",
      option2: "other arrays",
      option3: "booleans",
      option4: "All of the above",
    },
    correctAns: `All of the above`,
  },
  {
    id: 9,
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    questionNo: "Question9",
    category: {
      option1: "commas",
      option2: "curly braces",
      option3: "quotes",
      option4: "parentheses",
    },
    correctAns: `quotes`,
  },
  {
    id: 10,
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    questionNo: "Question10",
    category: {
      option1: "JavaScript",
      option2: "terminal/bash",
      option3: "for loops",
      option4: "console.log",
    },
    correctAns: `console.log`,
  },
];

localStorage.setItem("questions", JSON.stringify(questions));
var queCount = 0;
var count = 0;
const getData = JSON.parse(localStorage.getItem("questions")) || [];

const form = document.querySelector(".form");
const skipBtn = document.querySelector(".btn");
const submitBtn = document.querySelector(".submit");
submitBtn.setAttribute("class", "hide");

function loadDOM() {
  function displayQue() {
    if (queCount < getData.length) {
      var quest = getData[queCount];
      const { category } = quest;
      return `
              <div id=${quest.id} class="question_div"  >
              <p>${quest.title}</p>
                <div><input type="radio" name="${quest.questionNo}" value="${category.option1}">A. ${category.option1}</input></div> 
                <div><input type="radio" name="${quest.questionNo}" value="${category.option2}">B. ${category.option2}</input></div> 
                <div><input type="radio" name="${quest.questionNo}" value="${category.option3}">C. ${category.option3}</input></div> 
                <div><input type="radio" name="${quest.questionNo}" value="${category.option4}">D. ${category.option4}</input></div> 
              </div>
              `;
    }
  }

  let que = displayQue();
  // console.log("que = " + que);

  form.innerHTML = que;
}
var selectedAns = [];

form.addEventListener("change", (e) => {
  let quest1 = getData[queCount];
  let correctAns = quest1.correctAns;
  let title = quest1.title;

  if (count < getData.length) {
    console.log("line no 79");
    selectedAns.push({
      Question: title,
      CorrectAnswer: correctAns,
      SelectedAnswer: e.target.value,
    });
    count++;
  }
  console.log(selectedAns);
  setTimeout(handleCount, 1000);
});
function handleCount() {
  if (queCount < getData.length - 1) {
    queCount++;
    console.log(queCount);
    loadDOM();
  } else {
    submitBtn.removeAttribute("class");
    skipBtn.setAttribute("class", "hide");
    form.setAttribute("class", "hide");
    var text = document.createElement("h2");
    text.textContent =
      "You have answered all questions, Please click submit to submit the Quiz.";
    document.getElementById("last_message").append(text);
  }
  
}

function skipQue() {
  skipBtn.addEventListener("click", () => {
    if (count < getData.length) {
      let quest1 = getData[queCount];
      let correctAns = quest1.correctAns;
      let title = quest1.title;
      selectedAns.push({
        Question: title,
        CorrectAnswer: correctAns,
        SelectedAnswer: null,
      });
      console.log(selectedAns);
    }

    handleCount();
    // if (queCount < getData.length - 1) queCount++;
    // console.log(queCount);
    // loadDOM();
  });
}
skipQue();
loadDOM();

document.querySelector("form").addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
}

submitBtn.addEventListener("click", () => {
  localStorage.setItem("selected", JSON.stringify(selectedAns));
  window.location.href = "../Html/report.html";
});
