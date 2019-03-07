//Déclare les variables
var userNbr = document.getElementById('usernbr');
var button = document.getElementById('button');
var essai = 0;
var error = document.getElementById('error');


//fonction pour rafraichir la page
var button2 = document.getElementById("button2");
button2.style.display = "none";
button2.addEventListener('click', function () {
    window.location.reload();
});

//Regex champs
var regexNbr = /^[^-]\s*[1-9]$/;


//Nombre aléatoire
var nbrSolut = Math.floor((Math.random() * 99) + 1);
console.log(nbrSolut);


//Vérifications du champs
userNbr.onblur = function () {
    if (!regexNbr.test(userNbr.value)) {
        error.textContent = "Entre un numero et clique sur valider";
        userNbr.value = "";

    }
};
userNbr.onfocus = function () {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error.textContent = "";
    }
};


//Fonction lancement du jeu pour le bouton
button.addEventListener('click', userAction);

//Fonction lancement du jeu pour la touche Entrée
document.onkeypress = function (event) {
    if (event.keyCode == 13) {
        userAction();
    } else {}
}


function userAction() {

    essai++;
    var list = document.createElement("p");
    var rest = (10 - essai);


    function reset() {
        button.style.display = "none";
        button2.style.display = "block";
        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
    if (userNbr.value == "" ||userNbr.value <0) {
        error.textContent = "Entre un numero entre 1 et 99. " + rest + " tentative(s).";
         userNbr.value = "";

    } else if (userNbr.value < nbrSolut) {
        error.textContent = "C'est plus que " + userNbr.value + ". Il te reste " + rest + " tentative(s).";
        userNbr.value = "";

    } else if (userNbr.value > nbrSolut) {
        error.textContent = "C'est moins que " + userNbr.value + ". Il te reste " + rest + " tentative(s).";
        userNbr.value = "";

    } else if (userNbr.value == nbrSolut) {
        error.textContent = "Bravo. Le nombre est " + userNbr.value + ".\n Tu as reussi en " + essai + " tentative(s).";
        reset();
        userNbr.value = "";

    }
    if (essai == 10) {
        reset();
        error.textContent = "";
        error.textContent = "LOSER !!!! Il fallait trouver " + nbrSolut + ".";
    }
 

}
