const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numeros = ages.filter((par) => {
    return par % 2 == 0;
})

console.log(numeros);