let nav = document.querySelector("nav");

window.onscroll = function() {
    if(window.scrollY >= 100) {
        nav.style.opacity = 0;
    } else {
        nav.style.opacity = 1;
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
    });
});

document.querySelectorAll('.card-link').forEach(function(el) {
    el.addEventListener('click', function(event) {
        event.stopPropagation();
    })
})