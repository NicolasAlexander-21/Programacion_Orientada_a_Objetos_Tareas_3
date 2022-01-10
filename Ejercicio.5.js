/* 5. Programa una funcióon que invierta las palabras de una cadena de texto, pe. miFunción ("Hola Mundo") devolverá "odnuM aloH" */
      const invertirCadena = (cadena="") =>
        (!cadena)
          ?console.warn("No ingresaste una cadena de texto")
          :console.info(cadena.split("").reverse().join(""));
      
      // invertirCadena();
      // invertirCadena("Hola Mundo");
      // invertirCadena("JavaScript es un lenguaje de programación increible");
      // invertirCadena("Aqui tenemos que generar un lorem ipsum")