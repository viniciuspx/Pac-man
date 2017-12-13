require('models.Sprite');
require('models.SpriteFlyweight');

ready(function(){

var FlyweightFactory = function() {
    this.flyweights = [];
    this.flyweights.push(new Sprite("PAC_RIGHT_1","1.png"));
    this.flyweights.push(new Sprite("PAC_RIGHT_2","2.png"));
    this.flyweights.push(new Sprite("PAC_LEFT_1","3.png"));
    this.flyweights.push(new Sprite("PAC_LEFT_2","4.png"));
    this.flyweights.push(new Sprite("PAC_UP_1","5.png"));
    this.flyweights.push(new Sprite("PAC_UP_2","6.png"));
    this.flyweights.push(new Sprite("PAC_DOWN_1","7.png"));
    this.flyweights.push(new Sprite("PAC_DOWN_2","8.png"));
    this.flyweights.push(new Sprite("REDGHOST_RIGHT_1","9.png"));
    this.flyweights.push(new Sprite("REDGHOST_RIGHT_2","10.png"));
    this.flyweights.push(new Sprite("REDGHOST_LEFT_1","11.png"));
    this.flyweights.push(new Sprite("REDGHOST_LEFT_2","12.png"));
    this.flyweights.push(new Sprite("REDGHOST_UP_1","13.png"));
    this.flyweights.push(new Sprite("REDGHOST_UP_2","14.png"));
    this.flyweights.push(new Sprite("REDGHOST_DOWN_1","15.png"));
    this.flyweights.push(new Sprite("REDGHOST_DOWN_2","16.png"));
    this.flyweights.push(new Sprite("SLOWGHOST_1","17.png"));
    this.flyweights.push(new Sprite("SLOWGHOST_2","18.png"));
    this.flyweights.push(new Sprite("SLOWGHOST_3","19.png"));
    this.flyweights.push(new Sprite("EYES_RIGHT","20.png"));
    this.flyweights.push(new Sprite("EYES_LEFT","21.png"));
    this.flyweights.push(new Sprite("EYES_UP","22.png"));
    this.flyweights.push(new Sprite("EYES_DOWN","23.png"));
    this.flyweights.push(new Sprite("WALL_VERTICAL","24.png"));
    this.flyweights.push(new Sprite("WALL_HORIZONTAL","25.png"));
    this.flyweights.push(new Sprite("WALL_BOTTOM_LEFT","26.png"));
    this.flyweights.push(new Sprite("WALL_TOP_LEFT","27.png"));
    this.flyweights.push(new Sprite("WALL_TOP_RIGHT","28.png"));
    this.flyweights.push(new Sprite("WALL_BOTTOM_RIGHT","29.png"));
    this.flyweights.push(new Sprite("EMPTY","30.png"));
    this.flyweights.push(new Sprite("COIN","31.png"));
    this.flyweights.push(new Sprite("PILL_1","32.png"));
    this.flyweights.push(new Sprite("PILL_2","33.png"));
}

FlyweightFactory.prototype.getFlyweight = function(sprite_name) {
    for (var i = 0; i < this.flyweights.length; i++) {
        if (this.flyweights[i].name == sprite_name)
            return this.flyweights[i];
    }

    return this.flyweights[28]; // The empty one...
}

});
