const grid = document.querySelector('.grid');

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

//função para criar a carta, que seria uma div carta com 2 div's dentro, uma face front e uma face back. Também adiciona uma imagem para o face front.
const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

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

loadGame();