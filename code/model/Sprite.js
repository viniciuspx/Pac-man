require('util/inheritance.js');

var Sprite = function(name, url) {
    this.name = name;
    this.url = url;
    this.div = document.createElement("div");
    this.img = document.createElement("img");
}

ready(function(){

inheritsFrom(Sprite,SpriteFlyweight);

Sprite.prototype.renderSprite = function() {

}

});
