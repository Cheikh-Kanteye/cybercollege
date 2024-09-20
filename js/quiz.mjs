import { QUIZS } from "./dummy.mjs";

const Quiz = (id) => {
  // Récupération du quiz correspondant à l'ID
  const { quiz } = QUIZS.find((c) => c.id === parseInt(id));
  if (!quiz) return; // Vérification si le quiz existe

  // Sélection des éléments DOM
  const reponses = document.querySelector(".reponses");
  const question = document.querySelector(".question");
  const popup = document.querySelector(".popup");
  const next = document.querySelector(".next");
  const replay = document.querySelector(".replay");
  let step = 0;

  // Fonction pour rendre les questions et réponses
  const renderQuiz = () => {
    question.innerHTML = quiz[step].question;
    reponses.innerHTML = ""; // Réinitialisation des réponses

    quiz[step].reponse.forEach((rp) => {
      const button = document.createElement("button");
      button.classList.add("quiz-card");
      button.innerHTML = rp.rep;
      reponses.appendChild(button);

      // Événement au clic pour chaque réponse
      button.addEventListener("click", function () {
        // Désactiver tous les boutons après un choix
        const buttons = reponses.querySelectorAll("button");
        buttons.forEach((btn) => {
          btn.disabled = true;
        });

        // Vérification si la réponse est correcte
        if (rp.correct) {
          this.classList.add("correct");
        } else {
          this.classList.add("error");
        }
      });
    });
  };

  // Rendu initial du quiz
  renderQuiz();

  // Événement au clic pour le bouton "suivant"
  next.addEventListener("click", function () {
    step++;
    if (step < quiz.length) {
      popup.classList.remove("show");
      renderQuiz(); // Rendre la prochaine question
    } else {
      step = 0; // Réinitialiser le quiz
      popup.classList.add("show"); // Afficher la popup de fin
      replay.addEventListener("click", function () {
        step = 0; // Réinitialiser le quiz
        popup.classList.remove("show"); // Cacher la popup
        renderQuiz(); // Rendre la première question
      });
    }
  });
};

export { Quiz };
