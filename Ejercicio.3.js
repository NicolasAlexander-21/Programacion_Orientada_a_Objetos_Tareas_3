/* 3. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
        pe miFunción("Hola que tal", " ") devolverá ["Hola", "que", "tal"]*/
const cadenaAArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : separador === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena.split(separador));

// cadenaAArreglo("Aqui tenemos que generar un lorem ipsum ", " ");
// cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
// cadenaAArreglo();
// cadenaAArreglo("Hola Mundo");
// cadenaAArreglo("", "-");
