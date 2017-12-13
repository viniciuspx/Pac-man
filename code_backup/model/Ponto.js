var Ponto = function(x,y) {
	this.x = x === undefined ? 0 : x;
	this.y = y === undefined ? 0 : y;
}

Ponto.prototype.print = function() {
	console.log('['+this.x+','+this.y+']');
}
