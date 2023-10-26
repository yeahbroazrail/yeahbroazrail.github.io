const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
const questions = [
    {
        question: "QUEL AGENT A LA CAPACITE DE MANIPULER LES CAUCHEMARS ?",
        options: ["Yoru", "Fade", "Omen"],
        correctAnswer: 1
    },
    {
        question: "Quel agent etait en prison avant d'etre recrute dans l'escouade Valorant ?",
        options: ["Deadlock", "Breach", "Gekko"],
        correctAnswer: 1
    },
    {
        question: "Quelle est la plus grande peur de KAY/O ?",
        options: ["Reyna", "La fin du monde", "La mort de Brimstone"],
        correctAnswer: 2
    },
    {
        question: "Quel est le nom officiel de la Terre parrallele ?",
        options: ["Terre Omega", "Terre Alpha", "Terre Delta"],
        correctAnswer: 0
    },
    {
        question: "Qui a provoque l'incident de Venise (la map Ascent)",
        options: ["Omen", "Omega Phoenix", "Omega Jett"],
        correctAnswer: 2
    },
    {
        question: "Quel est le passe entre Reyna et Viper",
        options: ["Viper aide Reyna a sauver sa petite soeur Lucia de son coma", "Viper est la soeur perdue de Reyna", "Viper etait la cause de la mort du mari de Reyna"],
        correctAnswer: 0
    },
    {
        question: "Quel est le vrai nom de Viper ?",
        options: ["Sabine Callas", "Fabrice Callas", "Josephine Callas"],
        correctAnswer: 0
    },
    {
        question: "Quel agent a pour capacite de manipuler les ames et les utiliser ?",
        options: ["Omen", "Reyna", "Skye"],
        correctAnswer: 1
    },
    {
        question: "Quel agent a incendie son ecole d'arts vivants ?",
        options: ["Brimstone", "Gekko", "Phoenix"],
        correctAnswer: 2
    },
    {
        question: "Quel est le nom de l'aimee de Cypher ?",
        options: ["Nora", "Khadija", "Fatima"],
        correctAnswer: 0
    },
];

let currentQuestion = 0;
let feedback = [];
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
        feedback.push("Bonne reponse Question : " + (currentQuestion + 1) + " La reponse correcte etait: " + questions[currentQuestion].options[questions[currentQuestion].correctAnswer]);
        score++;
    } else {
        feedback.push("Mauvaise reponse pour la question " + (currentQuestion + 1) + ". La reponse correcte etait: " + questions[currentQuestion].options[questions[currentQuestion].correctAnswer]);
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        displayScoreAndFeedback();
    }
}

function displayScoreAndFeedback() {
    questionElement.textContent = "Resultats du quiz";
    optionsContainer.innerHTML = "";

    const scoreDisplay = document.createElement("p");
    scoreDisplay.textContent = score + " / " + questions.length;
    scoreDisplay.style.fontWeight = "bold"; // Ajoutez du style au texte du score
    scoreDisplay.style.fontSize = "40px"; // Modifiez la taille de la police du score
    scoreDisplay.style.color = "#fa4454"; // Modifiez la couleur du score en vert
    scoreDisplay.style.fontFamily = "'Policevalo'"; // Modifiez la font
    optionsContainer.appendChild(scoreDisplay);

    const feedbackList = document.createElement("ul");

    feedback.forEach((message, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = message;
        if (message.startsWith("Bonne")) {
            listItem.style.color = "green"; // Modifiez la couleur du texte des bonnes réponses en vert
            listItem.style.fontFamily = "'Impact'"; // Modifiez la font
        } else {
            listItem.style.color = "red"; // Modifiez la couleur du texte des mauvaises réponses en rouge
            listItem.style.fontFamily = "'Impact'"; // Modifiez la font
        }
        feedbackList.appendChild(listItem);
    });

    optionsContainer.appendChild(feedbackList);

    // Afficher le bouton de rafraîchissement uniquement à la fin du quiz
    const refreshButton = document.getElementById("refresh-button");
    refreshButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    }
});
const refreshButton = document.getElementById("refresh-button");

refreshButton.addEventListener("click", () => {
    location.reload(); // Actualiser la page lorsque le bouton est cliqué
});

showQuestion(currentQuestion);