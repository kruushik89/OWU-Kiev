$('.center').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '20px',
    arrows: false,
    responsive: [
        {
            breakpoint: 972,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }
    ]
});

$('.center-2').slick({
    infinite: true,
    dots: false,
    // autoplay: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerPadding: '30px',
    responsive: [
        {
            breakpoint: 972,
            settings: {
                slidesToShow: 1,
                centerMode: true,

            }
        }
    ]
});

$('.center-3').slick({
    infinite: true,
    dots: true,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 972,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }
    ]
});

$('.center-4').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '20px',
    arrows: false,
    responsive: [
        {
            breakpoint: 972,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }
    ]
});

$(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    dots: true,
    // autoplay: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

