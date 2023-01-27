import { classes } from '../Utilities/Classes.js'

const video = document.getElementById('video')
const videoButton = document.querySelector('.video-btn')
let isPlay = false

const handleVideo = ({ target }) => {
	const info = target.parentElement

	isPlay = !isPlay
	info.classList.toggle(classes.hidden, isPlay)
	target.innerText = isPlay ? 'Pause' : 'Play'
	isPlay ? video.play() : video.pause()
}

videoButton.addEventListener('click', handleVideo)
