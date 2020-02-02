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
let listContent = document.querySelectorAll('.list-content');
let arr = Array.from(listContent);
$(document).ready(function () {
    $('.list-inner').on('click',function (event) {

        let $child = $(this).children('.list-item');
        $('.list-item').removeClass('active-python');
        $child.addClass('active-python');
        let $id_child = $(this).attr('id');
        $('.item-list-content').removeClass('display-block');
        $('.item-list-content#p' + $id_child).addClass('display-block');

    });

    // ===============================================================================
    // Програма для курсу
    $('.list-content').on('click', function () {
        let heigh = $(this.lastElementChild.scrollHeight);
        $('.list-content').css('border-color', '#A7A7A7');
        $(this).css('border-color', '#FDDB58');
        let child = $(this).children('.list-content-title');
        $('.list-content-title').removeClass('active-python');
        child.addClass('active-python');
        let child2 = $(this).children('.list-content-text');
        $('.list-content-text').css('height', 0);
        child2.css('height', heigh[0] + 'px');

    });

// ===============================================================================


    //плавний скрол до якоря до форми
    function animationScroll(element, time) {
        $(element).click(function () {
            let scrollElem = $(this).attr('href');
            if ($(scrollElem).length != 0) {
                $('html, body').animate({scrollTop: $(scrollElem).offset().top}, time);
            }
        });
    }

    animationScroll('.seven-python-item-button button a', 1500);

    animationScroll('.list-item a', 500);
});


let javaListTitle = document.querySelectorAll('.java-complex-list-title');
let javaListText = document.querySelectorAll('.java-complex-list-text');

y(javaListTitle, javaListText);

function y(a, b) {
    for (let i = 0; i < a.length; i++) {
        a[i].onclick = () => {
            for (let i = 0; i < b.length; i++) {
                b[i].style.display = 'none';
            }
            b[i].style.display = 'block';
        };
    }
}

// modal
let rec = document.querySelector('.rec-courses');
let modal = document.querySelector('.body-modal');
let nineBtn = document.querySelectorAll('.nine-btn button');

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

// Collapse

// accordion 1
function accord() {
    let accord1 = document.querySelectorAll('.python-header-item-title');
    let arrAccord1 = Array.from(accord1);

    let accordText = document.querySelectorAll('.python-header-item-text');
    let arrAccordText = Array.from(accordText);
    arrAccord1.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.target.nextElementSibling.classList.toggle('is-visible-mobile');

            if (e.target.nextElementSibling.classList.contains('is-visible-mobile')) {
                e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
                e.target.offsetParent.classList.add('border-color');

            } else {
                e.target.nextElementSibling.style.height = '';
                e.target.offsetParent.classList.remove('border-color');
            }
        });
    });

    arrAccordText.forEach(function (el) {
        if (el.classList.contains('is-visible-mobile')) {
            el.style.height = el.scrollHeight + 'px';
        }
    })
}

accord();

// accordion 2
function accord2() {
    let python = document.querySelectorAll('.four-item-wrap-python-title-mob');
    let arrPython = Array.from(python);

    let pythonText = document.querySelectorAll('.four-item-wrap-python-text');
    let arrPythonText = Array.from(pythonText);
    arrPython.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.target.nextElementSibling.classList.toggle('is-visible');
            if (e.target.nextElementSibling.classList.contains('is-visible')) {
                e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
                e.target.children[0].classList.add('bg-green');
            } else {
                e.target.nextElementSibling.style.height = 0;
                e.target.children[0].classList.remove('bg-green');
            }
        })
    });

    arrPythonText.forEach(function (el) {
        if (el.classList.contains('is-visible')) {
            el.style.height = el.scrollHeight + 'px';
        }
    })
}

accord2();

// accordion 3
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


// accordion 4
let course = document.querySelector('#course');

course.addEventListener('click', function (e) {

    e.target.nextElementSibling.classList.toggle('is-visible-mobile');

    if (e.target.nextElementSibling.classList.contains('is-visible-mobile')) {
        e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
    } else {
        e.target.nextElementSibling.style.height = '';
    }
});

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


























