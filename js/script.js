function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	autoplay: {
	  delay: 2500,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });

  var swiper2 = new Swiper(".mySwiper-2", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
	  rotate: 50,
	  stretch: 0,
	  depth: 100,
	  modifier: 1,
	  slideShadows: true,
	},
	pagination: {
	  el: ".swiper-pagination",
	},
  });