import { languages } from '../Components/Languages'

const language = document.querySelectorAll('.language')

const setTexts = () => {
	const lang = localStorage.getItem('lang') || 'en'

	const content = languages[lang]

	Object.entries(content).forEach(([key, value]) => {
		const items = document.querySelectorAll(`[data-text="${key}"]`)
		items.forEach((item) => (item.innerText = value))
	})
}

const toggleLanguage = ({ target }) => {
	const { lang } = target.dataset

	if (!lang) return

	localStorage.setItem('lang', lang)
	setTexts()
}

setTexts()

language.forEach((lang) => lang.addEventListener('click', toggleLanguage))
