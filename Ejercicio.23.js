/* 23. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFunción([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá {Pares: [2,4 6 8,0], Impares: [1, 3, 5, 7, 9]}. */
const separarParesImpares = (arr = undefined) => {
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
    Pares: arr.filter((num) => num % 2 === 0),
    Impares: arr.filter((num) => num % 2 === 1),
  });
};

// separarParesImpares();
// separarParesImpares("hola");
// separarParesImpares([]);
// separarParesImpares([2, 4, "j"]);
// separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
