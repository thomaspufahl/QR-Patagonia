// Variables que toman del DOM las secciones a utilizar
// La variable contenedorQR seleciona donde se va a dibujar el QR
const contenedorQR = document.getElementById("contenedorQR");
// La variable formularioQR selecciona el formulario del cual se van a recoger los datos para almacenar en el QR
const formularioQR = document.getElementById("formularioQR");

// La variable QR inicializa el uso de la libreria "qrcode.js"
// El primer parametro de QRCode es la seccion donde se va a dibujar el QR
// El segundo parametro refiere al formato del QR
const QR = new QRCode(contenedorQR, {
	width: 144,
	height: 144,
	correctLevel: QRCode.CorrectLevel.L
});

// Se toma la variable formularioQR y se le asigna una propiedad(funcion).
//La funcion asignada usa dos parametros, el primero espera un Evento(submit) para ejecutar un procedimiento(param2).

// Este procedimiento hace que al momento del Evento "submit", generado por el boton "generarQR"(en doc html),
//crea variables con los valores suministrados en el formulario, que a su vez, y a partir de estos,
//se crea la variable 'qrValue'.

// En la variable 'qrValue' se concatenan los datos de las variables de formulario y organiza estos datos
//junto a otros valores de tipo string para el correcto funcionamiento dentro del sistema del control de accesos.

// Este procedimiento tambien se encarga del dibujo QR. Para ello, es tomada la variable QR y se le asigna una propiedad(funcion).
//La funcion asignada es la encargada de realizar el dibujo QR, y toma como parametro el dato que se quiere almacenar en el QR.

// Por ultimo, se crea la variable de 'personaDelQR',
//esta es una concatenacion de los datos: nombre y apellido, del formulario. Va a ser utilizada para modificar el valor de un span. 
//El span pasara de un texto vacio a mostrar el nombre de la persona encima del codigo qr.
formularioQR.addEventListener("submit", (e) => {
	e.preventDefault();
	//variables de formulario
	const dni = document.querySelector('#dni').value;
	const apellido = document.querySelector('#apellido').value;
	const nombre = document.querySelector('#nombre').value;
	const nac = document.querySelector('#nac').value;
	//variable de formato
	const qrValue = '00000000000@' + apellido + '@' + nombre + '@N@' + dni + '@N@' + nac + '@00-00-0000';
	//dibuja qr
	QR.makeCode(qrValue);
	//variable nombre de la persona del qr
	const personaDelQR = nombre + ' ' + apellido;
	//modifica span
	document.getElementById('personaDelQR').innerHTML = personaDelQR;
});

