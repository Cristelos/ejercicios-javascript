const numbersList = [];

function sum(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function father(a,b, callback){
    const result = callback(a,b);
    numbersList.push(result);
}

father(2,3,sum);
father(2,8,substract);

console.log(numbersList);