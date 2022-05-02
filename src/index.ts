import "./styles.css";

// Ejercicio: Cálculo de descuento
console.log("Ejercicio: Cálculo de descuento");

let precioInicialProducto: number = 450.5;
let diezPorCiento: number = 0.1;

let descuento: number = precioInicialProducto * diezPorCiento;
let precioFinalProducto: number = precioInicialProducto - descuento;

console.log("El precio final del producto es: " + precioFinalProducto + ".");

// Problema: Autos de carrera
console.log(" ");
console.log("Ejercicio: Autos de carrera");

// Realizado de manera secuencial:
let vuelta1: number | null = Number(
  prompt("Tiempo de la primer vuelta (en minutos)", "Por ejemplo: 7.25")
);
let vuelta2: number | null = Number(
  prompt("Tiempo de la segunda vuelta (en minutos)", "Por ejemplo: 7.25")
);
let vuelta3: number | null = Number(
  prompt("Tiempo de la tercer vuelta (en minutos)", "Por ejemplo: 7.25")
);
let vuelta4: number | null = Number(
  prompt("Tiempo de la cuarta vuelta (en minutos)", "Por ejemplo: 7.25")
);

let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let promedioVueltas: number = tiempoTotal / 4;

console.log("El tiempo total fue: " + tiempoTotal, "minutos.");
console.log("El promedio entre vueltas fue: " + promedioVueltas, "minutos.");

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
    "Su compra recibió un descuento del 10 por ciento por haber superado la suma de $1000, ahora el monto a pagar es de: $" +
      precioConDescuento +
      "."
  );
} else {
  console.log("El precio de la compra es de: $" + gastoDelCliente + ".");
}

// Ejercicio: Validar Altura
console.log(" ");
console.log("Ejercicio: Validar Altura");

const alturaPermitida: number = 1.3;
// La altura de la persona la agregaría un guardia o un sensor para que no se pueda engañar al sistema.
let alturaPersona: number | null = Number(
  prompt("Ingrese altura en metros de la persona.", "Por ejemplo: 1.70")
);

// Lo que salga en la consola se le puede mostrar por una pequeña pantalla a la persona.
if (alturaPersona >= alturaPermitida) {
  console.log("Adelante, disfrute del recorrido.");
} else {
  console.log(
    "No tiene la altura necesaria para subirse a la montaña rusa. Por su seguridad le pedimos que se retire."
  );
}

// Ejercicio: Eureka
console.log(" ");
console.log("Ejercicio: Eureka");

// Preguntar por el grupo
const clave: string = "eureka";
let contador1: number = 0;

while (contador1 < 3) {
  let claveIngresada: string | null = prompt("Ingrese la clave");
  if (claveIngresada === clave) {
    contador1 = 3;
    console.log(
      "El usuario salió del programa porque ingresó la clave correcta"
    );
  } else {
    contador1 = contador1 + 1;
    if (contador1 < 3) {
      alert("Clave incorrecta, intente nuevamente.");
    }
  }
}
if (claveIngresada !== clave) {
  alert("Se han agotado todas las oportunidades.");
  console.log(
    "El usuario ingresó una clave incorrecta tres veces seguidas y ya no tiene permitido intentar nuevamente."
  );
}

// Ejercicio: Tablas de multiplicación
console.log(" ");
console.log("Ejercicio: Tablas de multiplicación");
