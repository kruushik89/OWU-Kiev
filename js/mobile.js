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


// mobile drop nav menu
let course = document.querySelector('#course');
course.addEventListener('click', function (e) {

    e.target.nextElementSibling.classList.toggle('is-visible-mobile');

    if (e.target.nextElementSibling.classList.contains('is-visible-mobile')) {
        e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
    } else {
        e.target.nextElementSibling.style.height = 0;
    }
});
// end mobile drop nav menu
