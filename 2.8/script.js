function contarCaracteres(str){
    let acc = 0;
    for(i of str){
        acc += 1;
    }
    return console.log(`O total de caracteres da string é de: ${acc}`);
}

contarCaracteres("Thiago");