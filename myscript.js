//Ao clicar em pedra
document.getElementById('pedra').onclick = function() {};

//Ao clicar em papel
document.getElementById('papel').onclick = function() {};

//Ao clicar em tesoura
document.getElementById('tesoura').onclick = function() {};

//Informar o nome do jogador
var jogadorNome;
jogadorNome = prompt('Qual é o seu nome?');

//Mudança da mensagem
document.getElementById('mensagens').innerHTML = 'Bem-Vinde ' + jogadorNome + '! Está preparade? Faça sua jogada.';

//Mudar o nome do jogador
document.getElementById('jogador-nome').innerHTML = jogadorNome;