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
// end dropdown menu mobile

// add white border from item
let twoKidsBtn = document.querySelectorAll('.kids-two-item-button');
let arrKidsBtn = Array.from(twoKidsBtn);
function addWhiteBorder(param, borderColor) {
    param.forEach(el => {
        el.addEventListener('mouseenter', function (e) {
            e.target.offsetParent.classList.add(borderColor);
        });
        el.addEventListener('mouseleave', function (e) {
            e.target.offsetParent.classList.remove(borderColor);
        });
    });
}

// end add white border from item

addWhiteBorder(arrKidsBtn, 'border-FFE200');


// ИНТЕНСИВ ДЛЯ НОВИЧКОВ
$(document).ready(function() {
    $('.list-item a').on('click',function (e) {
        let $parent = $(this).parent('.list-item').parent('.list-inner').attr('id');
        $('.list-item a').removeClass('active-js');
        $(this).addClass('active-js');
        $('.item-list-content').removeClass('display-block');
        $('.item-list-content#p'+$parent).addClass('display-block');
    });

    // ===============================================================================
    // Програма для курсу
    $('.list-content').on('click', function () {
        let heigh = $(this.lastElementChild.scrollHeight);
        $('.list-content').css('border-color','');
        $(this).css('border-color', '#3298F2');
        let child = $(this).children('.list-content-title');
        $('.list-content-title').removeClass('active-js');
        child.addClass('active-js');
        let child2 = $(this).children('.list-content-text');
        $('.list-content-text').css('height', 0);
        child2.css('height', heigh[0]+'px');

    });


});

// ===============================================================================
//плавний скрол до якоря
$(document).ready(function () {
    //плавний скрол до якоря програма курса
    $('.list-item a').click(function () {
        // возьмем содержимое атрибута href, должен быть селектором, например начинать # с или .
        let scrollElem = $(this).attr('href');

        if ($(scrollElem).length != 0) {
            $('html, body').animate({scrollTop: $(scrollElem).offset().top}, 500);
        }
    });

});

// Акордион
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


// mobile accordion
// accordion 1
let wrapTitle = document.querySelectorAll('.two-test-title-mobile');
let wrapText = document.querySelectorAll('.two-test-text-mobile');

wrapTitle.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.nextElementSibling.classList.toggle('is-visible-mobile');
        e.target.nextElementSibling.classList.toggle('mt-15');

        if (e.target.nextElementSibling.classList.contains('is-visible-mobile')) {
            e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';

        } else {
            e.target.nextElementSibling.style.height = '';
        }
    });

    wrapText.forEach(function (el) {
        if (el.classList.contains('is-visible-mobile') || el.classList.contains('mt-15')) {
            el.style.height = el.scrollHeight + 'px';
        }
    })
});


