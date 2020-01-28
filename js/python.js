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
    //плавний скрол до якоря
    $('.list-item a').click(function () {
        // возьмем содержимое атрибута href, должен быть селектором, например начинать # с или .
        let scrollElem = $(this).attr('href');

        if ($(scrollElem).length != 0) {
            $('html, body').animate({scrollTop: $(scrollElem).offset().top}, 500);
        }
    })
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

let close = document.querySelector('.close-image img');
close.onclick = () => {
    modal.classList.remove('d-block');
};
// end modal

// Collapse

let show = (el) => {
    let getHeight = () => {
        el.style.display = 'block';
        let height = el.scrollHeight + 'px';
        el.style.display = '';
        return height;
    };

    let height = getHeight();
    el.classList.add('is-visible');
    el.style.height = height;

    window.setTimeout(function () {
        el.style.height = '';
    }, 1250);
};

let hide = (el) => {
    el.style.height = el.scrollHeight + 'px';

    window.setTimeout(function () {
        el.style.height = '0';
    }, 1);

    window.setTimeout(function () {
        el.classList.remove('is-visible');
    }, 1250);
};


let toggle = function (el, timing) {
    if (el.classList.contains('is-visible')) {
        hide(el);
        return;
    } else {
        show(el);
    }

};

let b = document.querySelectorAll('.five-item-title-mob');
f(b);

function f(param) {
    param.forEach(function (el) {

        el.addEventListener('click', function (e) {
            toggle(e.target.nextElementSibling);
            if (e.target.nextElementSibling.classList.contains('is-visible')) {
                e.target.parentNode.classList.toggle('bg-fff');
            }
        })
    });
}


// accordion 1
let image = document.querySelectorAll('.four-item-wrap-python-title span img');
let arrImage = Array.from(image);

let python = document.querySelectorAll('.four-item-wrap-python-title-mob');
let arrPython = Array.from(python);

let spanPython = document.querySelectorAll('.four-item-wrap-python-title-mob span');
let arrSpanPython = Array.from(spanPython);


arrPython.forEach(function (el) {
    el.addEventListener('click', function (e) {
        console.log(e.target.children[0]);
        e.target.nextElementSibling.classList.toggle('is-visible');
        if (e.target.nextElementSibling.classList.contains('is-visible')) {
            e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
            e.target.children[0].style.backgroundColor = '#72CC37';
        } else {
            e.target.nextElementSibling.style.height = 0;
            e.target.children[0].style.backgroundColor = '';
        }
    })
});


let course = document.querySelector('#course');

course.addEventListener('click', function (e) {

    e.target.nextElementSibling.classList.toggle('is-visible-mobile');

    if (e.target.nextElementSibling.classList.contains('is-visible-mobile')) {
        e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
    } else {
        e.target.nextElementSibling.style.height = 0;
    }
});


let accord1 = document.querySelectorAll('.python-header-item-title');
let arrAccord1 = Array.from(accord1);

let accordText = document.querySelectorAll('.python-header-item-text');
let arrAccordText = Array.from(accordText);

function accord() {
    arrAccord1.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.target.nextElementSibling.classList.toggle('is-visible-mobile');

            if (e.target.nextElementSibling.classList.contains('is-visible-mobile')) {
                e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
                e.target.offsetParent.classList.add('border-color');

            } else {
                e.target.nextElementSibling.style.height = 0;
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
























