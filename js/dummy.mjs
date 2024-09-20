export const COURSES = [
  {
    id: 1,
    title: "Introduction à HTML",
    description:
      "HTML, acronyme de Hypertext Markup Language (langage de balisage hypertexte), est le langage standard utilisé pour créer et structurer le contenu des pages web. Il est essentiellement composé de balises qui définissent la structure et le sens du contenu présenté dans un navigateur web.",
    sections: [
      {
        id: 1,
        courseId: 1,
        title: "Structure de base d'un document HTML",
        content: [
          {
            id: 1,
            sectionId: 1,
            type: "html",
            data: `
&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Ma Première Page HTML&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Bienvenue sur mon site web!&lt;/h1&gt;
    &lt;p&gt;Ceci est un paragraphe.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
            `,
          },
        ],
      },
      {
        id: 2,
        courseId: 1,
        title: "Balises HTML de Base",
        content: [
          {
            id: 2,
            sectionId: 2,
            type: "html",
            data: `
&lt;ul&gt;
&lt;li&gt;&lt;code&gt;&lt;h1&gt;&lt;/code&gt; à &lt;code&gt;&lt;h6&gt;&lt;/code&gt; : Balises de titres, &lt;code&gt;&lt;h1&gt;&lt;/code&gt; étant le plus important.&lt;/li&gt;
&lt;li&gt;&lt;code&gt;&lt;p&gt;&lt;/code&gt; : Paragraphe.&lt;/li&gt;
&lt;li&gt;&lt;code&gt;&lt;a&gt;&lt;/code&gt; : Lien hypertexte.&lt;/li&gt;
&lt;li&gt;&lt;code&gt;&lt;img&gt;&lt;/code&gt; : Image.&lt;/li&gt;
&lt;li&gt;&lt;code&gt;&lt;ul&gt;&lt;/code&gt; et &lt;code&gt;&lt;li&gt;&lt;/code&gt; : Liste non ordonnée.&lt;/li&gt;
&lt;li&gt;&lt;code&gt;&lt;ol&gt;&lt;/code&gt; et &lt;code&gt;&lt;li&gt;&lt;/code&gt; : Liste ordonnée.&lt;/li&gt;
&lt;li&gt;&lt;code&gt;&lt;div&gt;&lt;/code&gt; : Division ou section d'une page.&lt;/li&gt;
&lt;li&gt;&lt;code&gt;&lt;span&gt;&lt;/code&gt; : Conteneur en ligne pour le texte.&lt;/li&gt;
&lt;/ul&gt;
            `,
          },
        ],
      },
      {
        id: 3,
        courseId: 1,
        title: "Liens Hypertextes",
        content: [
          {
            id: 3,
            sectionId: 3,
            type: "html",
            data: `
&lt;a href="https://www.example.com"&gt;Visitez Example&lt;/a&gt;`,
          },
        ],
      },
      {
        id: 4,
        courseId: 1,
        title: "Insertion d'Images",
        content: [
          {
            id: 4,
            sectionId: 4,
            type: "html",
            data: `
&lt;img src="chemin/vers/image.jpg" alt="Description de l'image"&gt;`,
          },
        ],
      },
      {
        id: 5,
        courseId: 1,
        title: "Listes",
        content: [
          {
            id: 5,
            sectionId: 5,
            type: "html",
            data: `
&lt;ul&gt;
  &lt;li&gt;Élément de liste 1&lt;/li&gt;
  &lt;li&gt;Élément de liste 2&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;Premier élément&lt;/li&gt;
  &lt;li&gt;Deuxième élément&lt;/li&gt;
&lt;/ol&gt;
            `,
          },
        ],
      },
      {
        id: 6,
        courseId: 1,
        title: "Formulaires",
        content: [
          {
            id: 6,
            sectionId: 6,
            type: "html",
            data: `            
&lt;form action="/submit-form" method="POST"&gt;
    &lt;label for="name"&gt;Nom :&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;
    
    &lt;label for="email"&gt;Email :&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;
    
    &lt;input type="submit" value="Envoyer"&gt;
&lt;/form&gt;`,
          },
        ],
      },
      {
        id: 7,
        courseId: 1,
        title: "Commentaires",
        content: [
          {
            id: 7,
            sectionId: 7,
            type: "html",
            data: `
&lt;!-- Ceci est un commentaire --&gt;`,
          },
        ],
      },
      {
        id: 8,
        courseId: 1,
        title: "Conclusion du Cours d'Introduction à HTML",
        content: [
          {
            id: 1,
            sectionId: 8,
            type: "text",
            content: `Félicitations ! Vous êtes arrivé à la fin de ce cours d'introduction à HTML. Nous avons couvert les bases essentielles du langage de balisage hypertexte (HTML), qui est la pierre angulaire du développement web. Voici un résumé des points clés que vous avez appris :`,
          },
          {
            id: 2,
            sectionId: 8,
            type: "text",
            content:
              "HTML est la base sur laquelle vous construirez vos compétences en développement web. En maîtrisant ces concepts fondamentaux, vous êtes maintenant bien préparé pour explorer des technologies web plus avancées telles que CSS pour le style et JavaScript pour la dynamique et l'interactivité.",
          },
          {
            id: 3,
            sectionId: 8,
            type: "text",
            content:
              "Continuez à pratiquer et à expérimenter avec HTML en créant vos propres pages web. Plus vous pratiquerez, plus vous deviendrez compétent et à l'aise avec ce langage essentiel.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Bootstrap 5 pour Débutants",
    description:
      "Bootstrap est un framework front-end populaire pour le développement web, facilitant la création de mises en page responsives et attrayantes. Ce cours couvre les bases de Bootstrap 5, y compris les grilles, les composants et les utilitaires.",
    sections: [
      {
        id: 1,
        courseId: 2,
        title: "Introduction à Bootstrap 5",
        content: [
          {
            id: 1,
            sectionId: 1,
            type: "html",
            data: `
&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Ma Première Page avec Bootstrap 5&lt;/title&gt;
    &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-vNzmIcyZtKfA9u2oU7sJF6RJjh97uC8T+r5S+hwHRhS+rVw7ByT2Jblm+Pjz+6Xr" crossorigin="anonymous"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;h1&gt;Bienvenue sur mon site avec Bootstrap 5!&lt;/h1&gt;
        &lt;p&gt;Ceci est un paragraphe.&lt;/p&gt;
    &lt;/div&gt;

    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-2TSHlZjyvJG9SQQkn+EsckJ6O0F7DqjAQ5OEKdeLOwP0FpPp8bhJWlLr2CH6m9dN" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
          `,
          },
        ],
      },
      {
        id: 2,
        courseId: 2,
        title: "Utilisation des Grilles de Bootstrap",
        content: [
          {
            id: 2,
            sectionId: 2,
            type: "html",
            data: `
&lt;p&gt;Bootstrap utilise un système de grilles pour organiser le contenu de la page. Les grilles sont basées sur un système de 12 colonnes.&lt;/p&gt;
&lt;p&gt;Exemple de grille :&lt;/p&gt;
&lt;div class="row"&gt;
    &lt;div class="col-md-6"&gt;
        &lt;p&gt;Colonne 1&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-6"&gt;
        &lt;p&gt;Colonne 2&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
          `,
          },
        ],
      },
      {
        id: 3,
        courseId: 2,
        title: "Composants Bootstrap",
        content: [
          {
            id: 3,
            sectionId: 3,
            type: "html",
            data: `
&lt;!-- Bouton primaire --&gt;
&lt;button type="button" class="btn btn-primary"&gt;Bouton Primaire&lt;/button&gt;

&lt;!-- Carte Bootstrap --&gt;
&lt;div class="card" style="width: 18rem;"&gt;
    &lt;img src="..." class="card-img-top" alt="Image de la carte"&gt;
    &lt;div class="card-body"&gt;
        &lt;h5 class="card-title"&gt;Titre de la carte&lt;/h5&gt;
        &lt;p class="card-text"&gt;Contenu de la carte.&lt;/p&gt;
        &lt;a href="#" class="btn btn-primary"&gt;Aller vers quelque chose&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;
          `,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "JavaScript Essentiel",
    description:
      "JavaScript est un langage de programmation essentiel pour le développement web. Ce cours couvre les concepts fondamentaux de JavaScript, y compris les variables, les fonctions, les boucles, les conditions et l'interaction avec le HTML.",
    sections: [
      {
        id: 1,
        courseId: 3,
        title: "Introduction à JavaScript",
        content: [
          {
            id: 1,
            sectionId: 1,
            type: "html",
            data: `
&lt;script&gt;
    // Déclaration de variables
    let message = "Bonjour, monde!";
    
    // Affichage dans la console
    console.log(message);
&lt;/script&gt;
          `,
          },
        ],
      },
      {
        id: 2,
        courseId: 3,
        title: "Variables et Types de Données",
        content: [
          {
            id: 2,
            sectionId: 2,
            content: `
            JavaScript utilise des variables pour stocker des données. Les types de données incluent les nombres, les chaînes de caractères, les tableaux et les objets
            Exemple de déclaration de variable`,
            type: "javascript",
            data: `
let nombre = 42;
let prenom = "Alice";
let monTableau = [1, 2, 3];
          `,
          },
        ],
      },
      {
        id: 3,
        courseId: 3,
        title: "Fonctions et Structures de Contrôle",
        content: [
          {
            id: 3,
            sectionId: 3,
            type: "javascript",
            data: `
// Définition d'une fonction
function calculerSomme(a, b) {
    return a + b;
}

// Utilisation de la fonction
let resultat = calculerSomme(3, 4);
console.log(resultat); // Affiche 7
          `,
          },
        ],
      },
      {
        id: 4,
        courseId: 3,
        title: "Manipulation du DOM",
        content: [
          {
            id: 4,
            sectionId: 4,
            type: "html",
            data: `
&lt;!-- HTML --&gt;
&lt;div id="monDiv"&gt;Contenu&lt;/div&gt;

&lt;!-- JavaScript --&gt;
&lt;script&gt;
    // Sélection d'éléments du DOM
    let monElement = document.getElementById('monDiv');
    
    // Modification du contenu
    monElement.textContent = 'Nouveau contenu';
&lt;/script&gt;
          `,
          },
        ],
      },
      {
        id: 5,
        courseId: 3,
        title: "Événements et Interaction Utilisateur",
        content: [
          {
            id: 5,
            sectionId: 5,
            type: "html",
            data: `
&lt;button id="monBouton"&gt;Cliquez ici&lt;/button&gt;

&lt;script&gt;
    // Sélection de l'élément
    let bouton = document.getElementById('monBouton');
    
    // Ajout d'un écouteur d'événement
    bouton.addEventListener('click', function() {
        alert('Le bouton a été cliqué!');
    });
&lt;/script&gt;
          `,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Tutoriel Calculatrice en HTML, CSS et JavaScript",
    description:
      "Dans ce tutoriel, vous apprendrez à créer une calculatrice simple en utilisant HTML pour la structure, CSS pour le style et JavaScript pour la logique de calcul.",
    sections: [
      {
        id: 1,
        courseId: 1,
        title: "Introduction à la Calculatrice",
        content: [
          {
            id: 1,
            sectionId: 1,
            type: "text",
            content:
              "Bienvenue dans ce tutoriel sur la création d'une calculatrice en HTML, CSS et JavaScript.",
          },
        ],
      },
      {
        id: 4,
        courseId: 1,
        title: "Structure HTML de Base",
        content: [
          {
            id: 2,
            sectionId: 2,
            type: "html",
            data: `
&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Calculatrice&lt;/title&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="calculator"&gt;
        &lt;input type="text" id="display" class="display" disabled&gt;
        &lt;div class="keys"&gt;
            &lt;!-- Boutons pour les chiffres, opérateurs et égal --&gt;
            &lt;button class="key" onclick="appendToDisplay('7')"&gt;7&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('8')"&gt;8&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('9')"&gt;9&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('+')"&gt;+&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('4')"&gt;4&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('5')"&gt;5&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('6')"&gt;6&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('-')"&gt;-&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('1')"&gt;1&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('2')"&gt;2&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('3')"&gt;3&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('*')"&gt;*&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('0')"&gt;0&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('.')"&gt;.&lt;/button&gt;
            &lt;button class="key" onclick="clearDisplay()"&gt;C&lt;/button&gt;
            &lt;button class="key" onclick="appendToDisplay('/')"&gt;/&lt;/button&gt;
            &lt;button class="key equal" onclick="calculate()"&gt;=&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
            `,
          },
        ],
      },
      {
        id: 3,
        courseId: 1,
        title: "Styles CSS pour la Calculatrice",
        content: [
          {
            id: 3,
            sectionId: 3,
            type: "css",
            data: `
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.calculator {
    width: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
}

.display {
    width: calc(100% - 20px);
    margin: 10px;
    padding: 10px;
    font-size: 24px;
    text-align: right;
}

.keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.key {
    padding: 15px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    transition: background-color 0.3s;
}

.key:hover {
    background-color: #e0e0e0;
}

.equal {
    grid-column: span 2;
}
            `,
          },
        ],
      },
      {
        id: 4,
        courseId: 1,
        title: "Logique JavaScript pour la Calculatrice",
        content: [
          {
            id: 4,
            sectionId: 4,
            type: "javascript",
            data: `
let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    const expression = currentInput;
    let result;
    
    try {
        result = eval(expression);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        console.error('Error during evaluation:', error);
        alert('Invalid expression!');
    }
}
            `,
          },
        ],
      },
      {
        id: 5,
        courseId: 1,
        title: "Conclusion",
        content: [
          {
            id: 5,
            sectionId: 5,
            type: "text",
            content:
              "Félicitations! Vous avez maintenant appris à créer une calculatrice simple en utilisant HTML, CSS et JavaScript. Continuez à pratiquer et à expérimenter pour améliorer vos compétences en développement web.",
          },
        ],
      },
    ],
  },
];

const QUIZ_HTML = [
  {
    question: "Que signifie HTML?",
    reponse: [
      { rep: "HyperText Markup Language", correct: true },
      { rep: "HyperText Machine Language", correct: false },
      { rep: "HyperTool Multi Language", correct: false },
      { rep: "HighText Machine Language", correct: false },
    ],
  },
  {
    question: "Quelle balise est utilisée pour insérer une image en HTML?",
    reponse: [
      { rep: "&lt;img&gt;", correct: true },
      { rep: "&lt;image&gt;", correct: false },
      { rep: "&lt;pic&gt;", correct: false },
      { rep: "&lt;photo&gt;", correct: false },
    ],
  },
  {
    question:
      "Quelle balise HTML est utilisée pour définir un titre de niveau 1?",
    reponse: [
      { rep: "&lt;title1&gt;", correct: false },
      { rep: "&lt;h1&gt;", correct: true },
      { rep: "&lt;head1&gt;", correct: false },
      { rep: "&lt;header1&gt;", correct: false },
    ],
  },
  {
    question: "Comment créer un lien hypertexte en HTML?",
    reponse: [
      { rep: "&lt;a href='url'&gt;Lien&lt;/a&gt;", correct: true },
      { rep: "&lt;link href='url'&gt;Lien&lt;/link&gt;", correct: false },
      { rep: "&lt;a url='url'&gt;Lien&lt;/a&gt;", correct: false },
      {
        rep: "&lt;hyperlink url='url'&gt;Lien&lt;/hyperlink&gt;",
        correct: false,
      },
    ],
  },
  {
    question: "Quelle balise HTML est utilisée pour insérer un saut de ligne?",
    reponse: [
      { rep: "&lt;br&gt;", correct: true },
      { rep: "&lt;break&gt;", correct: false },
      { rep: "&lt;lb&gt;", correct: false },
      { rep: "&lt;newline&gt;", correct: false },
    ],
  },
];

const QUIZ_CSS = [
  {
    question: "Que signifie CSS?",
    reponse: [
      { rep: "Cascading Style Sheets", correct: true },
      { rep: "Creative Style Sheets", correct: false },
      { rep: "Computer Style Sheets", correct: false },
      { rep: "Colorful Style Sheets", correct: false },
    ],
  },
  {
    question: "Comment change-t-on la couleur de fond d'un élément en CSS?",
    reponse: [
      { rep: "background-color", correct: true },
      { rep: "color-background", correct: false },
      { rep: "bgcolor", correct: false },
      { rep: "color-bg", correct: false },
    ],
  },
  {
    question:
      "Quelle propriété CSS est utilisée pour changer la couleur du texte?",
    reponse: [
      { rep: "text-color", correct: false },
      { rep: "font-color", correct: false },
      { rep: "color", correct: true },
      { rep: "text-style", correct: false },
    ],
  },
  {
    question: "Comment sélectionne-t-on un élément avec l'id 'header' en CSS?",
    reponse: [
      { rep: "#header", correct: true },
      { rep: ".header", correct: false },
      { rep: "header", correct: false },
      { rep: "*header", correct: false },
    ],
  },
  {
    question:
      "Quelle propriété CSS est utilisée pour changer la police de caractère d'un texte?",
    reponse: [
      { rep: "text-family", correct: false },
      { rep: "font-family", correct: true },
      { rep: "font-style", correct: false },
      { rep: "text-style", correct: false },
    ],
  },
];

const QUIZ_JS = [
  {
    question: "Que signifie 'NaN' en JavaScript?",
    reponse: [
      { rep: "Not a Number", correct: true },
      { rep: "Not a Null", correct: false },
      { rep: "Not a Node", correct: false },
      { rep: "Not a Namespace", correct: false },
    ],
  },
  {
    question: "Comment déclare-t-on une variable en JavaScript?",
    reponse: [
      { rep: "let", correct: true },
      { rep: "variable", correct: false },
      { rep: "varies", correct: false },
      { rep: "vardeclare", correct: false },
    ],
  },
  {
    question:
      "Quelle méthode est utilisée pour écrire sur la console en JavaScript?",
    reponse: [
      { rep: "console.log()", correct: true },
      { rep: "console.write()", correct: false },
      { rep: "console.output()", correct: false },
      { rep: "console.print()", correct: false },
    ],
  },
  {
    question: "Comment appelle-t-on une fonction en JavaScript?",
    reponse: [
      { rep: "function()", correct: false },
      { rep: "function[]", correct: false },
      { rep: "function{}", correct: false },
      { rep: "functionName()", correct: true },
    ],
  },
  {
    question: "Quel est le résultat de '2' + 2 en JavaScript?",
    reponse: [
      { rep: "22", correct: true },
      { rep: "4", correct: false },
      { rep: "NaN", correct: false },
      { rep: "Error", correct: false },
    ],
  },
];

const QUIZ_BOOTSTRAP = [
  {
    question: "Que signifie Bootstrap en termes de développement web?",
    reponse: [
      {
        rep: "Un framework CSS pour créer des sites web réactifs",
        correct: true,
      },
      { rep: "Un langage de programmation", correct: false },
      { rep: "Un éditeur de texte", correct: false },
      { rep: "Un outil de débogage", correct: false },
    ],
  },
  {
    question:
      "Quel est le préfixe de classe utilisé par défaut pour la grille de Bootstrap?",
    reponse: [
      { rep: ".grid-", correct: false },
      { rep: ".container-", correct: false },
      { rep: ".col-", correct: true },
      { rep: ".row-", correct: false },
    ],
  },
  {
    question:
      "Comment ajoute-t-on une classe Bootstrap pour un bouton primaire?",
    reponse: [
      { rep: "class='btn-primary'", correct: true },
      { rep: "class='button-primary'", correct: false },
      { rep: "class='btn-main'", correct: false },
      { rep: "class='button-main'", correct: false },
    ],
  },
  {
    question:
      "Quelle classe Bootstrap utilise-t-on pour un élément centré horizontalement?",
    reponse: [
      { rep: "center-block", correct: false },
      { rep: "mx-auto", correct: true },
      { rep: "text-center", correct: false },
      { rep: "align-center", correct: false },
    ],
  },
  {
    question:
      "Quelle classe est utilisée pour rendre une image responsive en Bootstrap?",
    reponse: [
      { rep: "img-fluid", correct: true },
      { rep: "img-responsive", correct: false },
      { rep: "img-resize", correct: false },
      { rep: "img-adaptive", correct: false },
    ],
  },
];

export const QUIZS = [
  {
    id: 1,
    quiz: QUIZ_HTML,
  },
  {
    id: 2,
    quiz: QUIZ_CSS,
  },
  {
    id: 3,
    quiz: QUIZ_JS,
  },
  {
    id: 4,
    quiz: QUIZ_BOOTSTRAP,
  },
];
