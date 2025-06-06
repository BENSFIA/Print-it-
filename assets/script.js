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
  for (let i = 0; i < slides.length; i++) {
    // une div pour chaque dot
    const dot = document.createElement("div");
    // ajouter des classes
    dot.classList.add("dot");
    // ajouter un attribut data-index pour identifier le dot
    dot.dataset.slide = i;
    // Modification de la couleur de fond et de la bordure
    dot.style.backgroundColor = "#000000";
    dot.style.borderColor = "#000000";
    // Ajout d'un écouteur d'événement pour chaque dot
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlide();
    });
  }
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
updateSlide();
