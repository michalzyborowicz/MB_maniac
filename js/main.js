const mobileNavBtn = document.querySelector('.mobile-menu')
const mobileCloseBtn = document.querySelector('.mobile-menu-close')
const navMobile = document.querySelector('.mobile')

const mobileNavOpener = () => {
  navMobile.style.display = 'flex'
  navMobile.classList.add('active-flex')
if(navMobile.classList.contains('active-flex')){
    mobileNavBtn.style.display = 'none'
    mobileCloseBtn.style.display = 'block'
}
  
}
const closeMobileNav = () => {
    navMobile.style.display='none'
    mobileNavBtn.style.display='block'
    mobileCloseBtn.style.display = 'none'
}

mobileNavBtn.addEventListener('click', mobileNavOpener)
mobileCloseBtn.addEventListener('click', closeMobileNav)
