/* 19. Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */
const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombre");

  if (typeof nombre !== "string")
    return console.error(
      `El valor "${nombre}" ingresado, NO es una cadena de texto`
    );

  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

  return expReg
    ? console.info(`"${nombre}", es un nombre válido`)
    : console.warn(`"${nombre}", NO un nombre válido`);
};

// validarNombre();
// validarNombre(3);
// validarNombre("Nicolás Alexander");
// validarNombre("Nicolás Alexander,21");
