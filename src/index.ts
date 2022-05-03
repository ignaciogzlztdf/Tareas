import "./styles.css";

// CLASE 3 - PROGRAMACIÓN - 25 Y 29 DE ABRIL | EJERCICIOS: PAR/IMPAR Y AUMENTO DE SUELDO

// Ejercicio: Par/Impar
/* Consigna
•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo */
let numeroIngresado: number | null = Number(
  prompt("Ingrese un número para determinar si es par o impar.")
);

if (numeroIngresado === 0) {
  alert("El número ingresado es 0.");
} else if (numeroIngresado % 2 === 0) {
  alert("El número ingresado es par.");
} else {
  alert("El número ingresado es impar.");
}

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

// Realizado de manera secuencial (También la hice de otra forma, pero no la dejo acá para no tener mucho más código)
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

let precioProducto: number | null = Number(
  prompt("Ingrese el precio del producto.", "Por ejemplo: 500.")
);
let cantidadProducto: number | null = Number(
  prompt("Ingrese la cantidad de producto.", "Por ejemplo: 3.")
);
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

// CLASE 4 - PROGRAMACIÓN - 29 DE ABRIL Y 02 DE MAYO | EJERCICIOS: EUREKA - TABLAS DE MULTIPLICACIÓN - SUMA ENTRE NÚMEROS - PAR/IMPAR
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
