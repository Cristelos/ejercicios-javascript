function swap(array, indice1, indice2){
    const intercambio = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = intercambio;
    return array;
}

const arrayEjemplo = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

console.log(swap(arrayEjemplo, 0,2));