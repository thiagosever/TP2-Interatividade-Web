function exibirCarro(){
    const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
    }

    for (let propriedade in carro){
        console.log(`${propriedade}: ${carro[propriedade]}`);
    }
}

exibirCarro();