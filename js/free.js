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
    console.log(el.children);
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

























