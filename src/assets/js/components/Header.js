import { classes } from '../Utilities/Classes'

const header = document.querySelector('.header')
const menuLink = document.querySelectorAll('.menu-link')
const menuButton = document.querySelector('.header-menu__button')

const toggleMenu = () => header.classList.toggle(classes.opened)

const scrollToSection = (e) => {
	e.preventDefault()
	const href = e.currentTarget.getAttribute('href')

	if (!href && !href.startsWith('#')) return

	const section = href.slice(1)
	const top = document.getElementById(section)?.offsetTop || 0
	window.scrollTo({ top, behavior: 'smooth' })
}

menuButton.addEventListener('click', toggleMenu)
menuLink.forEach((link) => link.addEventListener('click', scrollToSection))
