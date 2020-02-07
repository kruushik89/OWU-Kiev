//accordion type 3
let accordionText = document.querySelectorAll('.item-accordion-text');
let arrAccordionText = Array.from(accordionText);


$('.item-accordion').on('click', function () {
    let heigh = $(this.lastElementChild.scrollHeight);
    $('.item-accordion').css('border-color','');
    $(this).css('border-color', '#3298F2');
    let child = $(this).children('.item-accordion-title');
    $('.item-accordion-title').removeClass('active-js');
    child.addClass('active-js');
    let child2 = $(this).children('.item-accordion-text');
    $('.item-accordion-text').css('height', 0);
    child2.css('height', heigh[0]+'px');
});

let accordion = document.querySelectorAll('.item-accordion');
let arrAccordion = Array.from(accordion);

arrAccordion.forEach(function (el) {
    if (el.children[1].classList.contains('is-visible')) {
        el.children[0].classList.add('active-js');
        el.style.borderColor = '#3298F2';
    }
});

arrAccordionText.forEach(function (el) {
    if (el.classList.contains('is-visible')) {
        el.style.height = el.scrollHeight + 'px';
    }
});

//end accordion type 3

// menu
let btnMenu = document.querySelector('.c-hamburger');
let menu = document.querySelector('.menu-mobile');
btnMenu.onclick = () => {
    menu.classList.toggle('left-0');
};

// end menu

let typeBtn3 = document.querySelectorAll('.type-3-item button');
// c-hamburger
document.querySelector('.c-hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
});
// end c-hamburger


// function accord oktenveb university
function accord3() {
    let b = document.querySelectorAll('.five-item-title-mob');
    let arrB = Array.from(b);
    arrB.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.target.nextElementSibling.classList.toggle('is-visible');
            console.log(e.target.children[0]);
            if (e.target.nextElementSibling.classList.contains('is-visible')) {
                e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
                e.target.parentElement.classList.add('bg-fff');
                e.target.children[0].classList.add('rotate-180');
            } else {
                e.target.nextElementSibling.style.height = '';
                e.target.children[0].classList.remove('rotate-180');
                e.target.parentElement.classList.remove('bg-fff');
            }
        })
    });

    let bText = document.querySelectorAll('.five-item-text-mob');
    let arrBText = Array.from(bText);
    arrBText.forEach(function (el) {
        if (el.classList.contains('is-visible')) {
            el.style.height = el.scrollHeight + 'px';
        }
    })

}

accord3();

// dropdown menu mobile
let course = document.querySelector('#course');

course.addEventListener('click', function (e) {

    e.target.nextElementSibling.classList.toggle('is-visible-mobile');

    if (e.target.nextElementSibling.classList.contains('is-visible-mobile')) {
        e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
    } else {
        e.target.nextElementSibling.style.height = 0;
    }
});

























