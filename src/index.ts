import "./styles.css";

// Ejercicio: Cálculo de descuento

/* Consigna
Implemente un algoritmo que calcule y muestre 
por pantalla el precio final de un producto 
después de aplicarle un descuento
El precio inicial del producto es $450,50
El descuento a aplicar es del 10%. Recuerde que 
puede obtener el 10% de un valor multiplicado por 0,1
El precio y el descuento deben ser guardados en 
variables (no ingresados por teclado)
*/
let precioInicialProducto: number = 450.5;
let diezPorCiento: number = 0.1;

let descuento: number = precioInicialProducto * diezPorCiento;
let precioFinalProducto: number = precioInicialProducto - descuento;

console.log("El precio final del producto es:"precioFinalProducto);

// Problema: Autos de carrera

/* Consigna
En una prueba, un piloto tiene que completar 4 
vueltas
Se necesita un programa que permita ingresar 
por teclado el tiempo de cada vuelta
El programa debe retornar el tiempo total y el 
promedio de vuelta
*/


// Ejercicio: Aplicar descuento

/* Consignas
Desarrolle un algoritmo que diga el precio de 
una compra 
La compra se compone del precio del producto 
y la cantidad
Si el cliente gasta más de $1000 debemos 
aplicarle un descuento del 10%
*/

/* No estoy seguro si en esta tarea
yo le puedo dar el valor que yo quiera
 al producto y a la cantidad
*/
let precioProducto: number = 200;
let cantidadProducto: number = 10;
let descuento10PorCiento: number = 0.1;

let gastoDelCliente: number = precioProducto * cantidadProducto;
let diezPorCientoDelGasto: number = gastoDelCliente * descuento10PorCiento;
let precioConDescuento: number = gastoDelCliente - diezPorCientoDelGasto;

if(gastoDelCliente > 1000){
  console.log("Su compra recibió un descuento del 10 por ciento por haber superado la suma de $1000, ahora el precio a pagar es de:",precioConDescuento)
} else{
    console.log("El precio de la compra es de:",gastoDelCliente)
}
