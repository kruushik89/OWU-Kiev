// c-hamburger
document.querySelector('.c-hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
});
// end c-hamburger

// add white border from item
let typeBtn3 = document.querySelectorAll('.type-3-item button');
typeBtn3.forEach(el => {
    el.addEventListener('mouseenter', function (e) {
        // e.target.offsetParent.style.border = '1px solid #ffffff';
        e.target.offsetParent.classList.add('border-white');
    });
    el.addEventListener('mouseleave', function (e) {
        // e.target.offsetParent.style.border = '1px solid #474747';
        e.target.offsetParent.classList.remove('border-white');
    });
});
// end add white border from item





