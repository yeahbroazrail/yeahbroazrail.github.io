const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
const images = ["Viper_Artwork_Full.webp", "Breach_Artwork_Full.webp", "Cypher_Artwork_Full.webp" , "Astra_Artwork_Full.webp", "Brimstone.webp", "Reyna_Artwork_Full.webp", "Neon_Artwork_Full.webp", "Jett_Artwork_Full.webp", "Sage_Artwork_Full.webp", "Omen_Artwork_Full.webp"]; // Liste des images à deviner
let index = 0; // Index de l'image actuelle
let score = 0; // Ajout de la variable score

const imageElement = document.getElementById("image");
const reponseElement = document.getElementById("reponse");
const resultatElement = document.getElementById("resultat");
const suivantButton = document.getElementById("suivant");
const totalImagesElement = document.getElementById("total-images");
const scoreFinalElement = document.getElementById("score-final");
const resultatFinalElement = document.getElementById("resultat-final");
const imagesNonDevinéesElement = document.getElementById("images-non-devinees");


function verifierReponse() {
    const reponseUtilisateur = reponseElement.value.toLowerCase(); // Convertir en minuscules pour la comparaison
    const reponseCorrecte = obtenirReponseCorrecte(images[index]); // Fonction pour obtenir la réponse correcte en fonction de l'image actuelle

    if (reponseUtilisateur === reponseCorrecte) {
        resultatElement.textContent = "CORRECT";
        score++;
        resultatElement.style.marginTop = "20px"; // Modifiez la couleur du texte des bonnes réponses en vert
        resultatElement.style.fontSize = "40px"; // Modifiez la couleur du texte des bonnes réponses en vert
        resultatElement.style.color = "green"; // Modifiez la couleur du texte des bonnes réponses en vert
        resultatElement.style.fontFamily = "'Policevalo'"; // Modifiez la font
    } else {
        resultatElement.textContent = "INCORECT L'agent etait " + reponseCorrecte;
        resultatElement.style.marginTop = "30px"; // Modifiez la couleur du texte des bonnes réponses en vert
        resultatElement.style.fontSize = "20px"; // Modifiez la couleur du texte des bonnes réponses en vert
        resultatElement.style.color = "red"; // Modifiez la couleur du texte des bonnes réponses en vert
        resultatElement.style.fontFamily = "'Policevalo'"; // Modifiez la font
    }

    // Rétablir les couleurs de l'image
    imageElement.style.filter = "none";

    suivantButton.style.display = "block";
    reponseElement.disabled = true;
}

function imageSuivante() {
    index++;

    if (index < images.length) {
        // Charger l'image suivante
        imageElement.src = images[index];
        imageElement.style.filter = "brightness(0)"; // Mettre en noir 
        reponseElement.value = "";
        resultatElement.textContent = "";
        suivantButton.style.display = "none";
        reponseElement.disabled = false;
    } else {
        // Fin du jeu
        resultatFinalElement.style.display = "block";
        totalImagesElement.textContent = images.length;
        scoreFinalElement.textContent = score + " / " ;
        suivant.style.display = "none";
        verifier.style.display = "none";
        // Afficher le récapitulatif des images non devinées
        
    }
}

function obtenirReponseCorrecte(image) {
    // Vous pouvez implémenter ici la logique pour obtenir la réponse correcte en fonction de l'image.
    // Par exemple, vous pouvez utiliser un objet ou une liste de correspondances image->réponse.
    // Pour cet exemple, nous supposerons un objet de correspondance.
    const reponses = {
        "Viper_Artwork_Full.webp": "viper",
        "Breach_Artwork_Full.webp": "breach",
        "Cypher_Artwork_Full.webp": "cypher",
        "Astra_Artwork_Full.webp" : "astra",
        "Brimstone.webp" : "brimstone",
        "Reyna_Artwork_Full.webp" : "reyna",
        "Neon_Artwork_Full.webp" : "neon",
        "Jett_Artwork_Full.webp" : "jett",
        "Sage_Artwork_Full.webp" : "sage",
        "Omen_Artwork_Full.webp" : "omen",
    };

    return reponses[image];
}
document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload(); // Cette ligne actualise la page
  });