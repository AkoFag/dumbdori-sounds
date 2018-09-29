var akoNoises = ['dumb ako dance', 'dumb ako dance 2', 'ako drum 1', 'ako drum 2', 'ako drum 3', 'ban', 'don', 'angry ako', 'happy ako',
    'ako rinrin bd', 'ako daisuki', 'sleepy ako', 'ako trick or treat', 'ako new years', 'ako mumumu', 'ako guru guru', 'ako btfo by hagumi',
    'ako fufufu']
var yukinaNoises = ['yukinya', 'yukinya hiss']

var sayoN = ['sayo air gitah 用 gitah']
var oTea = ['tae potato', 'dumb tae noise']
var saayaN = ['dumb saaya noise']

window.onload = function () {

    //param array, image for button, style for button, class colors
    appendButtons(akoNoises, "assets/images/ako1.png", 'imgB', 'ako');
    appendButtons(yukinaNoises, "assets/images/yuki1.png", 'imgY', 'yuki');
    appendButtons(sayoN, "assets/images/sayo1.png", 'imgS', 'sayo');
    appendButtons(saayaN, "assets/images/saaya1.png", 'imgSa', 'saaya');
    appendButtons(oTea,  "assets/images/tae1.png", 'imgOT', 'otae');
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