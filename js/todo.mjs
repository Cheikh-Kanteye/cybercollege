export const Todos = () => {
  const todoInput = document.querySelector("#todoInput");
  const addtodo = document.querySelector("#addtodo");
  const tasklist = document.querySelector(".task-list");

  addtodo.addEventListener("click", () => {
    const todo = todoInput.value;

    if (todo != "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      const span = document.createElement("span");

      li.classList.add("task");
      p.innerText = todo;
      span.innerText = "Supprimer";

      li.appendChild(p);
      li.appendChild(span);

      tasklist.appendChild(li);
      todoInput.classList.remove("error");
      addTodo();

      const deleteBtns = document.querySelectorAll("span");

      deleteBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const tasks = document.querySelectorAll(".task");
          tasks.forEach((task) => {
            if (task.querySelector("span") == this) {
              task.remove();
            }
          });
        });
      });
      todoInput.value = "";
    } else {
      const err = true;
      todoInput.classList.add("error");
      todoInput.setAttribute(
        "placeholder",
        "Vous devez saisir au moins 5 caractere"
      );

      const timeout = setTimeout(() => {
        todoInput.classList.remove("error");
        todoInput.setAttribute("placeholder", "Ajouter une tache");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  });
};

function addTodo() {
  const tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    task.addEventListener("click", () => {
      task.classList.toggle("done");
    });
  });
}
