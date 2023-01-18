const panier = {
    pommes : 2,
    poires : 0,
    prunes : 0
}

// Pour afficher le nombre de pommes dans la facture détaillée
//document.querySelector("#qtePommes").textContent = panier.pommes;


function Ajouter(fruit) {
    let Prix;
    let Poids;
    let Qte = 1;
    let idPoids;
    let idPrix;
    let idQte;

    if (fruit === 1) {
        Prix = 13.50;
        Poids = 10;
        idPoids = "poidsPommes";
        idPrix = "prixPommes";
        idQte = "qtePommes";
    }
    if (fruit === 2) {
        Prix = document.getElementById("prixpoire");
        Poids = document.getElementById("poidspoire");
        idPoids = "poidsPoires";
        idPrix = "prixPoires";
        idQte = "qtePoires";
    }
    if (fruit === 3) {
        Prix = document.getElementById("prixprune");
        Poids = document.getElementById("poidprune");
        idPoids = "poidsPrunes";
        idPrix = "prixPrunes";
        idQte = "qtePrunes";
    }

    // Mettre à jour la Quantité
    let anQte = document.getElementById(idQte).innerText;
    let NewQte = +anQte + +Qte;
    document.getElementById(idQte).innerText = NewQte;

    // Mettre à jour le Poids
    let anPoids = document.getElementById(idPoids).innerText;
    let NewPoids = +anPoids + +Poids;
    document.getElementById(idPoids).innerText = NewPoids;

    // Mettre à jour le Prix
    let anPrix = document.getElementById(idPrix).innerText;
    let NewPrix = +anPrix + +Prix;
    document.getElementById(idPrix).innerText = NewPrix;
}
// falta mas