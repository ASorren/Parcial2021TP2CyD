/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo 
 * solo los numeros pares y solo numeros impares respectivamente
 */

    // modulo = resto, para par e impar hay que fijarse si sobra o no

const even = function(numbers){
    const even = numbers.filter( num => num % 2 == 0);
    return even;


}

const odd = function(numbers){
    const odd = numbers.filter( num => num % 2 != 0);
    return odd;
}

// TESTS (no modificar)
const arrEqual = (a1,a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4,2,6,1,0,2,5]),[4,2,6,0,2]));
console.log(arrEqual(odd([4,2,6,1,0,2,5]),[1,5]));
