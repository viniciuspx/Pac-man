var GAME = {
    paused: false,
    pause_img: 'pause.png',
    resume_img: 'resume.png'
};

function play() {
    //alert("Clicked PLAY");
    document.getElementById('main_screen').style.visibility = 'hidden';
    document.getElementById('game_menu').style.visibility = 'visible';
    document.getElementById('game_screen').style.visibility = 'visible';
}

function records() {
    alert("Clicked RECORDS");
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
    alert('Clicked RESTART');
}

function exit() {
    document.getElementById('main_screen').style.visibility = 'visible';
    document.getElementById('game_menu').style.visibility = 'hidden';
    document.getElementById('game_screen').style.visibility = 'hidden';
}
