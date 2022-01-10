/* 6. Programe una función para contar el número de veces que se repite una palabra en un texto largo, pe.miFunción ("hola mundo adios mundo","mundo") devolverá 2 */
const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste el texto largo");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};
// textoEnCadena();
// textoEnCadena("","mundo");
// textoEnCadena("hola mundo adios mundo",""); /* ver desde 16:35*/
// textoEnCadena("hola mundo adios mundo","mundo");
