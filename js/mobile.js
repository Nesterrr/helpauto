(function(){
	var moreButton = document.querySelectorAll('.circle');
	var btn = document.querySelectorAll('.more');
	var addAnimation = document.querySelectorAll('.to-animate');
	var xClose = document.querySelectorAll('.xclose');
	var slideSlide = document.querySelector('.slide-slide');

	var btnMsk = document.querySelector('.slide-slide span:last-child');
	var btnSpb = document.querySelector('.slide-slide span:first-child');

	var mapTmblr = document.querySelector('.map-if');

	btnMsk.addEventListener('click', function() {
		slideSlide.classList.remove('btn-slide-bg-2');
		slideSlide.classList.add('btn-slide-bg-1');
		mapTmblr.src = 'https://api-maps.yandex.ru/frame/v1/-/CZXMRVne';
	});

	btnSpb.addEventListener('click', function() {
		slideSlide.classList.remove('btn-slide-bg-1');
		slideSlide.classList.add('btn-slide-bg-2');
		mapTmblr.src = 'https://api-maps.yandex.ru/frame/v1/-/CZXMNN9q';
	});

	var formSend = document.querySelector('#form-send');

	var menuSecondLvl = document.querySelector('.first-lvl li ul');

	//$(document).ready(function() {
  		var bx = $('.bxslider').bxSlider();
	//});

	document.addEventListener('click', function(event) {
		if(event.target.dataset.close === 'xcl') {
			formSend.classList.add('hidden');
		}
	});
	document.addEventListener('click', function(event) {
		var evt = event.target;

		if(evt.dataset.btn === 'callform') {
			event.preventDefault();
			evt.parentNode.parentNode.appendChild(formSend);
			formSend.classList.remove('hidden');
		}

		if(evt.dataset.menu === 'menu-2') {
			event.preventDefault();
			menuSecondLvl.classList.remove('hidden');
		}
		if(evt.dataset.menu === 'menu-1') {
			slideout.close();
			menuSecondLvl.classList.add('hidden');
		}
		if(evt.dataset.menu === 'submenu-1') {
			slideout.close();
			menuSecondLvl.classList.add('hidden');
			bx.goToSlide(2);
		}
		if(evt.dataset.menu === 'submenu-2') {
			slideout.close();
			menuSecondLvl.classList.add('hidden');
			bx.goToSlide(1);
		}
		if(evt.dataset.menu === 'submenu-3') {
			slideout.close();
			menuSecondLvl.classList.add('hidden');
			bx.goToSlide(3);
		}
		if(evt.dataset.menu === 'submenu-4') {
			slideout.close();
			menuSecondLvl.classList.add('hidden');
			bx.goToSlide(0);
		}
	});


})();
