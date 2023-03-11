function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if(array[i]=== text){
            return i;
        }    
    }
    return -1;
}

const arrayEjemplo = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(findArrayIndex(arrayEjemplo, 'Caracol'));
console.log(findArrayIndex(arrayEjemplo, 'Ajolote'));
console.log(findArrayIndex(arrayEjemplo, 'Perro'));
console.log(findArrayIndex(arrayEjemplo, 'Salamandra'));
