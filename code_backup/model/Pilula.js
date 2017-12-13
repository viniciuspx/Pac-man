require('util/inheritance.js');

var Pilula = function(tempo) {
    this.tempo = tempo > 0 ? tempo : 0;
}

ready(function(){

inheritsFrom(Pilula,Item);

});
