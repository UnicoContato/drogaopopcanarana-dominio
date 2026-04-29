document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add('-translate-y-full');
    } else {
        header.classList.remove('-translate-y-full');
    }
    
    if(window.scrollY > 50) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
    
    lastScrollY = window.scrollY;
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalIcon = document.getElementById('close-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

closeModalIcon.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal.firstElementChild) {
        closeModal();
    }
});