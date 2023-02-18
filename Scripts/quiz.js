const questions = [
    {
      id: 1,
      title: "What is this que?",
      questionNo: "Question1",
      category: {
        option1: "one",
        option2: "two",
        option3: "three",
        option4: "four",
      },
      correctAns: `two`,
    },
    {
      id: 2,
      questionNo: "Question2",
      title: "This is new jhasgdcjadgcc Que ?",
      category: {
        option1: "one",
        option2: "two",
        option3: "three",
        option4: "four",
      },
      correctAns: `four`,
    },
    {
      id: 3,
      title: "Question3",
      questionNo: "Seems fucked up?",
      category: {
        option1: "one",
        option2: "two",
        option3: "three",
        option4: "four",
      },
      correctAns: `one`,
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
              <div id=${quest.id}  >
              <p>${quest.title}</p>
              <input type="radio" name="${quest.questionNo}" value="${category.option1}">A. ${category.option1}</input>
              <input type="radio" name="${quest.questionNo}" value="${category.option2}">B. ${category.option2}</input>
              <input type="radio" name="${quest.questionNo}" value="${category.option3}">C. ${category.option3}</input>
              <input type="radio" name="${quest.questionNo}" value="${category.option4}">D. ${category.option4}</input>
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
  });