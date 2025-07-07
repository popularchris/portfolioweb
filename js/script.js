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
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .service-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, about-image', { origin: 'left' })
ScrollReveal().reveal('.home-content p, home-content', { origin: 'right' });


/*==================== typed js ====================*/
// const typed = new typed('.multiple-text', {
//     strings: ['Frontend & backend developer', 'Electronics engineer', 'Youtuber', 'Blogger'],
//     typeSpeed: 5000,
//     backSpeed: 5000,
//     backDelay: 5000,
//     loop: true,
// });