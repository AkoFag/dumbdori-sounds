//var akoNoises = ['dumb ako dance', 'dumb ako dance 2', 'ako drum 1', 'ako drum 2', 'ako drum 3', 'ban', 'ban 2', 'don', 'angry ako', 'happy ako',
    //'ako rinrin bd', 'ako daisuki', 'sleepy ako', 'ako trick or treat', 'ako new years', 'ako mumumu', 'ako guru guru', 'ako btfo by hagumi',
    //'ako fufufu', 'ako お姉ちゃん', 'ako jackolantern', 'ako sugoi sugoi']
var rimiriN = ['rimi チョココロネや']
var yukinaNoises = ['yukinya', 'yukinya hiss']

var sayoN = ['sayo air gitah 用 gitah']
var oTea = ['tae potato', 'dumb tae noise']
var saayaN = ['dumb saaya noise']
var kano = ['ふえぇぇ１','ふえぇぇ２','ふえぇぇ３','ふえぇぇ４', 'kanon drum']
var runRun = ['boo boo'] //add css for hina later
var kkr = ['yay']
var maya = ['maya フヘへ1', 'maya フヘへ2', 'maya フヘへ3', 'maya フヘへ4', 'maya admiring フヘへ']

window.onload = function () {

    //param array, image for button, style for button, class colors
    //appendButtons(akoNoises, "assets/images/ako1.png", 'imgB', 'ako');
    appendButtons(rimiriN, "assets/images/rimi1.png", 'imgRim', 'rimi');
    appendButtons(yukinaNoises, "assets/images/yuki1.png", 'imgY', 'yuki');
    appendButtons(sayoN, "assets/images/sayo1.png", 'imgS', 'sayo');
    appendButtons(runRun, "assets/images/hina1.png", "imgH", 'sayo')
    appendButtons(saayaN, "assets/images/saaya1.png", 'imgSa', 'saaya');
    appendButtons(oTea,  "assets/images/tae1.png", 'imgOT', 'otae');
    appendButtons(kano, "assets/images/kano1.png", 'imgKano', 'yuki');
    appendButtons(kkr, "assets/images/kokoro1.png", "imgKkr", 'saaya');
    appendButtons(maya, "assets/images/maya1.png", "imgMaya", 'sayo');
    
    
}

function appendButtons(arr, src, imgStyle, boardClass) {
    for (let i = 0; i < arr.length; i++) {
        $('.board').append(`
            <div class="${boardClass} bgc mb">
                <input type="image" src="${src}" data-val='${arr[i]}' alt="Submit" class='imgBase ${imgStyle}' width="100" height="100">
                <center><p>${arr[i]}</p></center>
            </div>
        `)
    }
}

$(document).on('click', '.imgRim', function () {
    $(this).attr('src', 'assets/images/rimiclick.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgRim').attr('src', 'assets/images/rimi1.png');
    }, 200);
});


$(document).on('click', '.imgB', function () {
    $(this).attr('src', 'assets/images/click1.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgB').attr('src', 'assets/images/ako1.png');
    }, 200);
});

$(document).on('click', '.imgY', function () {
    $(this).attr('src', 'assets/images/yclick1.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgY').attr('src', 'assets/images/yuki1.png');
    }, 200);
});

$(document).on('click', '.imgS', function () {
    $(this).attr('src', 'assets/images/sayoClick1.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgS').attr('src', 'assets/images/sayo1.png');
    }, 200);
});

$(document).on('click', '.imgSa', function () {
    $(this).attr('src', 'assets/images/sclick1.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgSa').attr('src', 'assets/images/saaya1.png');
    }, 200);
});

$(document).on('click', '.imgOT', function () {
    $(this).attr('src', 'assets/images/tclick1.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgOT').attr('src', 'assets/images/tae1.png');
    }, 200);
});

$(document).on('click', '.imgKano', function () {
    $(this).attr('src', 'assets/images/kanoClick.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgKano').attr('src', 'assets/images/kano1.png');
    }, 200);
});

$(document).on('click', '.imgH', function () {
    $(this).attr('src', 'assets/images/hinaClick.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgH').attr('src', 'assets/images/hina1.png');
    }, 200);
});

$(document).on('click', '.imgKkr', function () {
    $(this).attr('src', 'assets/images/kokoroClick.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgKkr').attr('src', 'assets/images/kokoro1.png');
    }, 200);
});

$(document).on('click', '.imgMaya', function () {
    $(this).attr('src', 'assets/images/mayaClick.png');
    $(this).attr('width', '100');
    $(this).attr('height', '100');
    var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
    audio.play();
    setTimeout(function () {
        $('.imgMaya').attr('src', 'assets/images/maya1.png');
    }, 200);
});
