export const Todos = () => {
  // Sélection des éléments DOM
  const todoInput = document.querySelector("#todoInput");
  const addTodoButton = document.querySelector("#addtodo");
  const taskList = document.querySelector(".task-list");

  // Événement au clic pour ajouter une tâche
  addTodoButton.addEventListener("click", () => {
    const todo = todoInput.value.trim(); // Supprime les espaces

    if (todo !== "") {
      // Création de l'élément de tâche
      const li = document.createElement("li");
      const p = document.createElement("p");
      const span = document.createElement("span");

      li.classList.add("task");
      p.innerText = todo;
      span.innerText = "Supprimer";

      li.appendChild(p);
      li.appendChild(span);
      taskList.appendChild(li);

      // Réinitialisation de l'input
      todoInput.classList.remove("error");
      todoInput.value = "";

      // Ajouter des événements de suppression pour le bouton "Supprimer"
      span.addEventListener("click", () => {
        li.remove(); // Suppression de la tâche
      });

      // Marquer la tâche comme terminée
      addTodo();
    } else {
      // Gestion de l'erreur si l'input est vide
      todoInput.classList.add("error");
      todoInput.setAttribute(
        "placeholder",
        "Vous devez saisir au moins 5 caractères"
      );

      // Réinitialisation du message d'erreur après un délai
      const timeout = setTimeout(() => {
        todoInput.classList.remove("error");
        todoInput.setAttribute("placeholder", "Ajouter une tâche");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  });
};

// Fonction pour marquer les tâches comme terminées
function addTodo() {
  const tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    task.addEventListener("click", () => {
      task.classList.toggle("done"); // Toggle de la classe "done"
    });
  });
}
