# Pac-Man
## Projeto de Software Pac-Man

<!-- ![Pac-man-logo](https://upload.wikimedia.org/wikipedia/en/f/fc/Pac-Man_logo.png) -->
<!-- ![Pac-man](http://images.uncyc.org/pt/0/07/FANTASMASPACMAN.jpg) -->

<img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Pac-Man_logo.png" align="middle">
<img src="http://images.uncyc.org/pt/0/07/FANTASMASPACMAN.jpg" width="64" align="right">

Projeto desenvolvido na disciplina Projeto de Software no curso de Ciência da Computação da Universidade Federal de Goiás.

## Descrição

O sistema é um jogo que será disponibilizado no formato web, o jogo consiste em um estilo parecido com o do famoso Pac-Man. O jogador principal controla um personagem que deve se movimentar em quatro direções (Cima, Baixo, Esquerda e Direita) em uma mapa de duas dimensões, coletando o máximo de moedas e acumulando pontos e eventualmente escapando de inimigos que possuem características diferentes quanto a movimentação.
Será utilizado um sistema Cliente-Servidor e um padrão arquitetural do tipo MVC (Model View Controller). Para padrão de projeto foram escolhidos, Observer e Flyweight. Para facilitar as mecanicas do jogo em relação aos inimigos, como há muitas mudanças de estados, utilizaremos o padrão de projeto Observer. Como se trata de um jogo com poucos sprites mas muita repetição dos mesmos, utilizaremos o padrão Flyweight. Ambos os padrões são amplamente utilizados no mercado de jogos.

## Links

https://docs.google.com/document/d/1z_Lm2rUmPwJN0wvyUX3KBT8OHxL-XucKvLpVHH042wU