//------------------Variáveis-------------------------//
var computadorEscolha = 0;
var jogadorEscolha = 0;

var jogadorPontos = 0;
var computadorPontos = 0;


//----------------------Funções-----------------------//

function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selec');
}

function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selec');
}

function somarPontoJogador() {
    jogadorPontos++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

function somarPontoComputador() {
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

function definirNomeJogador (nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
}

function mensagem(texto) {
    document.getElementById('mensagens').innerHTML = texto;
}

function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Função do ganhador
//0 - Empate
//1 - Jogador
//2 - Computador
function calcularEscolha(jogador, computador) {
    if (jogador == computador) {
        return 0;
    } else if (jogador == 1 && computador == 2) {
        return 2;
    } else if (jogador == 1 && computador == 3) {
        return 1;
    } else if (jogador == 2 && computador == 1) {
        return 1;
    } else if (jogador == 2 && computador == 3) {
        return 2;
    } else if (jogador == 3 && computador == 1) {
        return 2;
    } else if (jogador == 3 && computador == 2) {
        return 1;
    };
}

//Escolhe a jogada
//1 - pedra
//2 - papel
//3 - tesoura
function jogar(escolha) {
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
    
    if (ganhador == 0) {
        mensagem("Empate")
    } else if (ganhador == 1) {
        mensagem("Ponto para " + jogadorNome)
        somarPontoJogador();
    } else if (ganhador == 2) {
        mensagem("Ponto para o Computador")
        somarPontoComputador();
    }

    setTimeout(function() {
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);

        mensagem(jogadorNome + ', faça sua jogada.');
    }, 3000);

}

//---------------------------------------------------//

//Ao clicar em pedra
document.getElementById('jogador-escolha-1').onclick = function() {
    jogar(1);
};

//Ao clicar em papel
document.getElementById('jogador-escolha-2').onclick = function() {
    jogar(2);
};

//Ao clicar em tesoura
document.getElementById('jogador-escolha-3').onclick = function() {
    jogar(3);
};

//--------------------------------------------------------------------------//

//Informar o nome do jogador
var jogadorNome;
jogadorNome = prompt('Qual é o seu nome?');

//Mudança da mensagem
mensagem('Bem-Vinde ' + jogadorNome + '! Está preparade? Faça sua jogada.');

//Mudar o nome do jogador
definirNomeJogador(jogadorNome);

//------------------------------------------------------------------------//