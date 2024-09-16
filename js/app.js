
$(document).ready(function () {

    $(".stellarnav").stellarNav({
        breakpoint: 991,
        position: "left",
    });

    setTimeout(function () {
        $('.hero_bnnr .top').fadeIn(10300).addClass('visible');
    }, 10800);

    setTimeout(function () {
        $('.hero_bnnr').fadeIn(10000).addClass('animate'); // Fade in over 1 second
    }, 10500);

    setTimeout(function () {
        $('.frst_text .first').css('opacity', '1').hide().fadeIn();
    }, 3000);

    setTimeout(function () {
        $('.frst_text .scnd').css('opacity', '1').hide().fadeIn();
    }, 5000);


    $('.cart-wraper p').height(Math.max.apply(null, $('.cart-wraper p').map(function () { return $(this).height(); }).get()));

    $('.hm_sec3 .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.portfolio-sec2-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    $(".accordian li h5").click(function () {
        $(this).parent().siblings().removeClass("active").find(".content").slideUp();
        $(this).parent().toggleClass("active").find(".content").slideToggle();

    });

});




// news_sec2marquee
document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee-inner");
    const speed = 1.1; // Scrolling Speed
    let scrollAmount = 0;
    let isHovered = false;

    // Duplicates the content
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;

    const startScrolling = () => {
        if (!isHovered) {
            scrollAmount -= speed;
            if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
                scrollAmount = 0;
            }
            marquee.style.transform = `translateX(${scrollAmount}px)`;
        }
        requestAnimationFrame(startScrolling);
    };

    marquee.addEventListener("mouseover", () => {
        isHovered = true;
    });

    marquee.addEventListener("mouseout", () => {
        isHovered = false;
    });

    startScrolling();
});

// ------------------------------------------------------------------------