const arrConteneder = [
  [1, 2, 3],
  ['hola', 'test', 'test2'],
  ['test3', 'test4', 'test5'],
  [null, true, false],
  [null, true, false],
];

for (let i = 0; i < arrConteneder.length; i++) {
  const arrInterno = arrConteneder[i];
  for (let j = 0; j < arrInterno.length; j++) {
    console.log(arrInterno[j]);
  }
}
