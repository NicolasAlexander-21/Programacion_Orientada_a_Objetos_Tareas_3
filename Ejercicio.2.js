/* 2. Programa una funcion que te devuelva el texto recortado según el número de caracteres indicados,
        pe. miFunción("Hola Mundo",4) devolverá "Hola" */
const recortartexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(cadena.slice(0, longitud));

// recortartexto("Hola Mundo", 4);
// recortartexto();
// recortartexto("Hola Hola");
// recortartexto("", 5);
