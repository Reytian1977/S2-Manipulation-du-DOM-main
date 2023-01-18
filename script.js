const panier = {
    pommes : 2,
    poires : 0,
    prunes : 0
}

// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;


function Ajouter(fruit) {
    let Prix;
    let Poids;
    let id;

    if(fruit === 1)
    {
        Prix = 13.50;
        Poids = 10;
        id = "poidsPommes";
    }
    if(fruit === 2)
    {
        Prix = 20.00;
        Poids = 12;
        id = "poidsPoires";
    }
    if(fruit === 3)
    {
        Prix = 22.00;
        Poids = 15;
        id = "poidsPrunes";
    }

    // Mettre à jour la Quantité
    let Qte = document.getElementById("qtePommes").innerText;
    let NewQte = +Qte + +Qte;
    document.getElementById("qtePommes").innerText = NewQte;

    // Mettre à jour le Poids
    Poids = document.getElementById(id).innerText;
    let NewPoids = +Poids + +Poids;
    document.getElementById(id).innerText = NewPoids;
}
