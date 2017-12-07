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
        e: false
    }
};

function play() {
    document.getElementById('main_screen').style.visibility = 'hidden';
    document.getElementById('game_menu').style.visibility = 'visible';
    document.getElementById('game_screen').style.visibility = 'visible';
    GAME.screen = GAME_SCREEN;
}

function records() {
    //alert("Clicked RECORDS");
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
}, false);
