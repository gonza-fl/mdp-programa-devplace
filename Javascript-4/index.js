const listaUsuarios = [];

const btnNuevoUser = document.getElementById('btnNuevoUsuario');
const btnverListaUsuarios = document.getElementById('btnVerListaUsuarios');
btnNuevoUser.onclick = crearUsuario;

function crearUsuario() {
  const nombreUsuario = prompt('Ingrese su nombre de usuario');
  const claveUsuario = prompt('Ingrese su contraseña');
  listaUsuarios.push({
    nombreUsuario,
    claveUsuario,
  });
  mostrarListaUsuarios();
}

function mostrarListaUsuarios() {
  const ulUsuarios = document.getElementById('ulUsuarios');
  ulUsuarios.innerHTML = '';
  listaUsuarios.forEach(function (usuario, i) {
    const liUsuario = document.createElement('li');
    const spanNU = document.createElement('span');
    const spanCU = document.createElement('span');
    const btnEliminar = document.createElement('button');
    btnEliminar.onclick = function () {
      borrarUsuario(i);
    };
    btnEliminar.innerText = 'X';
    btnEliminar.classList = 'btn btn-danger';
    spanNU.innerHTML = `Nombre Usuario: ${usuario.nombreUsuario}`;
    spanCU.innerHTML = `Clave Usuario: ${usuario.claveUsuario}`;
    liUsuario.classList = 'list-group-item d-flex justify-content-around';
    liUsuario.appendChild(spanNU);
    liUsuario.appendChild(spanCU);
    liUsuario.appendChild(btnEliminar);
    ulUsuarios.appendChild(liUsuario);
  });
}

function borrarUsuario(idx) {
  listaUsuarios.splice(idx, 1);
  mostrarListaUsuarios();
}
