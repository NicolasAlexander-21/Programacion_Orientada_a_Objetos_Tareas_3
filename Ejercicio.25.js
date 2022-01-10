/* 25. Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFunción(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true] */
const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo está vacío");

  if (arr.length === 1)
    return console.warn("El arreglo debe tener al menos 2 elementos");

  return console.info({
    original: arr,
    sinDuplicados: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  });
};

// quitarDuplicados();
// quitarDuplicados({});
// quitarDuplicados([]);
// quitarDuplicados([2]);
// quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
