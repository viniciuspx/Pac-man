function Imagem(imagem) {
    this.nomeDaImagem = imagem;
    this.desenharImagem = function() {
        console.log(nomeDaImagem + " desenhada!");
    }
}

function Ponto (x,y) {
    this.x = x;
	this.y = y;
}


/**
public abstract class SpriteFlyweight {
    public abstract void desenharImagem(Ponto ponto);
}
*/
/**
 @constructor
 @abstract
 */
var SpriteFlyweight = function() {
    if (this.constructor === SpriteFlyweight) {
      throw new Error("Can't instantiate abstract class!");
    }
    // SpriteFlyweight initialization...
};

/**
 @abstract
 */
SpriteFlyweight.prototype.desenharImagem = function() {
    throw new Error("Abstract method!");
}

/**
public class Sprite extends SpriteFlyweight {
    protected Imagem imagem;
    public Sprite(String nomeDaImagem) {
        imagem = new Imagem(nomeDaImagem);
    }
    @Override
    public void desenharImagem(Ponto ponto) {
        imagem.desenharImagem();
	}
}
*/
var Sprite = function(nomeDaImagem) {
    SpriteFlyweight.apply(this, arguments);
    // Sprite initialization...
	this.imagem = nomeDaImagem;
};

Sprite.prototype = Object.create(SpriteFlyweight.prototype);
Sprite.prototype.constructor = Sprite;

Sprite.prototype.desenharImagem = function(ponto) {
    this.imagem.desenharImagem();
}
