console.log('helloooo my friend');

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::: Interfaz ::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

var create = document.getElementById('create');
var eliminar = document.getElementById('delete');
var read = document.getElementById('read');
var upDate = document.getElementById('upDate');

var contCreate = document.getElementById('contCreate');
var contDelete = document.getElementById('contDelete');
var contRead = document.getElementById('contRead');
var contUpDate = document.getElementById('contUpDate');

var pacientes = document.getElementById('tablaPacientes');
var cuerpo = document.getElementById('cuerpo');
var bottonEnvier = document.getElementById('putForm-submit');
var bottonBorrar = document.getElementById('deleteForm-submit');
var bottonLeer = document.getElementById('getForm-submit');
var bottonUpDate = document.getElementById('postForm-submit');

create.onclick = function () {
    create.style.backgroundColor = "#fff";
    eliminar.style.backgroundColor = "rgba(216,216,216,0.4)";
    read.style.backgroundColor = "rgba(216,216,216,0.4)";
    upDate.style.backgroundColor = "rgba(216,216,216,0.4)";
    
    contCreate.style.display = "block";
    contDelete.style.display = "none";
    contRead.style.display = "none";
    contUpDate.style.display = "none";

    cuerpo.style.background = "#317dd4";
    cuerpo.style.transition = "background-color 1s ease-in-out";
    bottonEnvier.style.background = "#317dd4";
    bottonEnvier.style.transition = "background-color 1s ease-in-out";
    pacientes.innerHTML="";
}

upDate.onclick = function () {
    upDate.style.backgroundColor="#fff";
    eliminar.style.backgroundColor = "rgba(216,216,216,0.4)";
    create.style.backgroundColor = "rgba(216,216,216,0.4)";
    read.style.backgroundColor = "rgba(216,216,216,0.4)";

    contUpDate.style.display = "block";
    contCreate.style.display = "none";
    contDelete.style.display = "none";
    contRead.style.display = "none";    

    cuerpo.style.backgroundColor = "#984caf";
    cuerpo.style.transition = "background-color 1s ease-in-out";
    bottonUpDate.style.backgroundColor = "#984caf";
    bottonUpDate.style.transition = "background-color 1s ease-in-out";
    pacientes.innerHTML="";
}

eliminar.onclick = function () {
    eliminar.style.backgroundColor = "#fff";
    create.style.backgroundColor = "rgba(216,216,216,0.4)";
    read.style.backgroundColor = "rgba(216,216,216,0.4)";
    upDate.style.backgroundColor = "rgba(216,216,216,0.4)";
    
    contDelete.style.display = "block";
    contCreate.style.display = "none";
    contRead.style.display = "none";
    contUpDate.style.display = "none";

    cuerpo.style.backgroundColor = "#af4c4c";
    cuerpo.style.transition = "background-color 1s ease-in-out";
    bottonBorrar.style.backgroundColor = "#af4c4c";
    bottonBorrar.style.transition = "background-color 1s ease-in-out";
    pacientes.innerHTML="";
}

read.onclick = function () {
    read.style.backgroundColor = "#fff";
    eliminar.style.backgroundColor = "rgba(216,216,216,0.4)";
    create.style.backgroundColor = "rgba(216,216,216,0.4)";
    upDate.style.backgroundColor = "rgba(216,216,216,0.4)";
    
    contRead.style.display = "block";
    contDelete.style.display = "none";
    contCreate.style.display = "none";
    contUpDate.style.display = "none";

    cuerpo.style.backgroundColor = "#43a047";
    cuerpo.style.transition = "background-color 1s ease-in-out";
    bottonLeer.style.backgroundColor = "#43a047";
    bottonLeer.style.transition = "background-color 1s ease-in-out";
    pacientes.innerHTML="";
}

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::: Bases de Datos :::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

var formularioPut = document.getElementById('putForm');
var formularioDelete = document.getElementById('deleteForm');
var formularioGet = document.getElementById('getForm');
var formularioPost = document.getElementById('postForm');

formularioPut.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formularioPut);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/insertarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

formularioPost.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formularioPost);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/actualizarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

formularioDelete.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("le diste a eliminar");
    let datos = new FormData(formularioDelete);
    let idPaciente = datos.get('identificacion')
    //console.log(4===parseInt(idPaciente,10));

    let myHeaders = new Headers();

    const options = {
        method: 'DELETE',
        headers: myHeaders,
        body: new URLSearchParams({
            'numid': parseInt(idPaciente,10)
        }),
    }

    fetch('/basedatos/eliminarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

formularioGet.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("le diste a consultar");
    contRead.style.display = "none";

    let myHeaders = new Headers();

    const options = {
      method: 'GET',
      headers: myHeaders,
    }
  
    fetch('/basedatos/consultatotalpacientes', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        var codigoHTML=`
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Identificacion</th>
            </tr>`;
        for (let index = 0; index < data.length; index++) {
            codigoHTML += `
                <tr>
                    <td>${data[index].nombre}</td>
                    <td>${data[index].apellido}</td>
                    <td>${data[index].numid}</td>
                </tr>`;
        };
        codigoHTML += `</table>`;
        pacientes.innerHTML = codigoHTML;
      });
});
