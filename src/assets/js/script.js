// Element references
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-links');

function openMenu() {
  mobileMenu.classList.remove('top-[-500px]');
  mobileMenu.classList.add('top-[72px]');
}

function closeMenu() {
  mobileMenu.classList.remove('top-[72px]');
  mobileMenu.classList.add('top-[-500px]');
}

function isMenuOpen() {
  return mobileMenu.classList.contains('top-[72px]');
}

// Toggle on button click
menuToggle.addEventListener('click', () => {
  isMenuOpen() ? closeMenu() : openMenu();
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMenu();
  }
});

// Close on link click
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});



const switchColors = () =>{
  // document.documentElement.classList.toggle('dark');
};
// const emoji = document.getElementById('emoji')
// document.onmousemove = (e)=>{
//   emoji.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
// }

