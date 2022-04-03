// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller} from 'swiper'
Swiper.use([ Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller ])
document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	const sliderTop = new Swiper('.slider__top', {
		speed: 800,
		// autoHeight: true,
		loop: false,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},


	})

	let sliderStartPanel = document.querySelector('.slider__startPanel');
	let buttonStartPanel = document.querySelector('.button__startPanel');
	let sliderTopStart = document.querySelector('.slider__top');

	function buttonStart() {
		sliderStartPanel.style.display = "none";
		sliderTopStart.style.display = "flex";
		sliderTopStart.classList.add("animate__fadeInRight")   
	}
	buttonStartPanel.addEventListener("click", ()=>{
		setTimeout(buttonStart, 5000);
	})



})
