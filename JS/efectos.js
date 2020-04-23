$(document).ready(function () {
	//Efecto menu
	$('.menu a').each(function (index, elemento) {
		$(this).css({ 
			'top': '-200px' 
		});

		$(this).animate({ 
			top: '0' 
		}, 2000 + (index * 500));
	});
	//Efecto Header
	if($(window).width()>800){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});
		$('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		},1500);
	}
	//Efecto Scroll
	var acercaDe=$('#acercaDe').offset().top,
		Costos=$('#costos').offset().top,
		Galeria=$('#galeria').offset().top,
		Ubicacion=$('#ubicacion').offset().top;

	$('#btnAcercaDe').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:455
		},500);
	});

	$('#btnCostos').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:1270
		},500);
	});

	$('#btnGaleria').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 2700
		},500);
	});

	$('#btnUbicacion').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:3350
		},500);
	});

});