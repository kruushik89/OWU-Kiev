// menu
let btnMenu = document.querySelector('.c-hamburger');
let menu = document.querySelector('.menu-mobile');
btnMenu.onclick = () => {
    menu.classList.toggle('left-0');
};

// end menu

// c-hamburger
document.querySelector('.c-hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
});
// end c-hamburger

// type 6 border change color
let sixButton = document.querySelectorAll('.six-about-item-button');
sixButton.forEach(function (el) {
    el.addEventListener('mouseenter', function (e) {
        e.target.style.backgroundColor = '#3298F2';
        e.target.offsetParent.style.borderColor = '#3298F2';
        e.target.parentElement.children[0].style.borderColor = '#3298F2';
    });

    el.addEventListener('mouseleave', function (e) {
        e.target.style.backgroundColor = '';
        e.target.offsetParent.style.borderColor = '';
        e.target.parentElement.children[0].style.borderColor = '';
    })
});

// modal
let modal = document.querySelector('.body-modal');
let nineBtn = document.querySelectorAll('.button-modal');

for (let i = 0; i < nineBtn.length; i++) {
    nineBtn[i].onclick = function () {
        modal.classList.add('d-block');
    }
}

let close = document.querySelector('.close-image');
close.onclick = () => {
    modal.classList.remove('d-block');
};
// end modal
