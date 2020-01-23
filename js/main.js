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

rec.onclick = () => {
    modal.classList.add('d-block');
};

let close = document.querySelector('.close-image img');
close.onclick = () => {
    modal.classList.remove('d-block');
};
// end modal

// Collapse
let content1H3 = document.querySelector('.section-two-content-1');
let content2H3 = document.querySelector('.section-two-content-2');
let content1 = document.querySelector('.two-content-1');
let content2 = document.querySelector('.two-content-2');
let vector = document.querySelector('.arr');
let vector2 = document.querySelector('.arr-2');
// function transform rotate 180
function transform(param, param2) {
    param.onclick = () => {
        param2.classList.toggle('transform-rotate180');
    };
}

transform(content1H3, vector);
transform(content2H3, vector2);
// end function transform rotate 180

content2H3.addEventListener('click', function () {
    toggle(content2);
});

content1H3.addEventListener('click', function () {
    toggle(content1);
});


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

f(b);

let course = document.querySelector('#course');

course.addEventListener('click', function (e) {

    e.target.nextElementSibling.classList.toggle('is-visible-mobile');

    if (e.target.nextElementSibling.classList.contains('is-visible-mobile')) {
        e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
    } else {
        e.target.nextElementSibling.style.height = 0;
    }
});
















