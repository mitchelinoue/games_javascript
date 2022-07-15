const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

//serve para validar o nome do jogador e liberar o button play
const validateInput = ({target}) => {

    //verifica se o nome digitado tem pelo menos 2 caracteres
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }

    //caso não tenha 2 caracteres ou se for apagado
    button.setAttribute('disabled', '');
}

//serve para salvar o nome do jogador no local storage do próprio navegador
const handleSubmit = (event) => {

    //serve para que o formulário não faça o comportamento padrão de enviar os valores e recarregar a página
    event.preventDefault();

    //salva o valor do nome digitado (input.value) no parâmetro player que eu defini
    localStorage.setItem('Player', input.value);
    window.location = 'pages/game.html'


}

//serve para escanear pelo evento de escrever no input text
input.addEventListener('input', validateInput);

//serve para escanear pelo evento de apetar o button play
form.addEventListener('submit', handleSubmit);