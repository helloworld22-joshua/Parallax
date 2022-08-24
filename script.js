// Toggle links in small menu (for phones)
function toggleMenu() {
    $(".menu").toggleClass("active");
    $(".links").toggle();
}

// Fixes links with sticky navbar
$('a[href*="#"]').click(function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 0);
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