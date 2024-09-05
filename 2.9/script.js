function somarArray(oArrayExemplo){
    let somaTotal = 0;
    for(i of oArrayExemplo){
        somaTotal += i;
    }
    return console.log(`Soma dos elementos do array: ${somaTotal}`);
}


const arrayExemplo = [5,10,15,20];
somarArray(arrayExemplo);