import { COURSES } from "./dummy.mjs";
import { Quiz } from "./quiz.mjs";
import { Todos } from "./todo.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // Sélection des éléments DOM principaux
  const root = document.querySelector(":root");
  const body = document.querySelector("body");
  const navbar = document.querySelector(".navbar");
  const toggleSidebar = document.querySelector(".toggle-sidebar");
  const toggleMenu = document.querySelector(".toggle-menu");
  const appContainer = document.querySelector(".app-container");
  const links = document.querySelectorAll(".navlink");
  const progressElements = document.querySelectorAll(".progress");

  // Variables d'état
  const progressSpeed = 50;
  let courseId = 1;
  let quizId = 1;

  // Initialisation
  loadPage("./pages/dashboard.html");
  progressElements.forEach(initProgressElement);

  // Événements
  toggleSidebar.addEventListener("click", toggleNavbarVisibility);
  toggleMenu.addEventListener("click", toggleMenuVisibility);
  links.forEach((link) => link.addEventListener("click", handleNavigation));

  /**
   * Gestionnaire de la visibilité de la barre latérale
   */
  function toggleNavbarVisibility() {
    navbar.classList.toggle("hide");
  }

  /**
   * Gestionnaire de la visibilité du menu
   */
  function toggleMenuVisibility() {
    navbar.classList.toggle("show");
    navbar.classList.remove("hide");
  }

  /**
   * Gestionnaire de navigation
   * @param {Event} e
   */
  function handleNavigation(e) {
    e.preventDefault();
    const link = e.currentTarget;
    loadPage(link.getAttribute("data-page"));
    setActiveLink(link);
    navbar.classList.remove("show");
  }

  /**
   * Affiche et cache le loader lors du chargement de pages
   */
  function showLoader() {
    body.classList.add("loading");
  }

  function hideLoader() {
    body.classList.remove("loading");
  }

  /**
   * Charge une page et initialise les nouveaux éléments DOM
   * @param {string} page
   */
  function loadPage(page) {
    showLoader();
    fetch(page)
      .then((response) => response.text())
      .then((data) => {
        appContainer.innerHTML = data;
        hideLoader();
        initNewElements();
        highlightCodeBlocks();
        handlePageContent(page);
      })
      .catch((error) => {
        displayErrorMessage("Erreur lors du chargement de la page.");
        console.error("Erreur de chargement:", error);
        hideLoader();
      });
  }

  /**
   * Définit le lien actif dans la navigation
   * @param {Element} activeLink
   */
  function setActiveLink(activeLink) {
    links.forEach((link) => link.classList.remove("active"));
    activeLink.classList.add("active");
  }

  /**
   * Initialise les nouveaux éléments de la page
   */
  function initNewElements() {
    const newProgressElements = appContainer.querySelectorAll(".progress");
    newProgressElements.forEach(initProgressElement);
    initTheming();
    initCourseNavigation();
  }

  /**
   * Gère le changement de thème et la couleur des boîtes
   */
  function initTheming() {
    const lightTheme = appContainer.querySelector(".light");
    const darkTheme = appContainer.querySelector(".dark");
    const boxColorElements = appContainer.querySelectorAll(".box-color");

    if (lightTheme && darkTheme) {
      lightTheme.addEventListener("click", () => switchTheme(true));
      darkTheme.addEventListener("click", () => switchTheme(false));
    }

    boxColorElements.forEach((box) => {
      const color = box.getAttribute("clr-base");
      box.style.setProperty("--bg-c", `hsl(${color})`);
      box.addEventListener("click", () => {
        root.style.setProperty("--first-color-base", color);
      });
    });
  }

  /**
   * Change le thème clair/sombre
   * @param {boolean} isLight
   */
  function switchTheme(isLight) {
    const lightTheme = appContainer.querySelector(".light");
    const darkTheme = appContainer.querySelector(".dark");
    lightTheme.classList.toggle("active", isLight);
    darkTheme.classList.toggle("active", !isLight);
    body.classList.toggle("dark", !isLight);
  }

  /**
   * Initialisation de la navigation des cours et des quiz
   */
  function initCourseNavigation() {
    const courseCards = document.querySelectorAll(".course-card");
    const quizCards = document.querySelectorAll(".quiz-card");

    if (courseCards.length) {
      handleNavigationWithId(courseCards, courseId);
    }
    if (quizCards.length) {
      handleNavigationWithId(quizCards, quizId);
    }
  }

  /**
   * Gère le contenu des pages en fonction de la navigation
   * @param {string} page
   */
  function handlePageContent(page) {
    if (page.includes("CourseDetails.html")) {
      displayCourse(courseId);
    } else if (page.includes("Quiz.html")) {
      Quiz(quizId);
    } else if (page.includes("projets.html")) {
      Todos();
    }
  }

  /**
   * Initialise les éléments de progression
   * @param {Element} p
   */
  function initProgressElement(p) {
    const progressValue = p.querySelector("span");
    let progressStart = 0;
    const progressEnd = parseInt(p.getAttribute("progress"));

    if (isNaN(progressEnd)) {
      console.error("Invalid progress value:", progressEnd);
      return;
    }

    const progressStatus = setInterval(() => {
      if (progressStart < progressEnd) {
        updateProgress(p, progressValue, ++progressStart, progressEnd);
      } else {
        clearInterval(progressStatus);
      }
    }, progressSpeed);
  }

  /**
   * Met à jour la barre de progression
   * @param {Element} p
   * @param {Element} progressValue
   * @param {number} progressStart
   * @param {number} progressEnd
   */
  function updateProgress(p, progressValue, progressStart, progressEnd) {
    progressValue.textContent = `${progressStart}%`;
    p.style.background = `conic-gradient(
      var(--first-color) ${progressStart * 3.6}deg,
      var(--container-color) ${progressStart * 3.6}deg
    )`;
  }

  /**
   * Affiche les détails d'un cours
   * @param {number} courseId
   */
  function displayCourse(courseId) {
    const course = COURSES.find((c) => c.id === parseInt(courseId));
    if (!course) return;

    const details = document.querySelector(".details");
    details.innerHTML = `
      <div class="container">
        <div class="codeblock">
          <h1 style="margin-bottom: 12px">${course.title}</h1>
          <p>${course.description}</p>
        </div>
        ${course.sections.map(renderSection).join("")}
      </div>`;
  }

  /**
   * Rend un bloc de section de cours
   * @param {Object} section
   * @returns {string}
   */
  function renderSection(section) {
    return `
      <div class="codeblock">
        <h2>${section.title}</h2>
        ${section.content.map(renderCodeBlock).join("")}
      </div>`;
  }

  /**
   * Rend un bloc de code ou de texte
   * @param {Object} code
   * @returns {string}
   */
  function renderCodeBlock(code) {
    return code.type === "text"
      ? `<p>${code.content}</p>`
      : `<pre><code class="language-${code.type}">${code.data}</code></pre>`;
  }

  /**
   * Gère la navigation avec un ID spécifique
   * @param {NodeList} elements
   * @param {number} id
   */
  function handleNavigationWithId(elements, id) {
    elements.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const page = item.getAttribute("data-page");
        const newId = page.split("/").pop() || id;

        loadPage(page.substring(0, page.lastIndexOf("/")));
        updateId(elements, newId);
      });
    });
  }

  /**
   * Met à jour l'ID de navigation
   * @param {NodeList} elements
   * @param {number} newId
   */
  function updateId(elements, newId) {
    if (elements === document.querySelectorAll(".course-card")) {
      courseId = newId;
    } else if (elements === document.querySelectorAll(".quiz-card")) {
      quizId = newId;
    }
  }

  /**
   * Affiche un message d'erreur
   * @param {string} message
   */
  function displayErrorMessage(message) {
    appContainer.innerHTML = `<p>${message}</p>`;
  }

  /**
   * Surligne les blocs de code dans la page
   */
  function highlightCodeBlocks() {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
});
