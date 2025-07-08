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
// ScrollReveal().reveal('.home-image, .service-container,.portfolio-box,.contact form', { origin: 'bottom' });
// // ScrollReveal().reveal('.home-content h1, about-image', { origin: 'left' })
// // ScrollReveal().reveal('.home-content p, home-content', { origin: 'right' });
// // ScrollReveal().reveal('.adventure-btn', { origin: 'left' })
// // ScrollReveal().reveal('.adventure-btn1', { origin: 'right' })
// // ScrollReveal().reveal('.home-content p, home-content', { origin: 'right' });
// ScrollReveal().reveal('.starter-content', { origin: 'top' });
// ScrollReveal().reveal('.about-content', { origin: 'top' });
// ScrollReveal().reveal('.ceo-heading', { origin: 'top' });
// // ScrollReveal().reveal('.ceop', { origin: 'right' });
// // ScrollReveal().reveal('.ceoimg', { origin: 'left' });
// // ScrollReveal().reveal('.about-content', '.home-content', { origin: 'top' });
// ScrollReveal().reveal('.services', { origin: 'bottom' });
// ScrollReveal().reveal('.spanheading', { origin: 'top' });
// // ScrollReveal().reveal('.spanp', { origin: 'left' });
// // ScrollReveal().reveal('.destination-plan', { origin: 'right' });
// ScrollReveal().reveal('.footer-box', { origin: 'bottom' });


// const menuicon = document.querySelectorAll('.menu-icon')
// menuicon.addEventListener('clcik', function() {
//     menuicon.toggle('menuixon')
// })