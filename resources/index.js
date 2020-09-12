let header = document.querySelector("header");

// test22222
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