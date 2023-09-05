alert("Bienvenido al restaurante. Esta es tu cuenta");
var num1 = parseInt(prompt("Costo de entrada"));
var num2 = parseInt(prompt("Ingresa osto del plato principal"));
var num3 = parseInt(prompt("Costo del postre"));
//Operaciones
var suma = num1 + num2 + num3;
var igv=(suma*0.18)+suma;
alert("Revise los resultados en la consola presionando F12");
//Mostrar resultado
console.log("El costo de la entrada es:"+num1);
console.log("El costo del segundo es:"+num2);
console.log("El costo del postre es:"+num3);
console.log("El costo total es:"+suma);
console.log("El costo total con IGV es:"+igv);