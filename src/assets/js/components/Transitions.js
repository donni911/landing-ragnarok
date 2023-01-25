import { classes } from '../Utilities/Classes'

const sections = document.querySelectorAll('.section')

const handleScroll = () => {
	const { scrollY: y, innerHeight: h } = window
	
	sections.forEach((sec) => {
		if (y > sec.offsetTop - h / 1.5) sec.classList.remove(classes.hidden)
	})
}

window.addEventListener('scroll', handleScroll)
