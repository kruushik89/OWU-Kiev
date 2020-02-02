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

// add white border from item
function addWhiteBorder(param) {
    param.forEach(el => {
        el.addEventListener('mouseenter', function (e) {
            e.target.offsetParent.classList.add('border-white');
        });
        el.addEventListener('mouseleave', function (e) {
            e.target.offsetParent.classList.remove('border-white');
        });
    });
}

// end add white border from item

addWhiteBorder(typeBtn3);

// modal
let rec = document.querySelector('.rec-courses');
let modal = document.querySelector('.body-modal');
let nineBtn = document.querySelectorAll('.nine-btn button');

for (let i = 0; i < nineBtn.length; i++) {
    nineBtn[i].onclick = function () {
        modal.classList.add('d-block');
    }
}

rec.onclick = () => {
    modal.classList.add('d-block');
};

let close = document.querySelector('.close-image');
close.onclick = () => {
    modal.classList.remove('d-block');
};
// end modal


let course = document.querySelector('#course');

course.addEventListener('click', function (e) {

    e.target.nextElementSibling.classList.toggle('is-visible-mobile');

    if (e.target.nextElementSibling.classList.contains('is-visible-mobile')) {
        e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
    } else {
        e.target.nextElementSibling.style.height = 0;
    }
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

    //плавний скрол до якоря до форми
    function animationScroll(element, time) {
        $(element).click(function () {
            let scrollElem = $(this).attr('href');
            if ($(scrollElem).length != 0) {
                $('html, body').animate({scrollTop: $(scrollElem).offset().top}, time);
            }
        });
    }

    animationScroll('.type-3-item button a', 1500);

});


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

// accordion from java complex
let javaListTitle = document.querySelectorAll(' .java-complex-list-title');
let javaListText = document.querySelectorAll('.java-complex-list-text');
javaListTitle.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.nextElementSibling.classList.toggle('is-visible');
        if (e.target.nextElementSibling.classList.contains('is-visible')) {
            e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
        } else {
            e.target.nextElementSibling.style.height = '';
        }
    });

    javaListText.forEach(function (el) {
        if (el.classList.contains('is-visible')) {
            el.style.height = el.scrollHeight + 'px';
        }
    })
});
// end accordion from java complex

//function accordion
let content1H3 = document.querySelector('.section-two-content-title-1');
let content2H3 = document.querySelector('.section-two-content-title-2');
let content1 = document.querySelector('.two-content-1');
let content2 = document.querySelector('.two-content-2');
// let vector = document.querySelectorAll('.arr');
// let arrVector = Array.from(vector);

function accord4(elem, elem2) {
    elem.addEventListener('click', function (e) {
        console.log(e);
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

accord4(content1H3, content1);
accord4(content2H3, content2);


// Hover from form
function hoverForms() {
    let formsHover = document.querySelectorAll('.type-tyrphs-item');
    formsHover.forEach(function (el) {
        el.addEventListener('mouseenter', function (e) {
            e.target.children[0].style.backgroundColor = '#3298f2';
            e.target.children[0].style.color = '#ffffff';


        });

        el.addEventListener('mouseleave', function (e) {
            e.target.children[0].style.backgroundColor = '';
            e.target.children[0].style.color = '';
        })

    });
}

hoverForms();


let enroll = document.querySelectorAll('.enroll');
console.log(enroll);

enroll.forEach(function (el) {
    el.onclick = function () {
        modal.classList.add('d-block');
    }
});






