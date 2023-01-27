import { classes } from '../Utilities/Classes.js'

const checkbox = document.querySelectorAll('.checkbox')

const checkboxes = {
	requirements: ['minimum', 'recommended'],
	versions: ['standard', 'limited'],
}

const handleCheckbox = ({ currentTarget: { checked, name } }) => {
	const { active } = classes
	const value = checkboxes[name][Number(checked)]
	const list = document.getElementById(value)
	const tabs = document.querySelectorAll(`[data-${name}]`)
	const siblings = list.parentElement.children

	for (const item of siblings) item.classList.remove(active)
	for (const tab of tabs) {
		tab.classList.remove(active)
		tab.dataset[name] === value && tab.classList.add(active)
	}

	list.classList.add(active)
}

checkbox.forEach((box) => box.addEventListener('click', handleCheckbox))
