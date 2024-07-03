function toggleMenu() {
    const nav = document.getElementById('nav');
    const menuIcon = document.querySelector('.menu-icon');
    const isOpen = nav.style.left === '0px';
    
    if (isOpen) {
        nav.style.left = '-300px';
        menuIcon.classList.remove('open');
    } else {
        nav.style.left = '0';
        menuIcon.classList.add('open');
    }
}

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Increment slide index and reset if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change slide every 2 seconds
    setTimeout(showSlides, 2000);
}

// Initial call to start slideshow
showSlides();

// Close menu if clicked outside of it
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const menuIcon = document.querySelector('.menu-icon');
    const isClickInsideNav = nav.contains(event.target) || menuIcon.contains(event.target);
    const isOpen = nav.style.left === '0px';
    
    if (!isClickInsideNav && isOpen) {
        nav.style.left = '-300px';
        menuIcon.classList.remove('open');
    }
});
