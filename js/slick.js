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
    dots: true,
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

$(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".four-about-slider-wrap").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                lazyLoad: 'ondemand', // ondemand progressive anticipated
                dots: true,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$(".six-about-content-mobile").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".gallery").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false,
            }
        }
    ]
});

$(".four-index-slider-wrap").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                lazyLoad: 'ondemand', // ondemand progressive anticipated
                dots: true,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.four-react-carousel').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 3,
    responsive: [

        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});

$(".full-nine-carousel").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                lazyLoad: 'ondemand', // ondemand progressive anticipated
                dots: true,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

