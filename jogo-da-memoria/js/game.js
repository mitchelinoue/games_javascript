const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer')

//array com todas os personagens das cartas conforme as imagens 
const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

//função criada para repetição de criar uma div com uma class definida
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//variáveia para guardar a informação da carta para saber se são iguais
let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20) {
        clearInterval(this.loop);
        alert(`Parabéns ${apanPlayer.innerHTML}, você conseguiu! Seu tempo foi de: ${timer.innerHTML} segundos`);
    }
}

//para verificar se as 2 cartas de o data-character iguais
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter == secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        //reseta as 2 let
        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        //remove a class reveal-card (desvira as cartas) caso as caras sejam diferentes, e para o jogador ver colocamos um delay de 500ms
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            //reseta as 2 let
            firstCard = '';
            secondCard = '';

        }, 500);
        
    }
}

//para quando clicar em uma das 2 cartas
const revealCard = ({ target }) => {
    //para quando a carta já estiver virada, ela não faça nada ao clicar de novo(bug)
    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    //verifica se a primeira carta está vazia
    if (firstCard == '') {
        //adiciona o class reveal-card na div card se já não estiver. ParentNode serve porque clicamos na face back e queremos que a class reveal-card seja criado no "pai" de face back, que seria a div card. 
        target.parentNode.classList.add('reveal-card');

        //a let firstCard recebe 
        firstCard = target.parentNode;
        
    } else if (secondCard == ''){

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }

    
}

//função para criar a carta, que seria uma div carta com 2 div's dentro, uma face front e uma face back. Também adiciona uma imagem para o face front. Também cria um event.listener. Também cria um atributo (data-xxx)para saber se 2 cartas são iguais.
const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    card.setAttribute('data-character', character)

    return card;
}

//função que inicia o game
const loadGame = () => {
    
    //serve para duplicar a quantidade de personagens. o "..." serve para espalhar os itens do array dentro, então fazemos isso 2 vezes.
    const duplicateCharacter = [...characters, ...characters];

    //serve para embaralhar os personagens
    const shuffledArray = duplicateCharacter.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    })
}

const startTimer = () => {

    //começa a contar o timer
    this.loop = setInterval(() => {

        const currentTimer = +timer.innerHTML;
        timer.innerHTML = currentTimer +1;

    }, 1000);

}

window.onload = () => {

    //pega a key player do local storage e transforma na span player da página HTML com o nome do jogador
    spanPlayer.innerHTML = localStorage.getItem('Player');

    startTimer();

    loadGame(); 
}

