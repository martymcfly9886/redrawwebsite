const navMenu = document.querySelector('.nav-menu');
const burger = document.querySelector('.burger');

burger.addEventListener('.click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('active');
})