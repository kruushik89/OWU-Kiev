$(document).ready(function() {
    $('.list-inner').on('click',function () {
        let $child = $(this).children('.list-item');
        $('.list-item').removeClass('active-js');
        $child.addClass('active-js');
        let $id_child = $(this).attr('id');
        $('.item-list-content').removeClass('display-block');
        $('.item-list-content#p'+$id_child).addClass('display-block');
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

    })
});
