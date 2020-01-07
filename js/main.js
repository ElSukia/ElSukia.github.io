$(document).ready(function(){



	// Slider
	/*
		if(window.location.href.indexOf('index1') > -1 ){
	  
	  $('.galeria').bxSlider({

	    mode: 'fade',
	    captions: false,
	    slideWidth: 800,
	    responsive: false,
	    pager: true
	  });

	}
*/
	// Posts
	if(window.location.href.indexOf('index') > -1 ){
		var posts = [
			{
				title: 'Bienvenidos | Welcome',
				date: 'Publicado el dia ' + 24 + " de " + "noviembre" + " del " + 2019,
				content: '¡Hola! El diseño de este sitio web es temporal. Fue creado utilizando únicamente html,css y javascript. En el futuro espero implementar Mean Stack o incluso PHP para poder tener un backend decente y aportar más y mejores funcionalidades a la web. La idea es subir contenido interesante para mi y generado por mi :)'+
				' </br> </br> Hello! This website is for uploading interesting content. If you are an english native speaker'+
				' and planning to travel to Costa Rica, the section of "Travels" could have some important things for you.'+
				'</br> Also, i have some interesting things related with genetics of Costa Rican population.'+'<h3>If you want to see all the website in English press the USA flag in the left of the window</h3>' 
			}
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					
				</article>
			`;

			$("#posts").append(post);
		});
	}

		if(window.location.href.indexOf('home') > -1 ){
		var posts = [
			{
				title: 'Welcome',
				date: 'Date of publishing ' + " January "+6+ " 2020",
				content: ''+
				' </br> </br> Hello! This website is for uploading interesting content. If you are an english native speaker'+
				' and planning to travel to Costa Rica, the section of "Travels" could have some important things for you.'+
				'</br> Also, i have some interesting things related with genetics of Costa Rican population.' 
			}
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					
				</article>
			`;

			$("#posts").append(post);
		});
	}

/*
	// Selector de tema
	var theme = $("#theme");

	$("#to-usa").click(function(){
		theme.attr("href", "turisteando.html");
	});
	
	$("#to-cr").click(function(){
		theme.attr("href", "index1.html");
	});
	
	$("#to-blue").click(function(){
		theme.attr("href", "turisteando.html");
	});

	*/
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

	if(window.location.href.indexOf('about' ) > -1 ){
		$("#acordeon").accordion();
	}


	// Reloj
	if(window.location.href.indexOf('reloj' ) > -1 ){

		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
		
	
	}

	// Validación
	if(window.location.href.indexOf('contact' ) > -1 ){
	
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


