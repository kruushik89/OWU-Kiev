$(document).ready(function() {
    $('.list-inner').on('click',function () {
        let $child = $(this).children('.list-item');
        $('.list-item').removeClass('active-java');
        $child.addClass('active-java');
        let $id_child = $(this).attr('id');
        $('.item-list-content').removeClass('display-block');
        $('.item-list-content#p'+$id_child).addClass('display-block');
    });

    // ===============================================================================
    // Програма для курсу
    $('.list-content').on('click', function () {
        let heigh = $(this.lastElementChild.scrollHeight);
        $('.list-content').css('border-color','#A7A7A7');
        $(this).css('border-color', '#f48120');
        let child = $(this).children('.list-content-title');
        $('.list-content-title').removeClass('active-java');
        child.addClass('active-java');
        let child2 = $(this).children('.list-content-text');
        $('.list-content-text').css('height', 0);
        child2.css('height', heigh[0]+'px');

    })
});
