var Labirinto = function() {
    this.EMPTY           = 0;
    this.TOP_LEFT        = 1;
    this.BOTTOM_LEFT     = 2;
    this.TOP_RIGHT       = 3;
    this.BOTTOM_RIGHT    = 4;
    this.VERTICAL        = 5;
    this.HORIZONTAL      = 6;
    this.COIN            = 7;
    this.PILL            = 8;
    this.DOOR            = 9;

    this.grid = [
        [1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3],
        [5,7,7,7,7,7,7,7,7,7,7,5,7,7,7,7,7,7,7,7,7,7,5],
        [5,7,1,6,3,7,1,6,6,3,7,5,7,1,6,6,3,7,1,6,3,7,5],
        [5,8,5,0,5,7,5,0,0,5,7,5,7,5,0,0,5,7,5,0,5,8,5],
        [5,7,2,6,4,7,2,6,6,4,7,5,7,2,6,6,4,7,2,6,4,7,5],
        [5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,5],
        [5,7,6,6,6,7,5,7,6,6,6,6,6,6,6,7,5,7,6,6,6,7,5],
        [5,7,7,7,7,7,5,7,7,7,7,5,7,7,7,7,5,7,7,7,7,7,5],
        [2,6,6,6,3,7,5,6,6,6,0,5,0,6,6,6,5,7,1,6,6,6,4],
        [0,0,0,0,5,7,5,0,0,0,0,0,0,0,0,0,5,7,5,0,0,0,0],
        [6,6,6,6,4,7,5,0,1,6,6,9,6,6,3,0,5,7,2,6,6,6,6],
        [0,0,0,0,0,7,0,0,5,0,0,0,0,0,5,0,0,7,0,0,0,0,0],
        [6,6,6,6,3,7,5,0,2,6,6,6,6,6,4,0,5,7,1,6,6,6,6],
        [0,0,0,0,5,7,5,0,0,0,0,0,0,0,0,0,5,7,5,0,0,0,0],
        [1,6,6,6,4,7,5,0,6,6,6,6,6,6,6,0,5,7,2,6,6,6,3],
        [5,7,7,7,7,7,7,7,7,7,7,5,7,7,7,7,7,7,7,7,7,7,5],
        [5,7,6,6,3,7,6,6,6,6,7,5,7,6,6,6,6,7,1,6,6,7,5],
        [5,8,7,7,5,7,7,7,7,7,7,0,7,7,7,7,7,7,5,7,7,8,5],
        [5,6,6,7,5,7,5,7,6,6,6,6,6,6,6,7,5,7,5,7,6,6,5],
        [5,7,7,7,7,7,5,7,7,7,7,5,7,7,7,7,5,7,7,7,7,7,5],
        [5,7,6,6,6,6,6,6,6,6,7,5,7,6,6,6,6,6,6,6,6,7,5],
        [5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,5],
        [2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,4]
    ];
}
