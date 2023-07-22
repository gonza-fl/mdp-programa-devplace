/**
 * * Vamos a programar un sistema llamado Patovica
 *
 * - Necesitamos preguntarle al usuario su edad e identificar si es mayor de edad o no.
 *    - Si es mayor de edad, puede ingresar al boliche
 *    - Si no es mayor de edad, no puede ingresar
 *
 * - Si el usuario es mayor 21 años
 *    - Puede consumir bebidas alcoholicas.
 * - Si no es mayor de 21
 *    - No puede consumir bebidas alcoholicas
 *
 * * Analisis:
 *
 * ? Etradas:
 *    - edadUsuario
 *    - edadIngreso
 *    - edadAlcohol
 *    - resultado
 *
 * ? Resulucion:
 *  INICIO PROGRAMA "Patovica":
 *
 *    DECLARAR edadIngreso, edadAlcohol, edadUsuario COMO ENTERO
 *
 *    edadIngreso = 18
 *
 *    edadAlcohol = 21
 *
 *    edadUsuario = PEDIR('Ingrese su edad')
 *
 *    EVALUAR_ENTERO(edadUsuario) //! CLAVE PARA LA TAREA
 *
 *    SI edadUsuario ES MENOR edadIngreso ENTONCES:
 *
 *        MENSAJE('NO PUEDE INGRESAR')
 *
 *    SINO ENTONCES:
 *
 *        MENSAJE('PUEDE INGRESAR')
 *
 *        SI edadUsuario ES MENOR edadAlcohol ENTONCES:
 *
 *          MENSAJE('No puede comprar alcohol')
 *
 *        SINO ENTONCES:
 *
 *          MENSAJE('Puede consumir alcohol')
 *        FIN SI
 *
 *    FIN SI
 *
 *  FIN PROGRAMA "Patovica"
 *
 * ? Salida:
 *  - puede ingresar
 *  - no puede ingresar
 *  - puede comprar alcohol
 *  - no puede comprar alcohol
 *
 *
 */

function main() {
  const edadIngreso = 18,
    edadAlcohol = 21;

  let edadUsuario = prompt('Ingrese su edad');

  if (edadUsuario < edadIngreso) {
    alert('NO PUEDE INGRESAR');
  } else {
    alert('PUEDE INGRESAR');
    if (edadUsuario < edadAlcohol) {
      alert('No puede comprar alcohol');
    } else {
      alert('Puede consumir alcohol');
    }
  }
}

/**
 * TODO: Se debe verificar que el dato ingresado sea un Numero valido
 */
