// apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightBall = () => {
    // TODO
    // crear número aleatorio (0 - 7)
    const choice = Math.floor(Math.random() * 7);
    // switch/case para mensajes distintos
    const choices = [
        '🔥',
        '🍔',
        '🍺',
        '🎃',
        '🤡',
        '🐶',
        '🐮'
    ]
    message.innerText = choices[choice];
}

ball.addEventListener('click', eightBall);