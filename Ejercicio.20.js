/* 20. Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste un email");

  if (typeof email !== "string")
    return console.error(
      `El valor "${email}" ingresado, NO es una cadena de texto`
    );

  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  return expReg
    ? console.info(`"${email}", es un email válido`)
    : console.warn(`"${email}", NO es un email válido`);
};

// validarEmail();
// validarEmail(34);
// validarEmail("nloor,b@unemi");
// validarEmail("nloorb@unemi.edu.ec.edu");
