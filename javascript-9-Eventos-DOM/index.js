const listaUsuarios = [
  // {
  //   nombreUsuario: 'Adrian',
  //   claveUsuario: '123456',
  // },
  // {
  //   nombreUsuario: 'Joel',
  //   claveUsuario: '123456',
  // },
  // {
  //   nombreUsuario: 'Juli',
  //   claveUsuario: '123456',
  // },
  // {
  //   nombreUsuario: 'Dai',
  //   claveUsuario: '123456',
  // },
];

//capturar botón
// const btnNuevoUser = document.getElementById('btnNuevoUsuario');
//agregar funcion al evento onclick
// btnNuevoUser.onclick = crearUsuario;

const formUsuario = document.getElementById('formUsuario');

formUsuario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  crearUsuario();
  mostrarListaUsuarios();
  evento.stopPropagation();
});

//Pide datos al usuario y introduce un nuevo usuario (obj) a la lista de usuarios
//Al añadir el nuevo usuario se renderiza la lista de usuarios
function crearUsuario() {
  const userNameInput = document.getElementById('userNameId');
  const userPassInput = document.getElementById('userPassId');
  listaUsuarios.push({
    nombreUsuario: userNameInput.value,
    claveUsuario: userPassInput.value,
  });
}

// Recorre la lista de usuarios (array) y por cada elemento (obj usuario) crea un elemento con los estilos correspondientes
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
