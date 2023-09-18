// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

// let typed = new Typed('.auto-input', {
//     strings: ['Eu', 'Sou', 'Front-End', 'Developer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 2000,
//     loop: true,

// })