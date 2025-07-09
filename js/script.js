let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(' nav   li');
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
ScrollReveal().reveal('.home-content', '.ceop', { origin: 'top' });
ScrollReveal().reveal('.ceop', { origin: 'top' });
ScrollReveal().reveal('.spanp', { origin: 'bottom' });
ScrollReveal().reveal('.starter-content', { origin: 'top' });
ScrollReveal().reveal('.about-content', { origin: 'top' });
ScrollReveal().reveal('.ceo-heading', { origin: 'top' });
ScrollReveal().reveal('.about-content', '.home-content', { origin: 'top' });
ScrollReveal().reveal('.services', { origin: 'top' });
ScrollReveal().reveal('.spanheading', { origin: 'top' });
ScrollReveal().reveal('.contact-us', { origin: 'top' });
ScrollReveal().reveal('.contact', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.footer-box', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio-container', { origin: 'bottom' });
ScrollReveal().reveal('.journey', { origin: 'top' });



const menuIcon = document.querySelector('.menu-icon1')
menuIcon.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('open')
})


// const sidebarr = document.querySelector('.sidebar');
// const sidebarLinks = document.querySelectorAll('a');

// function closeSidebar() {
//     sidebarr.style.width = '0'
// }
// sidebarLinks.forEach(link => {
//     link.addEventListener('click', closeSidebar)
// })




// const menuIcon2 = document.querySelector('.menu-icon1')
// menuIcon2.addEventListener('click', function() {
//     const safarinav = document.getElementById('sidebar')
//     safarinav.classList.toggle('open')
// })