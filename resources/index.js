let text = '안녕하세요 신입 웹개발자 이혜영입니다';
let textArr = text.split("");
let index = 0;
let introduce = "";
let landing_text = document.querySelector('.landing-text');
let text_box = document.querySelector('#text-box');
let width_index = 0;
let width;

let interval = setInterval(function() {
    // textArr의 크기보다 크거나 같으면 멈춰야 함
    // 그게 아니라면 디바이스의 width를 확인해서
    // width가 360일 경우 width변수에 3 * width_index를 하고
    // width가 360보다 커질 경우 width 변수에 2.5 * width_index를 한다.
    if(index >= textArr.length) {
        clearInterval(interval);
    } else if(index == 5) {
        width_index = 0;
        introduce = "";
    } else {
        if(screen.width < 1000) {
            width = 3.21 * width_index;
        } else {
            width = 2 * width_index;
        }

        introduce = introduce += textArr[index];
        landing_text.innerHTML = introduce;
    }

    text_box.style.width = width + '%';

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
document.querySelectorAll('.skill-circle').forEach(function(el) {
    el.addEventListener('mouseover', function() {
        switch(el.children[0].textContent) {
            case 'JavaScript':
                skill_per = -24;
                break;
            case 'Java':
                skill_per = -44;
                break;
            case 'Spring':
                skill_per = -24;
                break;
            case 'Mybatis':
                skill_per = -44;
                break;
            case 'HTML/CSS':
                skill_per = -44;
                break;
            case 'GitHub':
                skill_per = -24;
                break;
            case 'Oracle/MySQL':
                skill_per = -24;
                break;
            case 'AWS':
                skill_per = -6;
                break;
        }
        el.children[1].style.transform = 'translateY(' + skill_per + '%)';
        el.style.boxShadow = '0px 0px 8px 0px #656565';
    });

    el.addEventListener('mouseout', function() {
        el.style.boxShadow = 'none';
        el.children[1].style.transform = 'translateY(49%)';
    })
})

document.querySelectorAll('.project-wrap').forEach(function(el) {
    el.addEventListener('mouseover', function() {
        el.children[0].children[0].style.opacity = 1;
    })

    el.addEventListener('mouseout', function() {
        el.children[0].children[0].style.opacity = 0;
    })
})