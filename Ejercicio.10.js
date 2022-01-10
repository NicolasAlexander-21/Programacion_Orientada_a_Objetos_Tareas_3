/* 10. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igualen un sentido que en otro), pe.miFunción(2002) devolverá true */
const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado, NO es un número`);

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return numero == alReves
    ? console.info(
        `Sí es capícua, Número original ${numero}, Número al revés ${alReves}`
      )
    : console.info(
        `No es capícua, Número original ${numero}, Número al revés ${alReves}`
      );
};

// capicua();
// capicua("19");
// capicua({})
// capicua(2000);
// capicua(2002);
// capicua(18.99);
// capicua(212.212);
