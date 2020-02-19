
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

    //плавний скрол до якоря до форми
    function animationScroll(element, time) {
        $(element).click(function () {
            let scrollElem = $(this).attr('href');
            if ($(scrollElem).length != 0) {
                $('html, body').animate({scrollTop: $(scrollElem).offset().top}, time);
            }
        });
    }

    animationScroll('.type-3-item a', 1500);


});

// =========================================================================================================================

//function accordion
let contentTitle = document.querySelector('.section-two-content-title-1');
let contentTitleTwo = document.querySelector('.section-two-content-title-2');
let content1 = document.querySelector('.two-content-1');
let content2 = document.querySelector('.two-content-2');

function accord4(elem, elem2) {
    elem.addEventListener('click', function (e) {
        e.target.nextElementSibling.classList.toggle('is-visible');
        if (e.target.nextElementSibling.classList.contains('is-visible')) {
            e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
            e.target.previousElementSibling.classList.add('rotate-180');

        } else {
            e.target.nextElementSibling.style.height = '';
            e.target.previousElementSibling.classList.remove('rotate-180');
        }
    });

    if (elem2.classList.contains('is-visible')) {
        elem2.style.height = elem2.scrollHeight + 'px';
    }
}

accord4(contentTitle, content1);
accord4(contentTitleTwo, content2);

// =========================================================================================================================

function accord3() {
    let b = document.querySelectorAll('.five-item-title-mob');
    let arrB = Array.from(b);
    arrB.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.target.nextElementSibling.classList.toggle('is-visible');
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



