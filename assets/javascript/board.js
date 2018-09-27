var akoNoises = ['dumb ako dance', 'ako drum 1', 'ako drum 2', 'ako drum 3', 'ban', 'don', 'angry ako', 
'ako rinrin bd', 'ako daisuki', 'sleepy ako', 'ako trick or treat', 'ako new years']
    var yukinaNoises = ['yukinya']

    window.onload = function () {

        for (let i = 0; i < akoNoises.length; i++) {
            $('.board').append(`
        <div class="ako mb">
            <input type="image" src="assets/images/ako1.png" data-val='${akoNoises[i]}' alt="Submit" class='imgB' width="100" height="100">
            <center><p>${akoNoises[i]}</p></center>
        </div>
        `)
        }
    //place holder for yukinya
        for (let i = 0; i < yukinaNoises.length; i++) {
            $('.board').append(`
        <div class="yuki mb">
            <input type="image" src="assets/images/yuki1.png" data-val='${yukinaNoises[i]}' alt="Submit" class='imgY' width="100" height="100">
            <center><p>${yukinaNoises[i]}</p></center>
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
        }, 100);
    });

    $(document).on('click', '.imgY', function () {
        $(this).attr('src', 'assets/images/yclick1.png');
        $(this).attr('width', '100');
        $(this).attr('height', '100');
        var audio = new Audio('assets/sounds/' + $(this).attr('data-val') + '.ogg');
        audio.play();
        setTimeout(function () {
            $('.imgY').attr('src', 'assets/images/yuki1.png');
        }, 100);
    });