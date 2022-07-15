
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    //adiciona a class jump na imagem(faz pular)
    mario.classList.add('jump');

    //retira a class jump na imagem depois de um tempo(para poder pular novamente)
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {
    //para saber a posição do pipe na horizontal
    const pipePosition = pipe.offsetLeft; 
    //para saber a altura do mario
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); 
    
    //condição para perder o jogo
    if (pipePosition <= 125 && marioPosition < 100 && pipePosition > 0 ) {

        //para a animação pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        //para a animação mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        //muda a imagem para mario morrendo
        mario.src = 'images/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        //stopa o event.listener que fica rodando direto
        clearInterval(loop);
    }

}, 10)
 

//verifica se algum botão foi acionado para pular
document.addEventListener('keydown', jump)