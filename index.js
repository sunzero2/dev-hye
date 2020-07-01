let text = '안녕하세요 신입 웹개발자 이혜영입니다';
let textArr = text.split("");
let index = 0;
let introduce = "";
let landing_text = document.querySelector('.landing-text');
let text_box = document.querySelector('#text-box');
let width_index = 0;
let width;

let interval = setInterval(function() {
    if(index >= textArr.length) {
        clearInterval(interval);
    } else if(index == 5) {
        width_index = 0;
        introduce = "";
    } else {
        width = 30 * width_index;
        introduce = introduce += textArr[index];
        landing_text.innerHTML = introduce;
    }

    text_box.style.width = width + 'px';

    index++;
    width_index++;
}, 400);

let header = document.getElementById("header");

window.onscroll = function() {
    if(window.scrollY >= 864) {
        header.style.opacity = 1;
    } else {
        header.style.opacity = 0;
    }
}