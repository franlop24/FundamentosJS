const btnPlay = document.querySelector('button');//apuntar a botón
const divUser =  document.querySelector('#user'); // apuntar al div del usuario
const divMaq =  document.querySelector('#compu'); // apuntar al div de la maquina
const message =  document.querySelector('#message'); // apuntar al mensaje
const imgUser = document.querySelector('#imgUser');
const imgCompu = document.querySelector('#imgCompu');

const play = () => {
    const choiceUser = prompt('Elije: piedra, papel o tijeras');
    const aleatorio = Math.floor(Math.random() * 3);
    //TODO
    const choices = ['piedra', 'papel', 'tijeras'];
    const choicesImg = ['./rock.png', './paper.png', './scissors.png'];
    choiseCompu = choices[aleatorio];
    //Comparaciones para deternimar ganador
    let result;
    if(choiceUser === choiseCompu){
        result = "Empate!";
    } else if (choiceUser === 'piedra' && choiseCompu === 'tijeras' ||
        choiceUser === 'tijeras' && choiseCompu === 'papel' ||
        choiceUser === 'papel' && choiseCompu === 'piedra'){
        result = 'Ganaste!';
    }
    else {
        result = 'Perdiste!';
    }
    divUser.innerText = choiceUser;
    divMaq.innerText = choiseCompu;
    imgCompu.src = choicesImg[aleatorio];
    imgUser.src = choicesImg[choices.findIndex(choice => choice === choiceUser)];
    message.innerText = result;
}

btnPlay.addEventListener('click', play);