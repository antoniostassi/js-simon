const startButton = document.querySelector("button");
const divToMemorize = document.getElementById("numbersToMemorize");
const timerTag = document.getElementById("timer");
const randomNumbers = [];
const userNumbers = [];
let gameOver = false;
let clicked = false;

let memorizingInterval;
let countdownNumber = 4;


function getRandomInt(max) { // Funzione per generare numeri random
    return Math.floor(Math.random() * max);
}

for (let k=0;k < 5;k++) {
    let generatedNumber = getRandomInt(100);
    divToMemorize.innerHTML += "<p style='margin:15px 5px;'><strong>" + generatedNumber + "</strong></p>";
    randomNumbers.push(generatedNumber); // Salvo in un array i numeri da memorizzare
}

console.log(randomNumbers);

startButton.addEventListener("click", function() {
    if(!clicked) { // Se non è già stato cliccato
        memorizingInterval = setInterval(askNumbers, 1000); // Intervallo da ripetere ad ogni secondo
        clicked = !clicked;
    }
});


function askNumbers(){
    
    if (countdownNumber > 0) {

        timerTag.innerHTML = "<strong>"+ countdownNumber +"</strong>";
        console.log(countdownNumber);
        countdownNumber--;

    } else {
        // Sono finiti i 5 secondi;
        clearInterval(memorizingInterval); // Fermo il Timer, questa sarà l'ultima esecuzione della funzione.
        memorizingInterval = null;  // Cancello il Timer.

        timerTag.innerHTML = "<p><strong>"+ 0 +"</p></strong>";
        divToMemorize.innerHTML = ""; // Nascondi i numeri

        setTimeout(function(){
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

            location.reload();

        }, 100);

        
    }
}
