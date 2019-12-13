var crossArray = Array.from(document.getElementsByClassName('cross'));

crossArray.forEach(crossArrayItem =>
    crossArrayItem.onclick = function () {
        daymessagepopup16.style.display = 'none';
        daymessagepopup17.style.display = 'none';
        daymessagepopup18.style.display = 'none';

    }
)

var show16 = document.getElementById("show16");
var show17 = document.getElementById("show17");
var show18 = document.getElementById("show18");

var daymessagepopup16 = document.getElementById("daymessagepopup16");
var daymessagepopup17 = document.getElementById("daymessagepopup17");
var daymessagepopup18 = document.getElementById("daymessagepopup18");

show16.onclick = function () {
    daymessagepopup16.style.display = 'flex'
}

show17.onclick = function () {
    daymessagepopup17.style.display = 'flex'
}

show18.onclick = function () {
    daymessagepopup18.style.display = 'flex'
}


