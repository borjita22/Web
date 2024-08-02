


function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.maxHeight === '0px' || mobileMenu.style.maxHeight === '') 
    {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    } 
    else 
    {
        mobileMenu.style.maxHeight = '0px';
    }
}

function handleResize() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth > 768) {
        mobileMenu.style.maxHeight = '0px';
    }
}

window.addEventListener('resize', handleResize);
  