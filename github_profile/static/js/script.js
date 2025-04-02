function showSidebar() {
    document.querySelector('.sidebar').style.width = '250px';
    document.querySelector('.overlay').classList.add('active');
}

function hideSidebar() {
    document.querySelector('.sidebar').style.width = '0';
    document.querySelector('.overlay').classList.remove('active');
}

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});