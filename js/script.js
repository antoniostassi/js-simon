const startButton = document.querySelector("button");
const randomNumbers = [];
const userNumbers = [];
let gameOver = false;
let clicked = false;

let memorizingInterval;
let countdownNumber = 5;

function getRandomInt(max) { // Funzione per generare numeri random
    return Math.floor(Math.random() * max);
}

for (let k=0;k < 5;k++) {
    randomNumbers.push(getRandomInt(100)); // Salvo in un array i numeri da memorizzare

}

console.log(randomNumbers);

startButton.addEventListener("click", function() {
    if(!clicked) {
        memorizingInterval = setInterval(askNumbers, 1000); // Intervallo da ripetere ad ogni secondo
        clicked = !clicked;
    }
});


function askNumbers(){
    
    if (countdownNumber > 0) {

        console.log(countdownNumber);
        countdownNumber--;

    } else {
        // Sono finiti i 5 secondi;
        clearInterval(memorizingInterval); // Fermo il Timer, questa sarà l'ultima esecuzione della funzione.
        memorizingInterval = null;  // Cancello il Timer.
        for (let k=0; k < 5; k++) {
            let userNum = parseInt(prompt((k+1) + " - Indovina un numero:")); // Chiedo gli input all'utente.
            userNumbers.push(userNum); // Salvo tutti gli input dell'utente.
        }
        console.log(userNumbers); // Stampo l'array contenente gli input dell'utente.

        for (let k=0; k < userNumbers.length; k++) { 
            if (!randomNumbers.includes(userNumbers[k])) { // Se almeno un numero non è contenuto nell'array dei numeri da ricordare
                alert("Hai perso!"); // Allora hai perso
                gameOver = true; // gameOver status == true;
                break; // Ferma il ciclo
            }
        }

        if(gameOver == false) { // Se non hai perso, gameOver è ancora = false, dunque
            alert("Hai vinto!"); // Hai Vinto
        }
    }
}