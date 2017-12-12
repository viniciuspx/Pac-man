require('util/inheritance.js');

var Sprite = function() {
    this.imgs_urls = [];
    this.curr_img = 0;
    this.imgs = [];
}

ready(function(){

inheritsFrom(Sprite,SpriteFlyweight);

Sprite.prototype.renderSprite = function() {
    
}

});
