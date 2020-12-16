
const navSlide = () => {
	const burger =  document.querySelector('.menu');
	const nav = document.querySelector('.nav-list');
	const navLinks = document.querySelectorAll('.nav-list li');

	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');

	burger.classList.toggle('toggle');
	});

}


navSlide();

