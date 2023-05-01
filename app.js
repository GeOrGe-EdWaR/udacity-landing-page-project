/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll("section");
let navlist = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function createNav() {
  let navLi = "";
  sections.forEach((section) => {
    let sectionId = section.id;
    let sectionDataNav = section.dataset.nav;
    navLi += `<li><a class="menu__link" href ="#${sectionId}">${sectionDataNav}</a></li>`;
  });
  navlist.innerHTML = navLi;
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

sections.forEach((section) => {
  section.onclick = function () {
    //remove all active classes
    sections.forEach((section) => {
      section.classList.remove("your-active-class");
    });
    //add active class
    this.classList.add("your-active-class");
  };
});
// scroll btn
let btn = document.querySelector("span");
window.onscroll = () => {
  if (window.scrollY >= 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */
window.scrollTo({
  behavior: "smooth",
});
// Build menu
createNav();
// Scroll to section on link click
// Set sections as active
