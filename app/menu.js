function toggleMenu() {
    const nav = document.getElementById('nav');
    if (nav.style.left === '-300px') {
        nav.style.left = '0';
    } else {
        nav.style.left = '-300px';
    }
}
