import "./styles.css";

// Ejercicio: Cálculo de descuento
console.log(" ");
console.log("Ejercicio: Cálculo de descuento");
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

console.log("El precio final del producto es: " + precioFinalProducto);

// Problema: Autos de carrera
console.log(" ");
console.log("Ejercicio: Autos de carrera");
/* Consigna
En una prueba, un piloto tiene que completar
4 vueltas
Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
El programa debe retornar el tiempo total y el
promedio de vuelta
*/

// Realizado de manera secuencial:

let vuelta1: number | null = Number(prompt("Tiempo de la primer vuelta"));
let vuelta2: number | null = Number(prompt("Tiempo de la segunda vuelta"));
let vuelta3: number | null = Number(prompt("Tiempo de la tercer vuelta"));
let vuelta4: number | null = Number(prompt("Tiempo de la cuarta vuelta"));

let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let promedioVuelta: number = tiempoTotal / 4;

console.log("El tiempo total fue: " + tiempoTotal);
console.log("El promedio de vuelta fue: " + promedioVuelta);

// Realizado de manera no secuencial pero que me gustó:

/*
let contador: number = 0;
let totalTiempo: number = 0;

while (contador < 4) {
  contador = contador + 1
  let tiempoVueltas: number = Number(
    prompt("Ingrese tiempo de la vuelta " + contador)
    );
  totalTiempo = totalTiempo + tiempoVueltas;
}
let promedioVueltas: number = totalTiempo / 4;

console.log("El tiempo total fue: " + totalTiempo);
console.log("El promedio de vuelta fue: " + promedioVueltas);
*/

// Ejercicio: Aplicar descuento
console.log(" ");
console.log("Ejercicio: Aplicar descuento");
/* Consigna
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

if (gastoDelCliente > 1000) {
  console.log(
    "Su compra recibió un descuento del 10 por ciento por haber superado la suma de $1000, ahora el precio a pagar es de: " +
      precioConDescuento
  );
} else {
  console.log("El precio de la compra es de: " + gastoDelCliente);
}

// Ejercicio: Validar Altura
console.log(" ");
console.log("Ejercicio: Validar Altura");
/* Consigna
Desarrolle un algoritmo que, de acuerdo a 
la altura de una persona, decida si puede 
entrar a un juego en un parque de diversiones.
Para poder subirse a la montaña rusa la 
persona debe medir 1.30m o más.
*/

const alturaPermitida: number = 1.3;
// La altura de la persona la agregaría un guardia o un sensor para que no se pueda engañar al sistema.
let alturaPersona: number | null = Number(
  prompt(
    "Ingrese altura en metros de la persona (no especifique la unidad de medida).",
    "Por ejemplo: 1.70"
  )
);

// Lo que salga en la consola se le puede mostrar por una pequeña pantalla a la persona.
if (alturaPersona >= alturaPermitida) {
  console.log("Adelante, disfrute del recorrido.");
} else {
  console.log(
    "No tiene la altura necesaria para subirse a la montaña rusa. Por su seguridad le pedimos que se retire."
  );
}
