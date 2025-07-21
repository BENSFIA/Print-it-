const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const bannerImage = document.querySelector(".banner-img");
const tagLineElement = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const dotsContainer = document.querySelector(".dots");
console.log(bannerImage);
console.log(tagLineElement);
console.log(dots);
console.log(dotsContainer);

// Ecouteur d'évenement pour la flèche gauche
arrowLeft.addEventListener("click", () => {
  console.log("Flèche gauche cliquée");
});

// Ecouteur d'évenement pour la flèche droite
arrowRight.addEventListener("click", () => {
  console.log("Flèche droite cliquée");
});

let currentIndex = 0;

const updateSlide = () => {
  bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  tagLineElement.innerHTML = slides[currentIndex].tagLine;

  updateDots();
};
// Fonction pour créer les dots
const createDots = () => {
  slides.forEach((_, index) => {
    // _ : On utilise un underscore (_) comme premier argument pour indiquer que nous n'avons pas besoin de l'élément lui-même, juste de sa position.
    // Crée une div pour chaque dot
    const dot = document.createElement("div");

    // Ajoute la classe CSS "dot"
    dot.classList.add("dot");

    // Ajoute un attribut 'data-slide' avec la valeur de l'index
    dot.dataset.slide = index;

    // Modifie le style du dot
    dot.style.backgroundColor = "#000000";
    dot.style.borderColor = "#000000";

    // Ajoute le dot au conteneur
    dotsContainer.appendChild(dot);

    // Ajoute un écouteur d'événement pour mettre à jour le slide au clic
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlide();
    });
  });
};
// Fonction pour mettre à jour les dots

const updateDots = () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
      dot.style.backgroundColor = "";
      dot.style.borderColor = "";
    } else {
      dot.classList.remove("dot_selected");
      dot.style.backgroundColor = "#fff";
      dot.style.borderColor = "#000000";
    }
  });
};
// Ces écouteurs gèrent les clics sur les flèches pour changer de slide.

arrowLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateSlide();
});

// Ecouteur d'évenement pour la flèche droite
arrowRight.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlide();
});
createDots();
document.addEventListener("DOMContentLoaded", () => {
  const cloudsSection = document.querySelector(".clouds");
  const bigCloud = document.querySelector(".big-cloud");
  const littleCloud = document.querySelector(".little-cloud");

  // Sécurité si les éléments n'existent pas
  if (!cloudsSection || !bigCloud || !littleCloud) {
    console.warn("Un ou plusieurs éléments de nuage sont manquants.");
    return;
  }
});
