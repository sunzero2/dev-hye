let header = document.querySelector("header");

<<<<<<< HEAD
=======
// test22222
>>>>>>> 1c133d8e969329d6c19b24973961d7410e7de23c
window.onscroll = function() {
    if(window.scrollY >= 100) {
        header.style.opacity = 0;
    } else {
        header.style.opacity = 1;
    }
}

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
});