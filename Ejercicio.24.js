/* 24. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglo, el primero tendrá los números ordenados de forma ascendente y el segundo de forma descendente, pe. miFunción( 7, 5, 7, 8, 6), devolverá {asc: [5, 6, 7, 7, 8 ], desc: [ 8, 7, 7, 6, 5 ]} */
const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo está vacío");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un número`);
  }

  return console.info({
    arr,
    asc: arr.map((el) => el).sort(),
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

// ordenarArreglo();
// ordenarArreglo("Hola");
// ordenarArreglo([]);
// ordenarArreglo([3, {}]);
// ordenarArreglo([7, 5, 7, 8, 6]);
