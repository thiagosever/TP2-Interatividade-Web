function exibirElementosArray(array){
    for(i in array){
        console.log(`Indice ${i}: ${array[i]}`);
    }
}
const arrayNum = [10,20,30,40,50];
exibirElementosArray(arrayNum);