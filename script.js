//Ao clicar em pedra
document.getElementById('jogador-escolha-1').onclick = function() {
    console.log("pedra")
};

//Ao clicar em papel
document.getElementById('jogador-escolha-2').onclick = function() {
    console.log("papel");
};

//Ao clicar em tesoura
document.getElementById('jogador-escolha-3').onclick = function() {
    console.log("tesoura");
};

//--------------------------------------------------------------------------//

//Informar o nome do jogador
var jogadorNome;
jogadorNome = prompt('Qual é o seu nome?');

//Mudança da mensagem
document.getElementById('mensagens').innerHTML = ('Bem-Vinde ' + jogadorNome + '! Está preparade? Faça sua jogada.');