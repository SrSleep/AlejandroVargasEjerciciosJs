//"Ejercicio 1"
let miNombre = "Alejandro"

//"Ejercicio 2"
let miApellido = "Vargas"

//"Ejercicio 3"
let miEdad = 29

//"Ejercicio 4"
let miMascota = "Molly"

//"Ejercicio 5"
let edadMascota = 8

//"Ejercicio 6"
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

//"Ejercicio 7"
let nombreCompleto = miNombre + " " + miApellido

//"Ejercicio 8"
let textoPresentacion = miNombre + miApellido + miEdad + miMascota + edadMascota + nombreCompleto

//"Ejercicio 9"
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

// "Ejercicio 10"
miNombre = prompt("Ingrese su Nombre")
miApellido = prompt("Ingrese su Apellido")
miEdad = parseInt(prompt("Ingrese su edad en digitos"))
miMascota = prompt("Ingrese el Nombre de su mascota")
edadMascota = parseInt(prompt("Ingrese la edad de su mascota"))
nombreCompleto = miNombre + " " + miApellido
textoPresentacion = miNombre + miApellido + miEdad + miMascota + edadMascota + nombreCompleto
sumaEdades = miEdad + edadMascota
restaEdades = miEdad - edadMascota
productoEdades = miEdad * edadMascota
divisionEdades = miEdad / edadMascota

// "Ejercicio 11"
let alumno = {
    nombre: "Sebastian",
    edad: 20,
    curso: "Ingeniería Informática",
    promedio: 8.5,
    aprobado: "Si"
}
console.table(alumno)

// "Ejercicio 12"
let mascota = {
    nombre: "Molly",
    especie: "Perro",
    edad: 8,
    color: "Negro y Blanco",
    raza: "Criollo"
};

console.table(mascota);

// "Ejercicio 13"
let frutas = ["Manzana", "Banana", "Naranja", "Fresa", "Pera"];
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

// "Ejercicio 14"
let numeros = [25, 88, 69, 72, 100];
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

// "Ejercicio 15"
let familia = [
    { nombre: "Juan", edad: 35, relacion: "Padre" },
    { nombre: "María", edad: 32, relacion: "Madre" },
    { nombre: "Ana", edad: 10, relacion: "Hija" },
    { nombre: "Pedro", edad: 7, relacion: "Hijo" },
    { nombre: "Lucía", edad: 70, relacion: "Abuela" }
];
console.log(familia)
console.table(familia[0])
console.table(familia[1])
console.table(familia[2])
console.table(familia[3])
console.table(familia[4])
// "Ejercicio 16"
let textoAleatorio = frutas[1] + numeros[3] + familia[4].nombre

// // "Ejercicio 17"
let miEdadC = parseInt(prompt("Ingreso mi edad en digitos"))
let companeroEdad = parseInt(prompt("Ingrese edad de mi compañero en digitos"))
let edadesIguales = miEdadC == companeroEdad
let soyMayor = miEdadC > companeroEdad
let soyMenor = miEdadC < companeroEdad
console.log("Mi edad es igual a la de mi compañero: "+edadesIguales)
console.log("Mi edad es mayor a la de mi compañero: "+soyMayor)
console.log("Mi edad es menor a la de mi compañero: "+soyMenor)

// "Ejercicio 18"
let soyMayorDeEdad = miEdadC > 18
console.log("Soy mayor de edad  "+soyMayorDeEdad)

// "Ejercicio 19"
let edadPersona = parseInt(prompt("Ingrese su edad en digitos"))
let alturaPersona = parseInt(prompt("Ingrese su altura en digitos"))
let puedeSubir = (edadPersona>6)&&(alturaPersona>120)
console.log("Puede subir a la atracción  "+puedeSubir)

// "Ejercicio 20"
let tipoPase = prompt("Ingrese el tipo de pase (VIP, NORMAL o LIMITADO):");
let saldo = parseFloat(prompt("Ingrese el saldo disponible:"));
let puedePasar = (tipoPase === "VIP" || saldo > 1000);
console.log("La persona puede pasar ", puedePasar);