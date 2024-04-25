// Ejercicio 1
let numero1E1 = 16
let numero2E1 = 99

if (numero1E1 > numero2E1) {
    console.log("el primer numero es mayor que el segundo")
} else {
    console.log("el primer numero es menor que el segundo")
}

// Ejercicio 2
let numero1E2 = 25
let numero2E2 = 66

if (numero1E2 == numero2E2) {
    console.log("Los numeros son iguales")
} else {
    console.log("Los numeros son diferentes")
}

// Ejercicio 3
let numero1E3 = 16
let numero2E3 = 16

if (numero1E3 > numero2E3) {
    console.log("El numero " + numero1E3 + " mas grande que " + numero2E3)
} else if (numero1E3 < numero2E3) {
    console.log("El numero " + numero2E3 + " mas grande que " + numero1E3)
} else {
    console.log("Los numeros son iguales")
}

// Ejercicio 4
let numero1E4 = 10
let numero2E4 = 15
let numero3E4 = 100

if (numero1E4 <= numero2E4 && numero1E4 < numero3E4) {
    console.log("El numero " + numero1E4 + " mas pequeño")
} else if (numero2E4 <= numero1E4 && numero2E4 < numero3E4) {
    console.log("El numero " + numero2E4 + " mas pequeño")
} else {
    console.log("El numero " + numero3E4 + " mas pequeño")
}

// Ejercicio 5

let persona1 = {
    nombre: "Alejandro",
    edad: 28,
    altura: 177,
}
let persona2 = {
    nombre: "Viviana",
    edad: 23,
    altura: 188,
}
if (persona1.edad > persona2.edad) {
    console.log("La persona " + persona1.nombre + " es mayor que " + persona2.nombre)
} else if (persona1.edad < persona2.edad) {
    console.log("La persona " + persona2.nombre + " es mayor que " + persona1.nombre)
} else {
    console.log("La personas tiene la misma edad")
}

if (persona1.altura > persona2.altura) {
    console.log("La persona " + persona1.nombre + " es mas alta que " + persona2.nombre)
} else if (persona1.altura < persona2.altura) {
    console.log("La persona " + persona2.nombre + " es mas alta que " + persona1.nombre)
} else {
    console.log("La personas tiene la misma altura")
}

// Ejercicio 6

// let nombre = prompt("Ingrese su nombre")
// let edadE5 = parseInt(prompt("Ingrese su edad en digitos"))
// let altura = parseInt(prompt("Ingrese su altura en digitos"))
// let vision = parseInt(prompt("Ingrese su puntaje en la visionas"))

// if (edadE5 >= 18 && altura >= 150 && vision >= 8) {
//     console.log("Usted esta capacitado para conducir")
// } else {
//     console.log("No podemos dejarlo conducir por que no cumple los requisitos")
// }

// Ejercicio 7

// let nombreE7 = prompt("Ingrese su nombre").toLowerCase()
// let miNombre = "alejo"
// let pase = prompt("Ingrese su pase si es VIP o Normal").toLowerCase()
// let entrada = prompt("Tiene entradas del evento S, para si y N, para no").toLowerCase()
// let confirmar = false
// let compra = null
// let dinero = null
// if (nombreE7 == miNombre || pase == "vip") {
//     console.log("Bienvenido al club puedes pasar")
// } else if (entrada == "s") {
//     confirmar = confirm("¿Quieres usar tu entrada para ingresar?")

// }
// if (confirmar) {
//     console.log("Bienvenido al club puedes pasar")
// }else if(confirmar == false){
//     compra= confirm("¿Quieres comprar una entrada para ingresar?")
// }
// if(compra){
//     dinero= parseInt(prompt("Ingrese la cantidad de dinero disponible en digitos"))
// }
// if(dinero>1000){
//     console.log("Gracias por su compra Bienvenido al club puedes pasar")
// }else{
//     console.log("Fuera de aqui no admitimos pobres")
// }

// Ejercicio 8

// let numeroIncongito = 6
// let intento = 3
// let numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10"))


// if (numeroIngresado == numeroIncongito) {
//     console.log("Felicidades Adivinaste el numero")
// } else if (numeroIngresado > numeroIncongito) {
//     console.log("El numero ingresado es mayor")
//     numeroIngresado = parseInt(prompt("Intentalo otra vez te quedan 2 intentos"))
//     //primer intento si es mayor
//     if (numeroIngresado == numeroIncongito) {
//         console.log("Felicidades Adivinaste el numero")
//     } else if (numeroIngresado > numeroIncongito) {
//         console.log("El numero ingresado es mayor")
//         numeroIngresado = parseInt(prompt("Intentalo otra vez te queda 1 intento"))
//         if (numeroIngresado == numeroIncongito) {
//             console.log("Felicidades Adivinaste el numero")
//         } else {
//             console.log("Perdiste")
//         }
//     } else if (numeroIngresado < numeroIncongito) {
//         console.log("El numero ingresado es menor")
//         numeroIngresado = parseInt(prompt("Intentalo otra vez Intentalo otra vez te queda 1 intento"))
//         if (numeroIngresado == numeroIncongito) {
//             console.log("Felicidades Adivinaste el numero")
//         } else {
//             console.log("Perdiste")
//         }
//     }

