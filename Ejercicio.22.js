/* 22. Programa una función que dado un array devuelva el número más alto y el más bajo de dicho array, pe. miFunción([1, 4, 5, 99, -60]) devolverá [99, -60]. */
const arrayMinMax = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo está vacío");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un número`);
  }

  return console.info(
    `Arreglo ariginal: ${arr}\nValor Mayor: ${Math.max(
      ...arr
    )}\nValor Menor: ${Math.min(...arr)}`
  );
};

// arrayMinMax();
// arrayMinMax(false);
// arrayMinMax([]);
// arrayMinMax([2, 3, true]);
// arrayMinMax([1, 4, 5, 99, -60]);
