// Toggle Navbar
document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

document.querySelector('#whatsapp').addEventListener('click', (event)=>{
    event.preventDefault();
    document.querySelector("img.qr-code").classList.toggle("hide");
})