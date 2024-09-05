function multiplicarArray(numeros){
    let novoArray = [];
    for (let i=0; i< numeros.length; i++){
        let novoNum = numeros[i] * 3;
        novoArray.push(novoNum);
    }
    return novoArray
}

const resultado = multiplicarArray([1,2,3,4,5]);
console.log(resultado);