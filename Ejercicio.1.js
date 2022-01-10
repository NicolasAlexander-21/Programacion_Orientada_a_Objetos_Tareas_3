/* 1. Programa una función que cuente el número de caracteres de una cadena de
        texto, pe miFunción ("Hola Mundo") devolvera 10 */
function contarcaracteres(cadena = "") {
  if (!cadena) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
  }
}
// contarcaracteres();
// contarcaracteres("Hola Mundo");
