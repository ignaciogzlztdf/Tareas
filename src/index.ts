import "./styles.css";

// Ejercicio: Cálculo de descuento

let precioInicialProducto: number = 450.5;
let diezPorCiento: number = 0.1;

let descuento: number = precioInicialProducto * diezPorCiento;
let precioFinalProducto: number = precioInicialProducto - descuento;

console.log("El precio final del producto es:"precioFinalProducto);
