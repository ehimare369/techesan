// Selection of HTML objects
// Mobile Navigation Bar
const mobileMenu = document.querySelector(".navbar-toggle i");
const navbarMenu = document.querySelector(".navbar-menu");

// Defining function
const toggleNavbar = () => {
  // mobileMenu.classList.toggle('fa-bars');
  mobileMenu.classList.toggle("fa-times");
  navbarMenu.classList.toggle("navbar-active");
};

// Calling the fucntion after click event occurs
mobileMenu.addEventListener("click", toggleNavbar);

// Projects Filter
const listItems = document.querySelectorAll("#projects button");
const allProjects = document.querySelectorAll(
  "#projects .projects-container .project"
);

// Defining the function
const toggleActiveClass = (active) => {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
  active.classList.add("active");
};

const toggleProjects = (dataClass) => {
  if (dataClass === "all") {
    for (let i = 0; i < allProjects.length; i++) {
      allProjects[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < allProjects.length; i++)
      allProjects[i].dataset.class === dataClass
        ? (allProjects[i].style.display = "block")
        : (allProjects[i].style.display = "none");
  }
};

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", () => {
    toggleActiveClass(listItems[i]);
    toggleProjects(listItems[i].dataset.class);
  });
}

// Footer section for current year
const copyrightDate = () => {
  let year = new Date().getYear();
  if (year < 1900) year += 1900;
  document.getElementById("currentYear").innerHTML = year;
};

copyrightDate();
