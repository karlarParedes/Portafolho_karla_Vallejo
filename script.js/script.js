// Header toggle

let MenuBtb = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classLis.ttoggle('fa-xmark')
})

// Typing Effect
let Typing = new Typed('auto-input', {
    Strings: ['Front-End Developer!', 'Front-End Developer!', 'Front-End Developer!', 'Fron-End Developer!'],
    typeSeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})