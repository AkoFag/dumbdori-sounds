var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

$(document).on('click', 'span', function(){
    modal.style.display = "none";
    document.getElementById('contributeModal').style.display = 'none';
})

window.onclick = function (event) {
    if (event.target == modal || document.getElementById('contributeModal') == event.target) {
        modal.style.display = "none";
        document.getElementById('contributeModal').style.display = 'none';
    }
}

$(document).on('click', '.stuffdori', function(){
    document.getElementById('contributeModal').style.display = 'block';
})

$(document).on('click', '.news', function(){
    modal.style.display = 'block';
})
