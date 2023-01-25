import 'swiper/swiper.min.css'
import Swiper, { Navigation } from 'swiper'
Swiper.use([Navigation])

const initSlider = () => {
	new Swiper('.swiper', {
		// loop: true,
		slidesPerView: 2,
		spaceBetween: 20,
		initialSlide: 2,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
}

initSlider()
