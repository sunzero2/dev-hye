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

let skill_per = 0;
document.querySelectorAll('.skill-wrap').forEach(function(el) {
    el.addEventListener('mouseover', function() {
        switch(el.children[0].textContent) {
            case 'JavaScript':
                skill_per = -6;
                break;
            case 'Java':
                skill_per = -8;
                break;
            case 'Spring':
                skill_per = -6;
                break;
            case 'Mybatis':
                skill_per = -7;
                break;
            case 'HTML/CSS':
                skill_per = -4;
                break;
            case 'GitHub':
                skill_per = -6;
                break;
            case 'Oracle/MySQL':
                skill_per = -5;
                break;
            case 'AWS':
                skill_per = -5;
                break;
        }
        el.children[1].style.transform = 'translateY(' + skill_per + 'vh)';
        el.style.boxShadow = '0px 0px 8px 0px #656565';
    });

    el.addEventListener('mouseout', function() {
        el.children[1].style.transform = 'translateY(10vh)';
        el.style.boxShadow = 'none';
    })
})