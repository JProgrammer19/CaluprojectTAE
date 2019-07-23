// (function(){
//     // all your code here
//     var foo = function() {};
//     window.onload = foo;
//     // ...
// })();
/*
Title: Programa calculadora TAE
Autor: Josué Fernandez-Caballero Zamora
Version: 1.0.0
*/
function calculoTae(resto) {
  //Variables
   var capital = document.getElementById('capital').value;
   var interes = document.getElementById('interes').value;
   var tiempo  =  document.getElementById('tiempo').value;
   var interesImpuesto = document.getElementById('interesImpuesto').value;
   var resultado = document.getElementById('resultado');
   var subResult;
   var interesImpuesto;

      //Calculation TAE and definitions
      subResult = capital * interes * tiempo / 36500;
      interesImpuesto = interesImpuesto / 100;
      restoImpuesto = subResult * interesImpuesto;
      resto = subResult - restoImpuesto;
      neto = resto.toFixed(3);

      document.getElementById('resultadoTae').innerHTML = neto;
}
