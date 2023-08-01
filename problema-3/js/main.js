/**
 * Comprueba si una contraseña cumple con los siguientes requisitos:
 * - Debe tener al menos 16 caracteres
 * - Debe tener letras minúsculas y mayúsculas
 * - No puede tener dos letras iguales consecutivas
 * - Debe tener al menos 4 numeros
 * - No puede tener 2 numeros iguales consecutivos
 * - Debe tener al menos 2 caracteres especiales pero ninguno puede repetirse y no pueden estar juntos
 * - No puede tener espacios en blanco
 * - No puede usarse el 0
 * @param {string} password - Contraseña a comprobar
 */

const password = document.getElementById('password');
const mensaje = document.getElementById('message');
password.addEventListener('input', checkPassword);

function checkPassword(e) {
  e.preventDefault();
  const password = e.target.value;
  
  if (password.length < 16) {
    mensaje.innerText = 'La contraseña debe tener al menos 16 caracteres';
    return;
  }

  if (!tieneMayusculasYMinusculas(password)) {
    mensaje.innerText = 'La contraseña debe tener letras minúsculas y mayúsculas';
    return;
  }

  if (tieneDosLetrasConsecutivasIguales(password)) {
    mensaje.innerText = 'La contraseña no puede tener dos letras iguales consecutivas';
    return;
  }

  if (!tieneCuatroNumeros(password)) {
    mensaje.innerText = 'La contraseña debe tener al menos 4 numeros';
    return;
  }

  if (tieneDosNumerosConsecutivosIguales(password)) {
    mensaje.innerText = 'La contraseña no puede tener dos numeros iguales consecutivos';
    return;
  }

  if (!tieneDosCaracteresEspeciales(password)) {
    mensaje.innerText = 'La contraseña debe tener al menos 2 caracteres especiales no consecutivos';
    return;
  }

  if (tieneEspaciosEnBlanco(password)) {
    mensaje.innerText = 'La contraseña no puede tener espacios en blanco';
    return
  }

  if (tieneCero(password)) {
    mensaje.innerText = 'La contraseña no puede usarse el 0';
    return;
  }

  mensaje.innerText = 'La contraseña es válida';

}

/**
* Funcion que comprueba si una cadena de texto tiene mayusculas y minusculas
* @param {string} password - Contraseña a comprobar
*/
function tieneMayusculasYMinusculas(password) {
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
function tieneDosLetrasConsecutivasIguales(password) {
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
function tieneCuatroNumeros(password) {
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
function tieneDosNumerosConsecutivosIguales(password) {
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
function tieneDosCaracteresEspeciales(password) {
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
function tieneEspaciosEnBlanco(password) {
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
function tieneCero(password) {
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char === '0') {
      return true;
    }
  }
  return false;
}