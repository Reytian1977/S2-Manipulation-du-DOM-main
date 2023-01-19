const panier = {
    pommes : 2,
    poires : 0,
    prunes : 0
}

// Pour afficher le nombre de pommes dans la facture détaillée
//document.querySelector("#qtePommes").textContent = panier.pommes;

let QteTotal = 0;
let PrixTotal = 0;
let PoidsTotal = 0;
let Prix;
let Poids;
let Qte = 1;
let idPoids;
let idPrix;
let idQte;

function Ajouter(fruit) {


    if (fruit === 1) {
        Prix = parseFloat(document.getElementById("prixpomme").innerText);
        Poids = parseFloat(document.getElementById("poidspomme").innerText);
        idPoids = "poidsPommes";
        idPrix = "prixPommes";
        idQte = "qtePommes";
    }
    if (fruit === 2) {
        Prix = parseFloat(document.getElementById("prixpoire").innerText);
        Poids = parseFloat(document.getElementById("poidspoire").innerText);
        idPoids = "poidsPoires";
        idPrix = "prixPoires";
        idQte = "qtePoires";
    }
    if (fruit === 3) {
        Prix = parseFloat(document.getElementById("prixprune").innerText);
        Poids = parseFloat(document.getElementById("poidprune").innerText);
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

    // ------------------------Mettre à jour le Total

    // Mettre à jour le Qte total
    let anQteTotal = document.getElementById("qteTotal").innerText;
    let NewQteTotal = +anQteTotal + 1;
    document.getElementById("qteTotal").innerText = NewQteTotal;

    // Mettre à jour le Poids total
    let anPoidsTotal = document.getElementById("poidsTotal").innerText;
    let NewPoidsTotal = +anPoidsTotal + Poids;
    document.getElementById("poidsTotal").innerText = NewPoidsTotal;

    // Mettre à jour le Poids total
    let anPrixTotal = document.getElementById("prixTotal").innerText;
    let NewPrixTotal = +anPrixTotal + +Prix;
    document.getElementById("prixTotal").innerText = NewPrixTotal;

}



