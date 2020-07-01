/* var index = 0;
var title = document.getElementById('title').innerHTML.split("");

setInterval(function() {
    var textBox = document.querySelector('.title');
    var text = textBox.innerHTML;

    if(index >= title.length) {
        index = 0;
        text = "";
    }

    textBox.innerHTML = text += title[index];
    index++;
}, 300); */
let header = document.getElementById("header");

window.onscroll = function() {
    if(window.scrollY >= 108) {
        header.style.background = '#272822';
        header.style.color = '#ececec';
    } else {
        header.style.background = 'white';
        header.style.color = '#272822';
    }
}