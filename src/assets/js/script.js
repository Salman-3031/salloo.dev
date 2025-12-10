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


document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  // Click handler for filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get filter value
      const filter = this.textContent.trim();
      
      // Reset all buttons to white
      filterButtons.forEach(btn => {
        btn.className = 'filter-btn px-3 py-2 text-xs md:text-base border-0 bg-white text-black rounded-sm capitalize font-semibold hover:bg-green-400 transition duration-300 hover:text-white text-shadow-2xs';
      });
      
      // Make clicked button green
      this.className = 'filter-btn px-3 py-2 text-xs md:text-base border-0 rounded-sm capitalize font-semibold bg-green-400 transition duration-300 hover:text-white text-shadow-2xs';
      
      // Show/Hide projects
      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'All' || 
            (filter === 'UI/UX' && category === 'uiux') ||
            (filter === 'Portfolio' && category === 'portfolio') ||
            (filter === 'Branding' && category === 'branding')) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});