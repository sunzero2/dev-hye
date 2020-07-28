// const introduceText = '안녕하세요 신입 개발자 이혜영입니다';
// const introduceTextSplitArray = introduceText.split("");
// let introduceTextConcat = '';
// let index = 0;
// const landingText = document.querySelector('.landing-text');
// const textBox = document.querySelector('#text-box');
// let widthIndex = 0;
// let width;

// // 안녕하세요 까지 출력할 경우 3초 뒤에 introduceTextPrint 함수 실행
// // 그렇지 않을 경우 바로 introduceTextPrint 함수 실행
// // index가 introduceTextSplitArray의 크기보다 클 경우 함수 실행하지 않음
// let introduceTextPrint = function() {
//     if(screen.width < 1030) {
//         width = 3.8 * widthIndex;
//     } else {
//         width = 2.4 * widthIndex;
//     }
//     introduceTextConcat = introduceTextConcat += introduceTextSplitArray[index];
//     landingText.innerHTML = introduceTextConcat;
// }
// let introduceTextInterval = setInterval(function() {
//     if(index >= textArr.length) { // 소개문이 다 출력될 경우
//         clearInterval(interval);
//         document.querySelector('.scroll').style.display = 'block';
//     } else if(index == 5) {
//         width_index = 0;
//         introduce = "";
//         setTimeout(introducePrint(), 7000);
//     } else {
//         introducePrint();
//     }
//     text_box.style.width = width + '%';
//     index++;
//     width_index++;
// }, 300);

let header = document.querySelector("header");

window.onscroll = function() {
    if(window.scrollY >= 100) {
        header.style.opacity = 0;
    } else {
        header.style.opacity = 1;
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
    });

    el.addEventListener('mouseout', function() {
        el.children[1].style.transform = 'translateY(49%)';
    })
})

document.querySelectorAll('.card-wrap').forEach(function(el) {
    el.addEventListener('click', function() {
        if(el.children[0].classList.contains('next')) {
            el.children[0].classList.remove('next');
            el.children[1].classList.remove('back');
        } else {
            el.children[0].classList.add('next');
            el.children[1].classList.add('back');
        }
    })
})