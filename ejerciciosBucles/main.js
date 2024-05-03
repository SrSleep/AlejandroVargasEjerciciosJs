//Ejercicio 1
let numero = parseInt(prompt("Ingrese cualquier digito"))
let multiplo = 1
let resultado
do {
    resultado = numero * multiplo
    multiplo ++
    console.log(resultado);


}while(multiplo<=10)

//Ejercicio 2
let numeroArray =[]
let ingresoUsuario= parseInt(prompt("Ingrese un digito para ser acumulado o 0 para cancelar"))
while(ingresoUsuario != 0){
numeroArray.push(ingresoUsuario)
ingresoUsuario= parseInt(prompt("Ingrese un digito para ser acumulado o 0 para cancelar"))

}
console.log(numeroArray);

//Ejercicio 3
let adivinaza = 65
let contadorAdivinar = 1
let adivinador = parseInt(prompt("Ingrese el numero a adivinar entre 1-100"))
while (adivinaza != adivinador) {
    contadorAdivinar++
    if (adivinador > adivinaza) {
        console.log("No has acertador intenta con un numero menor");
        adivinador = parseInt(prompt("Ingrese el numero a adivinar entre 1-100"))
    } else if (adivinador < adivinaza) {
        console.log("No has acertador intenta con un numero mayor");
        adivinador = parseInt(prompt("Ingrese el numero a adivinar entre 1-100"))
    }
}
console.log("Felicitacion el numero a advinizar era " + adivinaza +", Te costo "+contadorAdivinar+ " intentos");

//Ejercicio 4
let numeroPrimo = parseInt(prompt("Ingrese su numero"))
let contadorDivisible = 0
let divisor = 1
let mitadNumero = numeroPrimo / 2


for (let i = 1; i <= mitadNumero; i++) {
    if (numeroPrimo % i == 0) {
        contadorDivisible++
        console.log(contadorDivisible);
    }
}
if(contadorDivisible==1){
    console.log( numeroPrimo+" es numero primo");
}else{
    console.log( numeroPrimo+" no es numero primo");
}

//Ejercicio 5

let numeroDivisores = parseInt(prompt("Ingrese su numero"))

for (i = 1; i <= numeroDivisores; i++) {

    if (numeroDivisores % i == 0) {
        console.log("Este es un numero divisor " + i + " de " + numeroDivisores);
    }
}

//Ejercicio 6

let arrayDe10 = ["España", "Portugal", "Japon", "Colombia", "Francia", "Italia", "Alemania", "Serbia", "Rusia", "Australia"]

for (i = 0; i <= 9; i++) {
    console.log(arrayde10[i]);
}

//Ejercicio 7
let arrayDe10Numeros =[1,2,3,4,5,6,7,8,9,10]

for (i = 0; i < arrayDe10Numeros.length; i++) {
    console.log(arrayDe10Numeros[i]*2)
}

//Ejercicio 8
let arrayDeObjetosFamiliar = [
    { nombre: "Alejandro", edad: 29, color: "Azul", nacimiento: "Diciembre" },
    { nombre: "Ada", edad: 47, color: "Cafe", nacimiento: "Agosto" },
    { nombre: "Natalia", edad: 27, color: "Rosa", nacimiento: "Mayo" },
    { nombre: "Alicia", edad: 70, color: "Verde", nacimiento: "Abril" },
    { nombre: "Wilmer", edad: 42, color: "Rojo", nacimiento: "Enero" }
]
let familiar

for (i = 0; i < arrayDeObjetosFamiliar.length; i++) {
    familiar =arrayDeObjetosFamiliar[i]
    console.log("¡Hola! Soy "+familiar.nombre+" Tengo "+familiar.edad+"  mi color favorito es el " +familiar.color+ " y nací en el mes de "+ familiar.nacimiento)
}

//Ejercicio 9
let arrayParImpar = []
for (i = 0; i < 10; i++) {
    arrayParImpar.push( parseInt(Math.random() * 10))
}
for (i = 0; i < 10; i++) {
    if(arrayParImpar[i]%2==0){
        console.log(arrayParImpar[i]+" es un numero par");
    }else{
        console.log(arrayParImpar[i]+" es un numero impar");
    }
}

//Ejercicio 10
let numeroParImpar = parseInt(prompt("Ingrese su numero o 0 para cancelar el ingreso"))
let sumaPar = 0
let sumaImpar = 0
while (numeroParImpar != 0) {
    if (numeroParImpar % 2 == 0) {
        sumaPar += numeroParImpar
        numeroParImpar = parseInt(prompt("Ingrese su numero o 0 para cancelar el ingreso"))
    } else {
        sumaImpar += numeroParImpar
        numeroParImpar = parseInt(prompt("Ingrese su numero o 0 para cancelar el ingreso"))
    }
}
console.log("Suma de numeros impar da " +sumaPar);
console.log("Suma de numeros par da " +sumaImpar);

//Ejercicio 11
let arrayNumeroMayor = []
let mayorNumero = 0
for (i = 0; i < 10; i++) {
    arrayNumeroMayor.push(parseInt(Math.random() * 100))
}
for (i = 0; i < 10; i++) {
    if (mayorNumero < arrayNumeroMayor[i]){
        mayorNumero = arrayNumeroMayor[i]
     } 
}
console.log("El numero mas grande es "+mayorNumero);

//Ejercicio 12
let arrayNumeroMenor =[]
let menorNumero = 999
for (i = 0; i < 10; i++) {
    arrayNumeroMenor.push(parseInt(Math.random() * 100))
}

for (i = 0; i < 10; i++) {
    if (menorNumero > arrayNumeroMenor[i]) {
        menorNumero = arrayNumeroMenor[i]
    }
}

console.log("El numero mas pequeño es "+menorNumero);

//Ejercicio 13
let nombre1 = prompt("Ingrese su nombre jugador 1")
let nombre2 = prompt("Ingrese su nombre jugador 2")

let jugador1
let jugador2

do {
    jugador1 = prompt(" Jugador "+nombre1+" Ingrese piedra papel o tijera").toLowerCase()
    jugador2 = prompt(" Jugador "+nombre2+" Ingrese piedra papel o tijera").toLowerCase()
} while (jugador1 == jugador2)
if ((jugador1 === "piedra" && jugador2 == "tijeras") ||
    (jugador1 === "papel" && jugador2 == "piedra") ||
    (jugador1 === "tijeras" && jugador2 == "papel")) {
    console.log("Felicidades " + nombre1 + " has ganado")
}else{
    console.log("Felicidades " + nombre2 + " has ganado")
}

//Ejercicio 14

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

//Ejercicio 15

for (let i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
}

//Ejercicio 16

let arrayDesorden =[10,7,9,6,5,2,3,4,1,8]
let numeroCambio

for ( i = 0; i < arrayDesorden.length; i++){
    for ( j = 0; j < arrayDesorden.length-i-1; j++){
        console.log(arrayDesorden);
        if(arrayDesorden[j]>arrayDesorden[j+1]){
            numeroCambio =arrayDesorden[j];
            arrayDesorden[j] =arrayDesorden[j+1]
            arrayDesorden[j+1] = numeroCambio
            console.log(arrayDesorden.length-i-1);
            console.log(numeroCambio);
        }
    }
}