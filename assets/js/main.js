window.onscroll = function() {
    var header_navbar = document.getElementById("header_navbar");
    var logo = document.querySelector("img#logo");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
        logo.setAttribute("src", "assets/img/logo/logo-white.png")
    } else {
        header_navbar.classList.remove("sticky");
        logo.setAttribute("src", "assets/img/logo/logo-blue.png")
    }
};

var pageLink = document.querySelectorAll('.page-scroll');
pageLink.forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 1-50
        });
    });
});

let navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");
document.querySelectorAll(".page-scroll").forEach(e => e.addEventListener("click", () => {
    navbarToggler.classList.remove("active");
    navbarCollapse.classList.remove('show')
}));

