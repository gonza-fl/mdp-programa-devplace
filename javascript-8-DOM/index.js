const parrafos = document.getElementsByTagName('p');

const butons = document.querySelectorAll('.btn');

butons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('btn-danger');
    btn.classList.toggle('btn-primary');
  });
});

// butons.addEventListener('click', () => {
//   butons.classList.remove('btn-primary');
//   butons.classList.add('btn-danger');
// });
