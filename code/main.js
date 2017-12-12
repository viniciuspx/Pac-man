var MAIN_SCREEN         = 0;
var GAME_SCREEN         = 1;
var RECORDS_SCREEN      = 2;
var NEWRECORD_SCREEN    = 3;
var MYRECORD_SCREEN     = 4;

var GAME = {
    screen: MAIN_SCREEN,
    paused: false,
    pause_img: 'pause.png',
    resume_img: 'resume.png',
    keys_down: {
        p: false,
        r: false,
        e: false,
        v: false
    }
};

var EMPTY           = 0;
var TOP_LEFT        = 1;
var BOTTOM_LEFT     = 2;
var TOP_RIGHT       = 3;
var BOTTOM_RIGHT    = 4;
var VERTICAL        = 5;
var HORIZONTAL      = 6;
var COIN            = 7;
var PILL            = 8;
var DOOR            = 9;
var PILL_2          = 10;

var SPRITE_URLS = [
    "30.png","27.png","26.png","28.png","29.png",
    "24.png","25.png","31.png","32.png","30.png",
    "33.png"
];

var GRID = [
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

function play() {
    document.getElementById('main_screen').style.visibility = 'hidden';
    document.getElementById('game_menu').style.visibility = 'visible';
    document.getElementById('game_screen').style.visibility = 'visible';
    GAME.screen = GAME_SCREEN;

    //=====================
    // Building the GRID
    //=====================

    var top = 0, left = 0;
    var game_screen = document.getElementById('game_screen');
    var top_offset = game_screen.style.top;
    var left_offset = game_screen.style.left;

    for (var i = 0; i < 23; i++) {
        for (var j = 0; j < 23; j++) {
            var tile = document.createElement("div");
            tile.id = "tile"+(i*23+j);
            // tile.style.border = "1px solid black";
            tile.style.position = "absolute";
            tile.style.width = "14px";
            tile.style.height = "14px";
            tile.style.top = (top+top_offset)+"px";
            tile.style.left = (left+left_offset)+"px";
            var img = document.createElement("img");
            img.id = "tile"+(i*23+j)+"_img";
            var url = SPRITE_URLS[GRID[i][j]];
            img.src = 'sprites/' + url;
            tile.appendChild(img);
            game_screen.appendChild(tile);

            left += 14;
        }

        top += 14;
        left = 0;
    }

    var pills_numbers = [];
    for (var i = 0; i < 23; i++) {
        for (var j = 0; j < 23; j++) {
            if (GRID[i][j] == PILL)
                pills_numbers.push(i*23+j);
        }
    }

    var toggle = 0;
    var pills = [];
    pills.push(document.getElementById("tile" + pills_numbers[0] + "_img"));
    pills.push(document.getElementById("tile" + pills_numbers[1] + "_img"));
    pills.push(document.getElementById("tile" + pills_numbers[2] + "_img"));
    pills.push(document.getElementById("tile" + pills_numbers[3] + "_img"));
    var anim1 = setInterval(function(){
        if (toggle == 0) {
            toggle = 1;
            pills[0].src = 'sprites/33.png';
            pills[1].src = 'sprites/33.png';
            pills[2].src = 'sprites/33.png';
            pills[3].src = 'sprites/33.png';
        }
        else {
            pills[0].src = 'sprites/32.png';
            pills[1].src = 'sprites/32.png';
            pills[2].src = 'sprites/32.png';
            pills[3].src = 'sprites/32.png';
            toggle = 0;
        }
    }, 500);
}

function records() {
    //alert("Clicked RECORDS");
    document.getElementById('main_screen').style.visibility = 'hidden';
    document.getElementById('records_list').style.visibility = 'visible';
    document.getElementById('voltar').style.visibility = 'visible';
    GAME.screen = RECORDS_SCREEN;
}

function voltar() {
    document.getElementById('main_screen').style.visibility = 'visible';
    document.getElementById('records_list').style.visibility = 'hidden';
    document.getElementById('voltar').style.visibility = 'hidden';
    GAME.screen = MAIN_SCREEN;
}

function pause() {
    var pause_img = document.getElementById('pause_img');
    var pause_txt = document.getElementById('pause_txt');
    if (GAME.paused) {
        pause_img.src = GAME.pause_img;
        pause_txt.innerHTML = 'PAUSE (P)';
        GAME.paused = false;
    }
    else {
        pause_img.src = GAME.resume_img;
        pause_txt.innerHTML = 'RESUME (P)';
        GAME.paused = true;
    }
}

function restart() {
    //alert('Clicked RESTART');
    var pause_img = document.getElementById('pause_img');
    var pause_txt = document.getElementById('pause_txt');
    pause_img.src = GAME.pause_img;
    pause_txt.innerHTML = 'PAUSE (P)';
    GAME.paused = false;
}

function exit() {
    document.getElementById('main_screen').style.visibility = 'visible';
    document.getElementById('game_menu').style.visibility = 'hidden';
    document.getElementById('game_screen').style.visibility = 'hidden';
    GAME.screen = MAIN_SCREEN;
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (GAME.screen == MAIN_SCREEN) {
        if (keyName == 'p' || keyName == 'P') {
            if (!GAME.keys_down.p) {
                play();
                GAME.keys_down.p = true;
            }
        }
        if (keyName == 'r' || keyName == 'R') {
            if (!GAME.keys_down.r) {
                records();
                GAME.keys_down.r = true;
            }
        }
    }

    if (GAME.screen == RECORDS_SCREEN) {
        if (keyName == 'v' || keyName == 'V') {
            voltar();
            GAME.keys_down.v = true;
        }
    }

    if (GAME.screen == GAME_SCREEN) {
        if (keyName == 'p' || keyName == 'P') {
            if (!GAME.keys_down.p) {
                pause();
                GAME.keys_down.p = true;
            }
        }
        if (keyName == 'r' || keyName == 'R') {
            if (!GAME.keys_down.r) {
                restart();
                GAME.keys_down.r = true;
            }
        }
        if (keyName == 'e' || keyName == 'E') {
            if (!GAME.keys_down.e) {
                exit();
                GAME.keys_down.e = true;
            }
        }
    }

}, false);

document.addEventListener('keyup', (event) => {
    const keyName = event.key;

    if (keyName == 'p' || keyName == 'P') {
        GAME.keys_down.p = false;
    }
    if (keyName == 'r' || keyName == 'R') {
        GAME.keys_down.r = false;
    }
    if (keyName == 'e' || keyName == 'E') {
        GAME.keys_down.e = false;
    }
    if (keyName == 'v' || keyName == 'V') {
        GAME.keys_down.v = false;
    }
}, false);



require('model.*');
require('view.*');
require('controller.*');

ready(function(){

window.onload = function() {
    var p = new Ponto(1,2);
    p.print();
};

});