// } else if (numeroIngresado < numeroIncongito) {
//     console.log("El numero ingresado es menor")
//     numeroIngresado = parseInt(prompt("Intentalo otra vez Intentalo otra vez te queda 2 intento"))
//     if (numeroIngresado == numeroIncongito) {
//         console.log("Felicidades Adivinaste el numero")
//     }  else if (numeroIngresado > numeroIncongito) {
//         console.log("El numero ingresado es mayor")
//         numeroIngresado = parseInt(prompt("Intentalo otra vez te queda 1 intento"))
//         if (numeroIngresado == numeroIncongito) {
//             console.log("Felicidades Adivinaste el numero")
//         } else {
//             console.log("Perdiste")
//         }
//     } else if (numeroIngresado < numeroIncongito) {
//         console.log("El numero ingresado es menor")
//         numeroIngresado = parseInt(prompt("Intentalo otra vez Intentalo otra vez te queda 1 intento"))
//         if (numeroIngresado == numeroIncongito) {
//             console.log("Felicidades Adivinaste el numero")
//         } else {
//             console.log("Perdiste")
//         }
//     }
// }

// Ejercicio 9

// let edadE9 = parseInt(prompt("Ingrese su edad en digitos"))

// if (edadE9 >= 0 && edadE9 <= 12) {
//     console.log("Usted es un infante")
// } else if (edadE9 >= 13 && edadE9 <= 18) {
//     console.log("Usted es un Adolescente")
// } else if (edadE9 >= 19 && edadE9 <= 45) {
//     console.log("Usted es un Mayor Joven")
// } else if (edadE9 >= 45 ) {
//     console.log("Usted es un Anciano")
//     if (edadE9 >= 100) {
//         confirm("Esta seguro que tiene "+edadE9+" años de edad?")
//     }
// }

// Ejercicio 10

// let jugador1 = prompt("Jugador 1 Escriba Piedra, Papel o Tijeras").toLowerCase()
// let jugador2 = prompt("Jugador 2 Escriba Piedra, Papel o Tijeras").toLowerCase()
// let validador1
// let validador2
// //validador
// if (jugador1 == "piedra" || jugador1 == "papel" || jugador1 == "tijeras") {
//     validador1 = true
// } else {
//     validador1 = false

// }
// if (jugador2 == "piedra" || jugador2 == "papel" || jugador2 == "tijeras") {
//     validador2 = true
// } else {
//     validador2 = false

// }
// if (validador1 == false || validador2 == false) {
//     console.log("Un jugador esta haciendo Trampa")
// } else if (jugador1 === jugador2) {
//     console.log("Los jugadores han empatado")
// } else if ((jugador1 === "piedra" && jugador2 == "tijeras") ||
//     (jugador1 === "papel" && jugador2 == "piedra") ||
//     (jugador1 === "tijeras" && jugador2 == "papel")) {
//     console.log("Felicidades jugador 1 has ganado")
// } else { 
//     console.log("Felicidades jugador 2 has ganado")
// }

// Ejercicio 11

// let color = prompt("Escriba un color").toLowerCase()
// switch (color) {
//     case "blanco":
//     case "negro":
//         console.log("Falta de color");
//         break
//     case "verde":
//         console.log("El color de la naturaleza");
//         break
//     case "azul":
//         console.log("El color del agua");
//         break
//     case "amarillo":
//         console.log("El color del sol");
//         break
//     case "rojo":
//         console.log("El color del fuego");
//         break
//     case "marron":
//         console.log("El color de la tierra");
//         break
//     default:
//         console.log("Excelente elección, no lo teníamos pensado");
// }

// Ejercicio 12
// let numb1 = parseInt(prompt("Ingrese un numero en digitos"))
// let numb2 = parseInt(prompt("Ingrese un numero en digitos"))
// let resultado
// let operacion = prompt("escriba una operacion que desee realizar: suma, resta, multiplicacion, division").toLowerCase()
// if ((operacion == "division") && ((numb1 == 0) || (numb1=0))) {
//     console.log("las divisiones no pueden ser por 0");
// } else {
//     switch (operacion) {
//         case "suma":
//             console.log(numb1 + numb2);
//             break
//         case "resta":
//             console.log(numb1 - numb2);
//             break
//         case "multiplicacion":
//             console.log(numb1 * numb2);
//             break
//         case "division":
//             console.log(numb1 / numb2);
//             break
//     }
// }