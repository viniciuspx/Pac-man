var Jogador = function() {
    this.pontuacao = 0;
    this.nome = 'DEFAULT';
}

Jogador.prototype.alterarPontuacao = function(novaPontuacao) {
    this.pontuacao = novaPontuacao;
}
