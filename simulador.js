
/*Condicional, ciclos y funciones
*/
//variables---------------------------------//

console.log('Carrito de compras de la Joyeria');
let anilloOro = 1500;
let anilloDiamantes = 1600;
let anilloPlata = 2300;
let anilloRegalo = 0;

//interaccion con el usuario-----------------//

let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
alert("Hola " + nombre + " " + apellido);

// Carrito---------------------------------//

alert(" los productos son, anilloOro , anilloDiamantes , anilloPlata , anilloRegalo");
let carrito = prompt("ingresa el producto a comprar");

//Condicionales----------------------------------------------//

if (carrito == "anilloOro"){
    alert("tu anilloOro cuesta: $1500");
    
}if(carrito == "anilloDiamantes"){
    alert("tu anilloDiamantes cuesta: $1600");
    
}if (carrito == "anilloPlata"){
    alert("tu anilloPlata cuesta: $2300");
    
}if (carrito == "anilloRegalo"){
    alert("tu anilloRegalo es gratis");
    
}else{
    alert("GRACIAS");
}

//------------------siclo-----------------------------------//

alert("Formas de pago: ingrese 1 para efectivo, ingrese 2 para cuotas");

let pago = parseFloat(prompt("ingrese la 1 o 2"));
let precioAnillo =parseFloat (prompt(nombre + " ingrese el precio de su producto y sabra el precio en efectivo"));
let carritoEfectivo;
while (pago == 1){
    alert(nombre + " usted ingreso efectivo");
    carritoEfectivo = precioAnillo * 0.8;
    alert(nombre +" el precio en efectivo de tu producto es: " + carritoEfectivo);
    pago = prompt("ingrese 2 para salir");
    
}
//hacer bien la salida del while y pasar a las cuotas, con la calculadora.

//----------------------------------funcion-----------------------------//


if (pago == 2) {


function cuotas (valorAnillo, cantidadCuotas, division) {
    switch (division) {
        case "/":
            return valorAnillo / cantidadCuotas;
            break;
        default:
            return 0;
            break;
}
}

let valorAnillo = parseFloat(prompt(nombre + " ingrese el valor de su anillo"));
let cantidadCuotas = parseFloat(prompt(nombre + " ingrese la cantidad de cuotas que desea"));
let division = prompt(nombre + " ingrese / para realizar las cuotas");
let resultado = cuotas(valorAnillo, cantidadCuotas, division);
alert (nombre + " el valor de cuota de su anillo es: "+ resultado);





}