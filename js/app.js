const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navLinks = document.getElementById("nav-links");
const navToggle = document.getElementById("nav-toggle");
navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show-links")
})

const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 62) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed")
  }
})

const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    navLinks.classList.remove("show-links");
    const id = e.target.getAttribute("href").slice(1)
    const element = document.getElementById(id);
    let position;
    if (navbar.classList.contains("fixed")) {
      position= element.offsetTop - 62
    } else {
      position = element.offsetTop - 124
    }
    if (window.innerWidth < 992) {
      if (navbar.classList.contains("fixed")) {
        position = element.offsetTop - 62
      } else {
        position = element.offsetTop - 330 - 62;
      }
      position = element.offsetTop - 330 - 62;
    }
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    })

  })
})