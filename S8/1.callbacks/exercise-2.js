const userAnwsers = [];

function confirmExample(descripcion){
    return confirm(descripcion);
}

function promptExample(descripcion){
    return prompt(descripcion);
}

function father(descripcion, callback){
    const resultado = callback(descripcion);
    userAnwsers.push(resultado);
}

father("Este es el texto del confirm", confirmExample);
father("Este es el promp", promptExample);

console.log(userAnwsers);