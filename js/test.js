
// ИНТЕНСИВ ДЛЯ НОВИЧКОВ
$(document).ready(function() {
    $('.list-item a').on('click',function (e) {
        let $parent = $(this).parent('.list-item').parent('.list-inner').attr('id');
        $('.list-item a').removeClass('active-java');
        $(this).addClass('active-java');
        $('.item-list-content').removeClass('display-block');
        $('.item-list-content#p'+$parent).addClass('display-block');
    });

    // ===============================================================================
    // Програма для курсу
    $('.list-content').on('click', function () {
        let heigh = $(this.lastElementChild.scrollHeight);
        $('.list-content').css('border-color','');
        $(this).css('border-color', '#f48120');
        let child = $(this).children('.list-content-title');
        $('.list-content-title').removeClass('active-java');
        child.addClass('active-java');
        let child2 = $(this).children('.list-content-text');
        $('.list-content-text').css('height', 0);
        child2.css('height', heigh[0]+'px');

    });
});

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

//плавний скрол до якоря до форми
function animationScroll(element, time) {
    $(element).click(function () {
        let scrollElem = $(this).attr('href');
        if ($(scrollElem).length != 0) {
            $('html, body').animate({scrollTop: $(scrollElem).offset().top}, time);
        }
    });
}

animationScroll('.list-item a', 500);


































