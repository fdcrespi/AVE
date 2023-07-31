"use strict";

/**
 * Funcion que obtiene el valor de los inputs y multiplica los valores sin usar el operador *
 *  */
document.getElementById("myForm").addEventListener("submit", multiplicar);

function multiplicar(e) {
    e.preventDefault();
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (num1 == "" || num2 == "") {
        alert("Por favor ingrese los valores");
        return;
    }
    let resultado = 0;
    for (let i = 0; i < num2; i++) {
        resultado += parseInt(num1);
    }
    document.getElementById("resultado").innerHTML = resultado;
}