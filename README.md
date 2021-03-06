# Pac-Man
## Projeto de Software Pac-Man

<!-- ![Pac-man-logo](https://upload.wikimedia.org/wikipedia/en/f/fc/Pac-Man_logo.png) -->
<!-- ![Pac-man](http://images.uncyc.org/pt/0/07/FANTASMASPACMAN.jpg) -->

<img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Pac-Man_logo.png" align="center">
<img src="http://images.uncyc.org/pt/0/07/FANTASMASPACMAN.jpg" width="64" align="right">

Projeto desenvolvido na disciplina Projeto de Software no curso de Ciência da Computação da Universidade Federal de Goiás.

## Descrição

O sistema é um jogo que será disponibilizado no formato web, o jogo consiste em um estilo parecido com o do famoso Pac-Man. O jogador principal controla um personagem que deve se movimentar em quatro direções (Cima, Baixo, Esquerda e Direita) em uma mapa de duas dimensões, coletando o máximo de moedas e acumulando pontos e eventualmente escapando de inimigos que possuem características diferentes quanto a movimentação.
Será utilizado um sistema Cliente-Servidor e um padrão arquitetural do tipo MVC (Model View Controller). Para padrão de projeto foram escolhidos, Observer e Flyweight. Para facilitar as mecanicas do jogo em relação aos inimigos, como há muitas mudanças de estados, utilizaremos o padrão de projeto Observer. Como se trata de um jogo com poucos sprites mas muita repetição dos mesmos, utilizaremos o padrão Flyweight. Ambos os padrões são amplamente utilizados no mercado de jogos.

## Sobre a versão atual
Prof. Marcelo Quinta, realmente ficou muito curto o tempo. 
O que pude fazer em relação ao que tinhamos até a apresentação foi reestruturar o código de forma a verdadeiramente usar o MVC. As views não são mais construídas com js e visibility hidden no css. Há uma página para cada view. No entanto, como o painel do jogo está na view PlayView.html este foi montado com js. Mesmo que vença o prazo estabelecido, continuarei a trabalhar no projeto até a conclusão. Espero que ao final esteja satisfatório. P.S.: Estou olhando o padrão Memento...

## Links

https://docs.google.com/document/d/1z_Lm2rUmPwJN0wvyUX3KBT8OHxL-XucKvLpVHH042wU
