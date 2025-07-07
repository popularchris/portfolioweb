let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

let navbar = document.querySelector('.navbar')
navbar.style.maxHeight = "0px"

function toggleMenu() {
    if (navbar.style.maxHeight == "0px") {
        navbar.style.maxHeight = "300px"
        navbar.style.display = "flex"
    } else {
        navbar.style.maxHeight = "0px"
        navbar.style.display = "none"
    }
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");


        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href* =' + id + ']').classList.add('active');
            })
        }
    })
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
}
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});
// ScrollReveal().reveal('.home-content, .heading ', { origin: "top" });
ScrollReveal().reveal('.ceo-section, .vision ', { origin: "top" });