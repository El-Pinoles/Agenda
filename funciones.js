window.addEventListener('load', function (e) {
  cargarContactos();
  // verContactos();
});

function guardarContacto() {
	let getNom = document.querySelector('#nomA');
	let getNum = document.querySelector('#numA');
	let getCor = document.querySelector('#corA');

	arNom.push(getNom.value);
	arNum.push(getNum.value);
	arCor.push(getCor.value);

	localStorage.setItem('nomLS', arNom);
 	localStorage.setItem('numLS', arNum);
  	localStorage.setItem('corLS', arCor);

  	alert('Se guardo un nuevo contacto');

  	getNom.value = '';
    getNum.value = '';
    getCor.value = '';
}

function cargarContactos() {
  if (localStorage.length > 0) {
    arNom = localStorage.getItem('nomLS');
    arNum = localStorage.getItem('numLS');
    arCor = localStorage.getItem('corLS');

    arNom = arNom.split(',');
    arNum = arNum.split(',');
    arCor = arCor.split(',');
  } else {
    arNom = [];
    arNum = [];
    arCor = [];
  }
}

function verContactos() {
	for (i=0; i<arNom.length; i++){
		alert("Nombre: "+arNom[i]+"\nNumero: "+arNum[i]+"\nCorreo: "+arCor[i]);
	}
}

function buscarContacto() {
  let busqueda = prompt('cual es el nombre del contactos?');
  let indiceBusqueda = arNom.indexOf(busqueda);

  console.log(indiceBusqueda);
  if (indiceBusqueda >= 0) {
    alert(`
    Nombre: ${arNom[indiceBusqueda]}
    Numero: ${arNum[indiceBusqueda]}
    Correo: ${arCor[indiceBusqueda]}`);
  } else {
    alert('No se encontraron resultados');
  }
}

function editarContacto() {
  let busqueda = prompt('Nombre del contacto que deseas editar?');
  let indiceBusqueda = arNom.indexOf(busqueda);

  if (indiceBusqueda >= 0) {
    let nuevoNom = prompt('Nuevo nombre');
    let nuevoNum = prompt('Nuevo numero');
    let nuevoCor = prompt('Nuevo correo');

    arNom[indiceBusqueda] = nuevoNom;
    arNum[indiceBusqueda] = nuevoNum;
    arCor[indiceBusqueda] = nuevoCor;
    guardarContacto();
    // window.location.reload();
  } else {
    alert('No se encontraron resultados');
  }
}
