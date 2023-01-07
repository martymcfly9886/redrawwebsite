const navMenu = document.querySelector('.nav-menu');
const burger = document.querySelector('.burger');
const link = document.querySelectorAll('.link')

burger.addEventListener('touch', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('active');
})

link.forEach(n => n.addEventListener('touch', () => {
    navMenu.classList.remove('active');
    burger.classList.remove('active');
}))