$(window).scroll(function(e){
    if ($(this).scrollTop() > 2350) {
        $('.course-consists-item-blue').addClass('rotate-360');
        $('.course-consists-item-orange').addClass('rotate-revers');
    }
    // else {
    //     $('.course-consists-item-blue').removeClass('rotate-360');
    //     $('.course-consists-item-orange').removeClass('rotate-revers');
    // }
});

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
