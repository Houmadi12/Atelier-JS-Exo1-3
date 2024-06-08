// Une fonction de validation de formulaire
let nombre = 0;
let res = 0;
let response = document.getElementById("respons");

form.onsubmit = () => {
    nombre = Number.parseInt(document.getElementById("nbr").value);
    res = nombre % 2;

    if( res === 0 ){
        respons.textContent = "Le nombre est pair";
    } else {
        respons.textContent = "Le nombre est impair";
    }

    // respons.textContent = nb1+nb2;

    return false;
} 



