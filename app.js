/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.*/
const esPar = (nro) => nro % 2 == 0 ? "el nro. " + nro + " es par." : "el nro. " + nro + " es impar." ;

console.log('Funcion esPar: ' + esPar(10));
console.log('Funcion esPar: ' + esPar(9));

/*2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.*/

function comparanro(numA, numB){
let result = numA - numB;
console.log("Resultado: " + result);
switch(true){
    case (result > 0):
        console.log("El nro. " + numA + " es mayor que " + numB);
        break;
    case (result < 0):
        console.log("El nro. " + numA + " es menor que " + numB);
        break;
    default:
        console.log("Los nros. " + numA + " y " + numB + " son iguales.");
}


}

comparanro(5,5);
comparanro(5,6);
comparanro(5,2);

/*3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.*/

function esmultiplodecinco(num)
{
    if (num%5==0){
        console.log("El nro. " + num + " es múltiplo de 5.");
        return
    }
    else{
        console.log("El nro. " + num + " no es múltiplo de 5.");
        return
    }
}

esmultiplodecinco(20);
esmultiplodecinco(19);

/*4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.*/

function imprimir(num){
    for (let cont = 0; cont <= num; cont++){
        console.log("Número: " + cont);
    }
}

imprimir(10);

/*5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.*/

function imprimepalabra(palabra, num){
    for (let i=0; i<num; i++){
        console.log("Imprimiendo palabra: " + palabra + " - " + (i + parseInt(1)) + "a. vez.");
    }
}

imprimepalabra("daniel",11);

/*6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.*/

function imprimirarray(array){

    for( let i = 0 ; i < array.length ; i++){
		console.log("Elemento " + i + ": " + array[i]);
	}

}

imprimirarray(["daniel", "jose", "manuel", "pedro"]);

/*7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".*/

function imprimirsincinco(array){

    for( let i = 0 ; i < array.length ; i++){
        if (i != 4){
		    console.log("Elemento:" + array[i] );
    }
	}
}

imprimirsincinco([1,2,3,4,5,6,7,8,9,10]);

/*8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.*/

function multiplicapor(array, num){
    let resultado=0
    for( let i = 0 ; i < array.length ; i++){
        resultado=num * array[i] ;
		console.log("Elemento " + array[i] + " multiplicado por " +  num + " = " + resultado);
	}

}

multiplicapor([2,3,2,4,1,5], 3);