/* 21. Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. miFunción([1, 4, 5]), devolverá[1,16,25]. */
const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo está vacío");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un número`);
  }

  const newArr = arr.map((el) => el * el);

  return console.info(
    `Arreglo ariginal: ${arr},\nArreglo elevado al cuadrado: ${newArr}`
  );
};

// devolverCuadrados();
// devolverCuadrados(true);
// devolverCuadrados({});
// devolverCuadrados([]);
// devolverCuadrados([1,"3",4,{}]);
// devolverCuadrados([1,4,{}]);
// devolverCuadrados([1,4,8]);
