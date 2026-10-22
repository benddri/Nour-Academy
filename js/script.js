const cours = [
  {
    id: 1,
    matiere: "Mathematiques",
    niveau: "2ème année bac",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "calculatrice",
    couleur: "#3B82F6",
  },
  {
    id: 2,
    matiere: "Français",
    niveau: "1ème année bac",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "livre",
    couleur: "#8B5CF6",
  },
  {
    id: 3,
    matiere: "Anglais",
    niveau: "2ème année collège",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "globe",
    couleur: "#10B981",
  },
  {
    id: 4,
    matiere: "Arabe",
    niveau: "1ème année collège",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "livre",
    couleur: "#06B6D4",
  },
  {
    id: 5,
    matiere: "SVT",
    niveau: "Tronc commun",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "feuille",
    couleur: "#22C55E",
  },
  {
    id: 6,
    matiere: "Informatique",
    niveau: "3ème année collège",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "ordinateur",
    couleur: "#A855F7",
  },
];

const searchInput = document.getElementById("search");
const niveauSelect = document.getElementById("niv");
const matiereSelect = document.getElementById("mat");
const catalogue = document.querySelector("section .container");

function afficherCours(listeCours) {
  catalogue.innerHTML = "";

  // if (listeCours.length === 0) {
  //     catalogue.innerHTML = "<p>Aucun cours trouvé.</p>";
  //     return;
  // }

  listeCours.forEach(function (cours) {
    const carte = document.createElement("article");
    carte.classList.add("course-card");

    carte.innerHTML = `
            <div class="course-header">
                <div class="course-icon" style="background-color: ${cours.couleur}">
                    <i class="fa-solid ${getIcone(cours.icone)}"></i>
                </div>

                <div>
                    <h2>${cours.matiere}</h2>
                    <p>${cours.niveau}</p>
                </div>
            </div>

            <div class="course-info">
                <p>${cours.format}</p>
                <p>${cours.planning}</p>
            </div>

            <h3 class="course-price">${cours.tarif}</h3>

            <p class="availability">
                ${cours.disponibilite}
            </p>

            <a href="#" class="details-btn">Détails</a>
        `;

    catalogue.appendChild(carte);
  });
}

function getIcone(nomIcone) {
  const icones = {
    calculatrice: "fa-calculator",
    livre: "fa-book",
    globe: "fa-globe",
    feuille: "fa-leaf",
    ordinateur: "fa-laptop",
  };

  return icones[nomIcone] || "fa-book";
}

function filtrerCours() {
  const recherche = searchInput.value.toLowerCase().trim();
  const niveau = niveauSelect.value;
  const matiere = matiereSelect.value;

  const coursFiltres = cours.filter(function (c) {
    const correspondRecherche = c.matiere.toLowerCase().includes(recherche);
    console.log(recherche );
    

    const correspondNiveau =
      niveau === "" ||
      c.niveau === niveauSelect.options[niveauSelect.selectedIndex].text;

    const correspondMatiere =
      matiere === "" || c.matiere.toLowerCase() === matiere.toLowerCase();
    //   console.log(matiere);
    //   console.log(c.matiere);

    return correspondRecherche && correspondNiveau && correspondMatiere;
  });

  afficherCours(coursFiltres);
}
function inscrire(matiere) {
  alert("Vous êtes inscrit au cours : " + matiere);
}

searchInput.addEventListener("input", filtrerCours);
niveauSelect.addEventListener("change", filtrerCours);
matiereSelect.addEventListener("change", filtrerCours);

afficherCours(cours);



