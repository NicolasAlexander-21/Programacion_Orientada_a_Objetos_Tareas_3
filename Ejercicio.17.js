/* 17. Programa una función que dada una fecha válida determine cuantos años han pasado hasta e día de hoy, pe. miFunción(new Date(2000,5,26)) devolverá 21 años (en 2020) */
const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");

  if (!(fecha instanceof Date))
    return console.error("El valor que ingresaste no es una fecha válida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMs = 1000 * 60 * 60 * 24 * 365;
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};

// calcularAnios();
// calcularAnios({});
// calcularAnios(false);
// calcularAnios(new Date());
// calcularAnios(new Date(2000,5,26));
// calcularAnios(new Date(1884,5,26));
// calcularAnios(new Date(2084,5,26));
