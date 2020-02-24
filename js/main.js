
let buttonMenu = document.querySelector('.c-hamburger');

let menuMobile = document.querySelector('.menu-mobile');
buttonMenu.onclick = () => {
    menuMobile.classList.toggle('left-0');
};

// end menu

// c-hamburger
document.querySelector('.c-hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
});
// end c-hamburger

// =========================================================================================================================

// modal
let modalWindow = document.querySelector('.body-modal');
let modalButton = document.querySelectorAll('.button-modal');

for (let i = 0; i < modalButton.length; i++) {
    modalButton[i].onclick = function () {
        modalWindow.classList.add('d-block');
    }
}

let closeButton = document.querySelector('.close-image');
closeButton.onclick = () => {
    modalWindow.classList.remove('d-block');
};
// end modal

// =========================================================================================================================

// mobile drop nav menu
let courseMobile = document.querySelector('#course');

courseMobile.onclick = () =>{
    let dropDown = document.querySelector('.dropdown-menu-mobile');
    dropDown.classList.toggle('is-visible-mobile');

    if (dropDown.classList.contains('is-visible-mobile')) {
        dropDown.style.height = dropDown.scrollHeight + 'px';
    } else {
        dropDown.style.height = '';
    }
};
// end mobile drop nav menu

// =========================================================================================================================

// add white border from item
    let typeBtn3 = document.querySelectorAll('.type-3-item a');

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

addWhiteBorder(typeBtn3);
// end add white border from item


// =========================================================================================================================
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



// =========================================================================================================================

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

// =========================================================================================================================

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


// =========================================================================================================================

//border blue in index.html type 3
let threeItemFooter = document.querySelectorAll('.three-index-item-footer');

threeItemFooter.forEach(function (el) {
    el.addEventListener('mouseenter', function (e) {
        e.target.offsetParent.style.border = '1px solid #3298F2';
        e.target.offsetParent.children[0].style.border = '1px solid #3298F2';
    });

    el.addEventListener('mouseleave', function (e) {
        e.target.offsetParent.style.border = '';
        e.target.offsetParent.children[0].style.border = '';
    })
});
//end border blue in index.html type 3


// =========================================================================================================================
                                                    // about
// =========================================================================================================================



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
// end type 6 border change color




