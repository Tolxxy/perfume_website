const navLinks = document.querySelector('.nav-links');
function onToggleMenu(icon){
    icon.name = icon.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[9%]');
}

