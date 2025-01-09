// Toggle Navbar
document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

try{
    document.querySelector('#whatsapp').addEventListener('click', (event)=>{
        event.preventDefault();
        document.querySelector("img.qr-code").classList.toggle("hide");
    })
} catch(error){}