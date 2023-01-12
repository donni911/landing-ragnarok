const menuBtn = document.querySelector(".js-menu-button")
const header = document.querySelector(".js-header")
const menuLinks = document.querySelectorAll(".js-menu-link")

const classes = {
  opened: "active",
}

const toggleMenu = () => {
  header.classList.toggle(classes.opened)
}

const scrollToSection = (e) => {
  e.preventDefault()

  const href = e.currentTarget.getAttribute("href")

  if (!href && !href.startWith("#")) {
    return
  }

  const section = href.slice(1)
  const top = document.getElementById(section)?.offsetTop || 0
  window.scrollTo({ top: top, behavior: "smooth" })
}

menuBtn.addEventListener("click", toggleMenu)
menuLinks.forEach((link) => link.addEventListener("click", scrollToSection))
