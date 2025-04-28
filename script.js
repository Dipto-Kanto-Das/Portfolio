$(document).ready(function() {
    // Sticky navbar on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide on scroll
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Smooth scroll to top on click
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0}, 600);
        // Disable smooth scroll temporarily for scroll-up
        $('html').css("scrollBehavior", "auto");
    });

    // Apply smooth scroll on menu item click
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script for responsive design
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation for "Software Engineer", "Full-Stack Web Developer", etc.
    var typed1 = new Typed(".typing", {
        strings: ["Software Engineer", "Full-Stack Web Developer", "Website Creator", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Software Engineer", "Full-Stack Web Developer", "Website Creator", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel configuration
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Read more functionality
const readMoreBtn = document.querySelector('.read-more-btn');
const moreContent = document.querySelector('.more-content');

readMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (moreContent.style.maxHeight === "0px" || moreContent.style.maxHeight === "") {
        moreContent.style.maxHeight = moreContent.scrollHeight + "px";
        readMoreBtn.textContent = "Read less";
    } else {
        moreContent.style.maxHeight = "0";
        readMoreBtn.textContent = "Read more";
    }
});

