// import '../node_modules/jquery/dist/jquery.js';
// import '../node_modules/slick-carousel/slick/slick.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/slick-carousel/slick/slick.scss';
import '../node_modules/slick-carousel/slick/slick-theme.scss';
import '../scss/main.scss';



// var $ = jQuery.noConflict();

$(document).ready(()=>{
    setTimeout(()=>{
        console.log('set timeout method');
        $('.slider-center').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
    });
    
    $('.who').fadeIn(1000);
    $('.reached').fadeIn(2000);
    $('.found').fadeIn(3000);
    $('.where').fadeIn(4000);
    $('.how').fadeIn(5000);
    $('.left').fadeIn(6000);
    }, 500);

  })