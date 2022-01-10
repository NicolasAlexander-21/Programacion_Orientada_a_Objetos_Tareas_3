/* 8. Programa una función que elimine cierto patrón de caracteres de un texto dado, pe miFunción ("xyz1,xyz2,xyz3,xyz4 y xyz5","xyz") devolverá "1,2,3,4 y 5" */
const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste un patrón de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));

// eliminarCaracteres();
// eliminarCaracteres("xyz1,xyz2,xyz3,xyz4 y xyz5");
// eliminarCaracteres("xyz1,xyz2,xyz3,xyz4 y xyz5","xyz");
// eliminarCaracteres("Aqui tenemos que generar un lorem ipsum ", "[a-z]");
