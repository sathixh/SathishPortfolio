const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 120)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};



document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: [
            "Passionate Developer",
            "Tech Enthusiast",
            "Problem Solver"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    };

    var typed = new Typed('.typed-output', options);
});


