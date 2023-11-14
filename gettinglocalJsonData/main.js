// const questionsBtn = document.querySelector('button')
// const questionsContainer = document.querySelector('.questions-container')

// questionsBtn.addEventListener('click', getQuestions)

// function getQuestions() {
//     const newXhrObj = new XMLHttpRequest();

//     newXhrObj.open("GET", "questions.json", true);

//     newXhrObj.onload = function () {
//         if (this.status === 200 && this.readyState === 4) {
//             console.log(this.responseText)
            
//         }
//     }

//      newXhrObj.send();
    
// }

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

const questionsBtn = document.querySelector("button");
const questionsContainer = document.querySelector(".questions-container");

questionsBtn.addEventListener("click", getQuestions);

function getQuestions() {
  const newXhrObj = new XMLHttpRequest();

  newXhrObj.open("GET", "questions.json", true);

  newXhrObj.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      let questions = JSON.parse(this.responseText);
      let questionsResult = "";
      questions.forEach((question) => {
        questionsResult += `
                          <ul>
                          <p>${question.question}</p>
                          <li>${question.choiceA}</li>
                          <li>${question.choiceB}</li>
                          <li>${question.choiceC}</li>
                          <li>${question.choiceD}</li>
                          </ul>
        `;
      });

      questionsContainer.innerHTML = questionsResult;
    }
  };

  newXhrObj.send(null);
}
