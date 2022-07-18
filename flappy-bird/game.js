console.log();

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,

    desenha() {
        contexto.drawImage(
            sprites, // imagem source
            chao.spriteX, chao.spriteY, //localização x e y no source (canto superior esquerdo)
            chao.largura, chao.altura, // tamanho x e y da imagem no source
            chao.x, chao.y, //localização x e y no canvas (canto superior esquerdo)
            chao.largura, chao.altura, // tamanho x e y da imagem no canvas
        );
        
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,
        );
    },
};

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 10,

    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura,
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    },
};

function loop() {
    flappyBird.desenha();
    chao.desenha();

    requestAnimationFrame(loop);
}

loop ();