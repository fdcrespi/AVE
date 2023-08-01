"use strict";

// Crear un array de numeros para obtener distinta informacion de los mismos
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Crear una funcion que reciba un array de numeros y devuelva la cantidad de numeros del mismo
function cantidadNumeros(array) {
  return array.length;
}

// Crear una funcion que reciba un array de numeros y devuelva el porcentaje de pares e impares que posee
function cantidadParesImpares(array) {
  let contadorPares = 0;
  let contadorImpares = 0;
  for (let i = 0; i < array.length; i++) {
    let numero = array[i];
    if (numero % 2 === 0) {
      contadorPares++;
    } else {
      contadorImpares++;
    }
  }
  let porcentajePares = contadorPares * 100 / array.length;
  let porcentajeImpares = contadorImpares * 100 / array.length;
  return `El porcentaje de numeros pares es ${porcentajePares} y el porcentaje de numeros impares es ${porcentajeImpares}`;
}

// Crear una funcion que reciba un array de numeros y devuelva el porcentajes de numeros mayores a otro pasado por parametro
function cantidadMayoresA(array, numero) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    let numeroArray = array[i];
    if (numeroArray > numero) {
      contador++;
    }
  }
  let porcentaje = contador * 100 / array.length;
  return `El porcentaje de numeros mayores a ${numero} es ${porcentaje}`;
}

// Crear una funcion que reciba un array de numeros y devuelva el menor valor y el mayor
function menorMayor(array) {
  let menor = array[0];
  let mayor = array[0];
  for (let i = 0; i < array.length; i++) {
    let numero = array[i];
    if (numero < menor) {
      menor = numero;
    }
    if (numero > mayor) {
      mayor = numero;
    }
  }
  return `El menor es ${menor} y el mayor es ${mayor}`;
}

// Crear una funcion que recibe un array de numeros y el porcentaje del numero minimo en base al mayor y el porcentaje del promedio de todos los numeros
function porcentajeNumeroMinimo(array) {
  let mayor = array[0];
  let menor = array[0];
  for (let i = 0; i < array.length; i++) {
    let numero = array[i];
    if (numero > mayor) {
      mayor = numero;
    }
    if (numero < menor) {
      menor = numero;
    }
  }
  let porcentaje = menor * mayor / array.length;
  let promedio = 0;
  for (let i = 0; i < array.length; i++) {
    let numero = array[i];
    promedio += numero;
  }
  promedio = promedio / array.length;
  return `El porcentaje del numero minimo en base al mayor es ${porcentaje} y el porcentaje del promedio de todos los numeros es ${promedio}`;
}