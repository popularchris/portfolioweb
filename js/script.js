let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(' nav   li');
console.log(navLinks)

navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => {
                item.classList.remove('active')
                this.classList.add('active')
            })
        })
    })
    /*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-image, .service-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, about-image', { origin: 'left' })
ScrollReveal().reveal('.home-content p, home-content', { origin: 'right' });
ScrollReveal().reveal('.adventure-btn', { origin: 'left' })
ScrollReveal().reveal('.adventure-btn1', { origin: 'right' })
ScrollReveal().reveal('.home-content p, home-content', { origin: 'right' });
ScrollReveal().reveal('.starter-content', { origin: 'top' });
ScrollReveal().reveal('.about-content', { origin: 'top' });
ScrollReveal().reveal('.ceo-heading', { origin: 'top' });
ScrollReveal().reveal('.ceop', { origin: 'right' });
ScrollReveal().reveal('.ceoimg', { origin: 'left' });
ScrollReveal().reveal('.about-content', '.home-content', { origin: 'top' });
ScrollReveal().reveal('.services', { origin: 'bottom' });
ScrollReveal().reveal('.spanheading', { origin: 'top' });
ScrollReveal().reveal('.spanp', { origin: 'left' });
ScrollReveal().reveal('.destination-plan', { origin: 'right' });
ScrollReveal().reveal('.footer-box', { origin: 'bottom' });
ScrollReveal().reveal('.headline');

const sec = document.querySelectorAll("section");
const navLi = document.querySelectorAll("li");
window.addEventListener("scroll", () => {
    let current = "";
    sec.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

const menuIcon = document.querySelector('.menu-icon1')
menuIcon.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('open')
})