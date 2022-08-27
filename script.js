// Fixes links with sticky navbar
$('a[href*="#"]').click(function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 0);
});

// Toggle links in small menu (for phones)
function toggleMenu() {
    $(".menu, .links").toggleClass("active");
}

// 
$(window).click((e) => {
    if (!e.target.matches("nav *") || e.target.matches("nav a")) {
        toggleMenu();
    }
});

// Smooth load in animation
function reveal() {
    let reveals = $("section *");

    for (let i = 0; i < reveals.length; i++) {
        reveals[i].getBoundingClientRect().top < window.innerHeight - 150 ?
            reveals[i].classList.add("active")
        :
            reveals[i].classList.remove("active");
    }
}

window.addEventListener("scroll", reveal);