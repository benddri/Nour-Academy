const cours = [
  {
    id: 1,
    matiere: "Mathematiques",
    niveau: "2ème année bac",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    prix: 350,
    disponibilite: "Places disponibles",
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
    prix: 450,
    disponibilite: "Places disponibles",
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
    prix: 250,
    disponibilite: "Places disponibles",
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
    prix: 150,
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
    prix: 350,
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
    prix: 450,
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "ordinateur",
    couleur: "#A855F7",
  },
  {
    id: 7,
    matiere: "Informatique",
    niveau: "1ème année collège",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    prix: 250,
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "ordinateur",
    couleur: "#A855F7",
  },
  {
    id: 8,
    matiere: "SVT",
    niveau: "1ème année collège",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    prix: 150,
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "feuille",
    couleur: "#22C55E",
  },
  {
    id: 9,
    matiere: "Arabe",
    niveau: "3ème année collège",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    prix: 350,
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "livre",
    couleur: "#06B6D4",
  },
  {
    id: 10,
    matiere: "Mathematiques",
    niveau: "2ème année bac",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    prix: 350,
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "calculatrice",
    couleur: "#3B82F6",
  },
  {
    id: 11,
    matiere: "Français",
    niveau: "1ème année bac",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    prix: 350,
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "livre",
    couleur: "#8B5CF6",
  },
  {
    id: 12,
    matiere: "Anglais",
    niveau: "Tronc commun",
    format: "Cours en petit groupe",
    planning: "Planning auprès de l'académie",
    tarif: "Tarif à confirmer",
    prix: 350,
    disponibilite: "Places disponibles",
    disponible: true,
    icone: "globe",
    couleur: "#10B981",
  },
];

const cataloge = document.getElementById("catalogue");
const searchInput = document.getElementById("search");
const niveauSelect = document.getElementById("niv");
const matiereSelect = document.getElementById("mat");
const listePanier = document.getElementById("liste-panier");
const prixTotalElement = document.getElementById("prix-total");

let panier = [];          // tableau de les cours ajoutés
let total = 0; //somme des prix

function afficherCours(liste) {
  // on vide le
  cataloge.innerHTML = "";
  // si ne trouve aucan cours
  if (liste.length === 0) {
    cataloge.innerHTML = "<p style='grid-column:1/-1;text-align:center;'>Aucun cours trouvé.</p>";
    return;
  }
  liste.forEach(function (c) {
    const carte = document.createElement("article");
    carte.className = "course-card";
    carte.innerHTML = ` 
    <div class="course-header">
        <div class="course-icon" style="background-color: ${c.couleur}">
          <i class="fa-solid ${getIcone(c.icone)}"></i>
        </div>
        <div>
          <h2>${c.matiere}</h2>
          <p>${c.niveau}</p>
        </div>
      </div>

      <div class="course-info">
        <p><i class="fa-solid fa-people-group"></i> ${c.format}</p>
        <p><i class="fa-regular fa-calendar-days"></i> ${c.planning}</p>
      </div>

      <div class="course-price">${c.prix} MAD / mois</div>
      <p class="availability">${c.disponibilite}</p>

      <button class="Ajouter-btn" data-id="${c.id}">Ajouter</button>
      
      `;
    cataloge.appendChild(carte);
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

// fonction filtrer
function filtrerCours() {
  const recherche = searchInput.value.toLowerCase().trim();
  const niveau = niveauSelect.value;
  const matiere = matiereSelect.value;

  const coursFiltres = cours.filter(function (c) {
    const correspondRecherche = c.matiere.toLowerCase().includes(recherche);

    const correspondNiveau =
      niveau === "" || c.niveau === niveau;

    const correspondMatiere =
      matiere === "" || c.matiere.toLowerCase() === matiere.toLowerCase();

    return correspondRecherche && correspondNiveau && correspondMatiere;
  });

  afficherCours(coursFiltres);
}

// fonction ajoutrt au panier
function ajouterAuPanier(id) {
  const coursTrouve = cours.find(function (c) {
    return c.id === id;
  });
  if (!coursTrouve) return;

  // c'est deja exest
  const dejaAjouter = panier.some(function (c) {
    return c.id === id;
  });
  if (dejaAjouter) {
    alert("ce cours est deja existe !");
    return;
  }

  panier.push(coursTrouve);
  total += coursTrouve.prix;

  // mise ajoure l'affichage
  mettreAjourPanier();
}

function supprimerDuPanier(id) {
  const index = panier.findIndex(function (c) {
    return c.id === id;
  });
  if (index === -1) return;

  //soustrire de prix
  total -= panier[index].prix;
  //supremer de panier
  panier.splice(index, 1);
  
  mettreAjourPanier();
}

function mettreAjourPanier() {
  listePanier.innerHTML = "";
  panier.forEach(function (c) {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="info">
        <h1>${c.matiere}</h1><br>
        <h4>${c.niveau}</h4>
      </div>
      <span class="prix">${c.prix} MAD</span>
      
      <button class="supprimer" data-id="${c.id}">
        <i class="fa-solid fa-trash"></i>
      </button>
      
 
    `;
    listePanier.appendChild(li);
  });
  prixTotalElement.textContent = total;
}




  




//_+++++++++++++++++++++++++++++++++++++++++++++++++++
searchInput.addEventListener("input", filtrerCours);
niveauSelect.addEventListener("change", filtrerCours);
matiereSelect.addEventListener("change", filtrerCours);

// Quand on clique sur "Ajouter" (délégation d'événements)
cataloge.addEventListener("click", function (e) {
  const bouton = e.target.closest(".Ajouter-btn");
  if (!bouton) return;

  const id = parseInt(bouton.dataset.id);
  ajouterAuPanier(id);
});

listePanier.addEventListener("click", function (e) {
  const bouton = e.target.closest(".supprimer");
  if (!bouton) return;

  const id = parseInt(bouton.dataset.id);
  supprimerDuPanier(id);
});

afficherCours(cours);