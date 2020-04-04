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

// mobile drop nav menu
let courseMobile = document.querySelector('#course');

courseMobile.onclick = () => {
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

// add white border from item
//     let typeBtn3 = document.querySelectorAll('.type-3-item a');
//
// function addWhiteBorder(param) {
//     param.forEach(el => {
//         el.addEventListener('mouseenter', function (e) {
//             e.target.offsetParent.classList.add('border-white');
//         });
//         el.addEventListener('mouseleave', function (e) {
//             e.target.offsetParent.classList.remove('border-white');
//         });
//     });
// }

// addWhiteBorder(typeBtn3);
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


    $(document).on("scroll",function(){
        if($(document).scrollTop()>= 1){
            $("header").addClass("small");
        } else{
            $("header").removeClass("small");
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
            e.target.style.borderColor = '#3298f2';

        });

        el.addEventListener('mouseleave', function (e) {
            e.target.children[0].style.backgroundColor = '';
            e.target.children[0].style.color = '';
            e.target.style.borderColor = '';
        })

    });
}

hoverForms('.type-tyrphs-item');


// =========================================================================================================================

//border blue in index.html type 3


let threeItemBtn = document.querySelectorAll('.three-index-item-footer');

threeItemBtn.forEach(el => {
    el.onmouseenter = (e) => {
        e.target.previousElementSibling.style.border = '1px solid #3298F2';
        e.target.previousElementSibling.children[0].style.border = '1px solid #3298F2';
    };

    el.onmouseleave = (e) => {
        e.target.previousElementSibling.style.border = '';
        e.target.previousElementSibling.children[0].style.border = '';
    };
});


let fourItemBtn = document.querySelectorAll('.four-index-slider-item-footer');

fourItemBtn.forEach(el => {
    el.onmouseenter = (e) => {
        console.log(e);
        e.target.previousElementSibling.style.border = '1px solid #FF9638';
    };

    el.onmouseleave = (e) => {
        e.target.previousElementSibling.style.border = '';
    };
});


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


let playVideo = document.querySelectorAll('.play i');

function play (play) {
    play.forEach((el) => {

        el.addEventListener('click', (e) => {
            let videoReview = document.querySelector('.video-reviews');
            let id = e.target.dataset.id;
            let videoReviewWrap = '';


            videoReviewWrap = `
            <iframe width="100%" height="100%" src="https://youtube.com/embed/${id}"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen id="Youtube"></iframe>
        `;

            videoReview.innerHTML = videoReviewWrap;
        });

    });
}

play(document.querySelectorAll('.play i'));
play(document.querySelectorAll('.video-play-image img'));


// stop video youtube
$(document).ready(function() {
    $('#pauseYoutube').on('click', function() {
        $('#Youtube').remove();
    });
});











































