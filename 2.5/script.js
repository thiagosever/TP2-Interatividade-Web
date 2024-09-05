function contarPropriedades(objeto){
    let acc =0;
    for(let prop in objeto){
        acc += 1;
    }
    return console.log(acc);
}
const pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira"
}

contarPropriedades(pessoa);