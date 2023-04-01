const participante = document.querySelector('.participante');
const pipe = document.querySelector('.pipe');

const jump = () => {
    participante.classList.add('jump');

    setTimeout(() => {
        participante.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const participantePosition = +window.getComputedStyle(participante).bottom.replace('px', '');

    if (pipePosition <= 110 && pipePosition > 0 && participantePosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        participante.style.animation = 'none';
        participante.style.bottom = `${participantePosition}px`;

        participante.src = './assets/img/comunismo gamer.jpeg';
        // participante.style.width = '75px';
        participante.style.marginLeft = '30px';

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);