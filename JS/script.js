const bells = new Audio('./sounds/bell.wav'); //Crea un objeto de audio
const startBtn = document.querySelector('.btn-start');  //Seleccina el botón de inicio
const session = document.querySelector('.minutes'); // Selecciona los minutos
let myInterval;  //Variable para almacenar el timer
let state = true; //Estado inicial


const appTimer = () => { //Función principal
    const sessionAmount = Number.parseInt(session.textContent) //Pasa el texto de minutos a Numero

    if(state) {
        state = false;
        let totalSeconds = sessionAmount * 60; //Transforma los minutos a segundos 

        const updateSeconds = () => {

        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');

        totalSeconds--; //Segundos -1 

        let minutesLeft = Math.floor(totalSeconds/60); //Minutos restantes
        let secondsLeft = totalSeconds % 60; //Segundos restantes

        if(secondsLeft < 10) {
            secondDiv.textContent = '0' + secondsLeft;
        } else {
            secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`

        if(minutesLeft === 0 && secondsLeft === 0) {
            bells.play()
            clearInterval(myInterval);
        }

                
            
        }

    myInterval = setInterval(updateSeconds, 1000);
    } 
    
    
    else {
    alert('Session has already started.')
    }

    
}

    startBtn.addEventListener('click', appTimer);