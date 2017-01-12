(function(){

	var slide = document.querySelectorAll('.slide');

	var formSend = document.querySelector('#form-send');
	var circleHidden = document.querySelectorAll('.circle');

	var decisions = document.querySelectorAll('.decision');
		//Кнопка-крестик - закрыть
	var xClose = document.querySelectorAll('.close');

	document.addEventListener('click', function(event){
		var evt = event.target;
		if(evt.dataset.btn === 'callform') {
			event.preventDefault();
			evt.appendChild(formSend);
			formSend.classList.remove('hidden');

		}
		if(evt.dataset.close === 'xcl') {
			event.preventDefault();
			formSend.classList.add('hidden');
		}

		if(evt.dataset.know === 'knw-1') {
			event.preventDefault();	

			decisions[0].classList.remove('hidden');
			xClose[0].classList.add('xcloseTop');
			circleHidden[0].classList.add('hidden');
		}
		if(evt.dataset.know === 'knw-2') {
			event.preventDefault();	

			decisions[1].classList.remove('hidden');
			xClose[1].classList.add('xcloseTop');
		}
		if(evt.dataset.know === 'knw-3') {
			event.preventDefault();	

			decisions[2].classList.remove('hidden');
			circleHidden[1].classList.add('hidden');
			xClose[2].classList.add('xcloseTop');
		}
		if(evt.dataset.know === 'knw-4') {
			event.preventDefault();	

			decisions[3].classList.remove('hidden');
			circleHidden[2].classList.add('hidden');
			xClose[3].classList.add('xcloseTop');
		}

	});

	//Круг с лого сервисов
	//var circleHidden = document.querySelectorAll('.circle');

	//Кнопка подробнее
	// serv-1
	var btnMoreOne = document.querySelector('#serv-1-btn-more');
	// serv-2
	var btnMoreTwo =  document.querySelector('#serv-2-btn-more');
	// serv-3
	var btnMoreThree =  document.querySelector('#serv-3-btn-more');
	// serv-4
	var btnMoreFour =  document.querySelector('#serv-4-btn-more');
	//Анимация
	var addAnimation = document.querySelectorAll('.to-animate');


	btnMoreOne.addEventListener('click', function(e) {
		e.preventDefault();
		circleHidden[0].classList.add('hidden');
		addAnimation[0].classList.remove('hidden');
		addAnimation[0].classList.add('serv-1-anim-block');

		xClose[0].classList.add('xclose');

		xClose[0].addEventListener('click', function() {
			circleHidden[0].classList.remove('hidden');
			addAnimation[0].classList.remove('serv-1-anim-block');
			xClose[0].classList.remove('xclose');
			xClose[0].classList.remove('xcloseTop');
			addAnimation[0].classList.add('hidden');
			decisions[0].classList.add('hidden');
		}, true);
	}, true);

	btnMoreTwo.addEventListener('click', function(e) {
		e.preventDefault();
	
		addAnimation[1].classList.add('serv-2-anim-block');

		xClose[1].classList.add('xclose');

		xClose[1].addEventListener('click', function() {
			addAnimation[1].classList.remove('serv-2-anim-block');
			xClose[1].classList.remove('xclose');
			decisions[1].classList.add('hidden');
			xClose[1].classList.remove('xcloseTop');
		}, true);
	}, true);
	
	btnMoreThree.addEventListener('click', function(e) {
		e.preventDefault();
		circleHidden[1].classList.add('hidden');
	
		addAnimation[2].classList.add('serv-3-anim-block');

		xClose[2].classList.add('xclose');

		xClose[2].addEventListener('click', function() {
			circleHidden[1].classList.remove('hidden');
			addAnimation[2].classList.remove('serv-3-anim-block');
			xClose[2].classList.remove('xclose');
			xClose[2].classList.remove('xcloseTop');
			decisions[2].classList.add('hidden');
		}, true);
	}, true);

	btnMoreFour.addEventListener('click', function(e) {
		e.preventDefault();
		circleHidden[2].classList.add('hidden');
		addAnimation[3].classList.add('serv-4-anim-block');

		xClose[3].classList.add('xclose');

		xClose[3].addEventListener('click', function() {
			circleHidden[2].classList.remove('hidden');
			addAnimation[3].classList.remove('serv-4-anim-block');
			xClose[3].classList.remove('xclose');
			decisions[3].classList.add('hidden');
		}, true);
	}, true);
	/*Know decision button*/

	for(var m = 0; m < 4; m++) {
		var newNode = decisions[m].cloneNode(true);
		newNode.classList.remove('hidden');
		slide[m].appendChild(newNode);
	}

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

	jQuery(document).ready(function(){
		$(".mask").inputmask('+7 (999) 999 99 99');
		$("#form-send").submit(function(e) {
			var url = 'sendmail.php';
			$.ajax({
				type: "POST",
				url: url,
				data: $(this).serialize(), 
				success: function(data) {
					if(data == 1){
						alert('Введите капчу!');
						return false;
					} else {
						alert('Ваше сообщение успешно отправлено. В ближайшее время мы свяжемся с Вами');
						grecaptcha.reset();
										//$('.remove_form *').hide();
										//$('.remove_form').prepend(data);										
					}
				}
			});
			e.preventDefault(); 
		});	
	});
})();