$(document).ready(function(){

	// Slider
	if(window.location.href.indexOf('index') || window.location.href.indexOf('https://elsukia.github.io/') > -1 ){
	  
	  $('.galeria').bxSlider({
	    mode: 'fade',
	    captions: false,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });

	}

	// Posts
	if(window.location.href.indexOf('index') || window.location.href.indexOf('https://elsukia.github.io/') > -1 ){
		var posts = [
			{
				title: 'Primer Post: Explicación',
				date: 'Publicado el dia ' + 24 + " de " + "noviembre" + " del " + 2019,
				content: '¡Hola! Este sitio web es temporal. Fue creado utilizando únicamente html,css y javascript. En el futuro espero implementar Mean Stack o incluso PHP para poder tener un backend decente y poder aportar más y mejores funcionalidades a la web. Por cierto, el botón de "leer más" que aparece debajo, es solo decorativo de momento.'
			},
			{
				title: 'Prueba de titulo 2',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Espacio para futuras publicaciones'
			},
			{
				title: 'x',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'x'
			},
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
			`;

			$("#posts").append(post);
		});
	}


	// Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});
	
	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});
	
	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	
	// Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	// Login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}


	// Acordeon

	if(window.location.href.indexOf('http://munozgamboa.com/' ) > -1 || window.location.href.indexOf('about' ) > -1 ){
		$("#acordeon").accordion();
	}


	// Reloj
	if(window.location.href.indexOf('http://munozgamboa.com/' ) > -1 || window.location.href.indexOf('reloj' ) > -1 ){

		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
		
	
	}

	// Validación
	if(window.location.href.indexOf('http://munozgamboa.com/' ) > -1 || window.location.href.indexOf('contact' ) > -1 ){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}



	

});
