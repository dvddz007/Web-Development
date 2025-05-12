let input = "";

// Estrae tutti i tag "button"
const buttons = document.querySelectorAll("button");

function Stampa() {
    // "this" si riferisce al bottone che ha scatenato l'evento
    let valore = this.innerText;
    input += valore;
    document.getElementById("display").innerText = input;
}

// per ogni button premuto aggiungi l'event listener
// function(button) crea una funzione anonima che esegue un'altra funzione
buttons.forEach(function(button) {
    button.addEventListener("click", Stampa);
});
