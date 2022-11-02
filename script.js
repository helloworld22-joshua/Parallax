// Fixes links with sticky navbar
$("a[href*='#']").click(function (e) {
    e.preventDefault();
    $("html").animate({
        scrollTop: $($(this).attr("href")).offset().top - 100
    }, 0);
});

// Toggle links in small menu (for phones)
$(".menu").click(() => {
    $(".menu, .links").toggleClass("active");
});

// Closes small menu when click somewhere (or on a link)
$(window).click((e) => {
    if (!e.target.matches("nav *") || e.target.matches("nav a")) {
        $(".menu, .links").removeClass("active");
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

// View Images
$("img").click((e) => {
    $(".image-viewer img").attr("src", e.target.getAttribute("src"));
    $("body").css("overflow-y", "hidden");
    $(".image-viewer").show();
});

$(".close").click(() => {
    $("body").css("overflow-y", "auto");
    $(".image-viewer").hide();
});