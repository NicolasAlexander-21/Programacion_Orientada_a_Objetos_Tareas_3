/* 11. Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFunción(5) devolverá 120 */
const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, No es un número`);

  if (numero === 0) return console.error("El número no puede ser 0");

  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negtivo");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);
};

// factorial();
// factorial("5");
// factorial([1,2,3]);
// factorial(0);
// factorial(-5);
// factorial(5);
// factorial(8);
