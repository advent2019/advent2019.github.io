var textblock = document.getElementById('textblock');
var arr = ['👯‍', '🦁', '🐥','💄', '🦄', '🌟','🌈', '💰', '❤️', '🍒', '❄️'];

function sayHi(){
  var now = new Date();
  var x = (Math.round(now.getMilliseconds() / 100));
  textblock.innerHTML = arr[x];
}

setInterval(sayHi, 100);

