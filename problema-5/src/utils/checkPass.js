/**
* Funcion que comprueba si una cadena de texto tiene mayusculas y minusculas
* @param {string} password - Contraseña a comprobar
*/
export function tieneMayusculasYMinusculas(password) {
  let tieneMayuscula = false;
  let tieneMinuscula = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= 'A' && char <= 'Z') {
      tieneMayuscula = true;
    }
    if (char >= 'a' && char <= 'z') {
      tieneMinuscula = true;
    }
    if (tieneMayuscula && tieneMinuscula) {
      break;
    }
  }

  return tieneMayuscula && tieneMinuscula;
}

/** 
 * Function que comprueba si una cadena de texto tiene dos letras consecutivas iguales
 * @param {string} password - Contraseña a comprobar
 */
export function tieneDosLetrasConsecutivasIguales(password) {
  for (let i = 0; i < password.length - 1; i++) {
    let char = password[i];
    let nextChar = password[i + 1];
    if (char === nextChar) {
      return true;
    }
  }
  return false;
}

/**
 * Function que comprueba si una cadena de texto tiene 4 numeros
 * @param {string} password - Contraseña
 */
export function tieneCuatroNumeros(password) {
  let contador = 0;
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= '0' && char <= '9') {
      contador++;
    }
    if (contador >= 4) {
      break;
    }
  }
  return contador >= 4;
}

/**
 * Function que comprueba si una cadena de texto tiene dos numeros iguales consecutivos
 * @param {string} password - Contraseña
 */
export function tieneDosNumerosConsecutivosIguales(password) {
  for (let i = 0; i < password.length - 1; i++) {
    let char = password[i];
    let nextChar = password[i + 1];
    if (char >= '0' && char <= '9' && char === nextChar) {
      return true;
    }
  }
  return false;
}

/**
 * Function que comprueba si una cadena de texto tiene al menos 2 caracteres especiales no consecutivos ni repetido
 * @param {string} password
 */
export function tieneDosCaracteresEspeciales(password) {
  let arrCharEspeciales = ['!', '@', '#', '$', '%', '&', '*', '-', '_', '+', '=', '?', '^'];
  let contador = 0;
  for (let i = 0; i < password.length - 1; i++) {
    let char = password[i];
    if (arrCharEspeciales.includes(char)) {
      contador++;
      if (arrCharEspeciales.includes(password[i + 1])) {
        return false;
      }
    }
    if (contador >= 2) {
      break;
    }
  }
  if (arrCharEspeciales.includes(password[password.length - 1])) {
    contador++;
  }
  return contador >= 2;
}

/**
 * Function que comprueba si una cadena de texto tiene espacios en blanco
 * @param {string} password
 */
export function tieneEspaciosEnBlanco(password) {
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char === ' ') {
      return true;
    }
  }
  return false;
}

/**
 * Funcion que comprueba si una cadena de texto tiene el 0
 * @param {string} password
 */
export function tieneCero(password) {
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char === '0') {
      return true;
    }
  }
  return false;
}
