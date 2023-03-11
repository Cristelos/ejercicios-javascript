function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if(array[i]=== text){
            return i;
        }    
    }
    return -1;
}

function removeItem(array,text) {
    const indice = findArrayIndex(array,text);
    if(indice !== -1){
        array.splice(indice,1);
    }
    return array;
}

const arrayEjemplo = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(removeItem(arrayEjemplo, 'Mosquito'));
console.log(removeItem(arrayEjemplo,'Ajolote'));



