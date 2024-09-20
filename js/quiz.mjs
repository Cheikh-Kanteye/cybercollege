import { QUIZS } from "./dummy.mjs";

const Quiz = (id) => {
  const { quiz } = QUIZS.find((c) => c.id === parseInt(id));
  if (!quiz) return;

  const reponses = document.querySelector(".reponses");
  const question = document.querySelector(".question");
  const popup = document.querySelector(".popup");
  const next = document.querySelector(".next");
  const replay = document.querySelector(".replay");
  let step = 0;

  const renderQuiz = () => {
    question.innerHTML = quiz[step].question;
    reponses.innerHTML = "";

    quiz[step].reponse.forEach((rp) => {
      const button = document.createElement("button");
      button.classList.add("quiz-card");
      button.innerHTML = rp.rep;
      reponses.appendChild(button);

      button.addEventListener("click", function () {
        const buttons = reponses.querySelectorAll("button");
        buttons.forEach((btn) => {
          btn.disabled = true;
        });

        if (rp.correct) {
          this.classList.add("correct");
        } else {
          this.classList.add("error");
        }
      });
    });
  };

  renderQuiz();

  next.addEventListener("click", function () {
    step++;
    if (step < quiz.length) {
      popup.classList.remove("show");
      renderQuiz();
    } else {
      step = 0;
      popup.classList.add("show");
      replay.addEventListener("click", function () {
        step = 0;
        popup.classList.remove("show");
      });
    }
  });
};

export { Quiz };
