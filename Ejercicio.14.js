/* 14. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFunción(0,"C") devolverá 32°F */
const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("No ingresaste grados a convertir");

  if (typeof grados !== "number")
    return console.error(`El valor "${grados}" ingresado, NO es un número`);

  if (unidad === undefined)
    return console.warn("No ingresaste el tipo de grados a convertir");

  if (typeof unidad !== "string")
    return console.error(
      `El valor "${unidad}" ingresado, NO es una cadena de texto`
    );

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de unidad no reconocido");

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  } else if (unidad === "F") {
    return console.info(
      `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
  } else {
    return console.error("El tipo de grados a convertir NO es válido");
  }
};
// convertirGrados();
// convertirGrados("2");
// convertirGrados(2);
// convertirGrados(2,true);
// convertirGrados(2,"Hola");
// convertirGrados(2,"E");
// convertirGrados(0,"C");
// convertirGrados(100,"C");
// convertirGrados(32,"F");
// convertirGrados(100,"F");
