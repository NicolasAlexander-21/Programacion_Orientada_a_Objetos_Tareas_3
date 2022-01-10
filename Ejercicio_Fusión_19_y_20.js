/* Fusión 19 y 20 */
const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena)
    return console.warn("No ingresaste una cadena de texto a evaluar");

  if (typeof cadena !== "string")
    return console.error(
      `El valor "${cadena}" ingresado, NO es una cadena de texto`
    );

  if (patron === undefined)
    return console.warn("No ingresaste un patron a evaluar");

  if (!(patron instanceof RegExp))
    return console.error(
      `El valor "${patron}" ingresado, NO es una expresión regular`
    );

  let expReg = patron.test(cadena);

  return expReg
    ? console.info(`"${cadena}", cumple con el patrón ingresado`)
    : console.warn(`"${cadena}", NO cumple con el patrón ingresado`);
};

// validarPatron();
// validarPatron({});
// validarPatron("Hola Mundo");
// validarPatron("Hola Mundo","hola");
// validarPatron("Hola Mundo",[1,2,3]);
// validarPatron("Nicolás Alexander",/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
// validarPatron("Nicolás Alexander 19",/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
// validarPatron("nloor@unemi.edu.ec", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i"));
// validarPatron("nloor@unemi.edu.ec", new RegExp("[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})i"));
// validarPatron("nloor@une.mi.edu.ec", new RegExp("[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})i"));
