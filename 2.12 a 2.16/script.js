// Como todos os exercícios em grupo estão estritamente relacionados
//deixarei os mesmos em um único arquivo, especificando
//qual seu numero por comentário.


//Exercício 12
const vendas = [
    [150, 200, 120], // Segunda-feira
    [180, 230, 140], // Terça-feira
    [160, 210, 130], // Quarta-feira
    [170, 220, 150], // Quinta-feira
    [190, 240, 160], // Sexta-feira
    [200, 250, 170], // Sábado
    [210, 260, 180]  // Domingo
];

const diaSemana = ['Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado','Domingo'];
const totaisDiarios = [];

//Exercício 13

function calcularTotalDiario(vendas) {
    let totalDia = 0;
    for(const dia of vendas){
        for(valores of dia){
            totalDia = 0;
            totalDia += valores;
        }
        totaisDiarios.push(totalDia);
    }

    for(let i=0; i<7; i++){
        console.log(`${diaSemana[i]} teve um total de ${totaisDiarios[i]} vendas.`);
    }
    return totaisDiarios;
}


calcularTotalDiario(vendas); 
// Chame a função para exibir o total diário no console

//Exercício 14

function calcularMediaVendas(totaisDiarios) {
    let totalGeral = 0;
    for( const dia of totaisDiarios){
        totalGeral += dia;
    }
    return console.log(`A média de vendas por dia foi de ${(totalGeral/7).toFixed(2)}`);

}

calcularMediaVendas(totaisDiarios);

//Exercício 15

function encontrarMelhorPiorDia(totaisDiarios) {
    let menorDia = totaisDiarios[0];
    let maiorDia = totaisDiarios[0];
    let diaSemanaIndiceMenor = 0;
    let diaSemanaIndiceMaior = 0;

    for(const [indice,dia] of totaisDiarios.entries()){
        if(dia<menorDia){
            menorDia = dia;
            diaSemanaIndiceMenor = indice;
        }
        if(dia>maiorDia){
            maiorDia = dia;
            diaSemanaIndiceMaior = indice;
        }
    }

    console.log(`O menor dia de vendas foi ${diaSemana[diaSemanaIndiceMenor]}, com ${menorDia} vendas.
O maior dia de vendas foi ${diaSemana[diaSemanaIndiceMaior]}, com um total de ${maiorDia} de vendas.`);
}

encontrarMelhorPiorDia(totaisDiarios);

//Exercício 16
function filtrarVendasAcimaDe(totaisDiarios, valorMinimo) {
    const diasComAltaVenda = [];
    for(dia in totaisDiarios){
        if(totaisDiarios[dia] > valorMinimo){
            diasComAltaVenda.push(totaisDiarios[dia]);
        }
    }
    return console.log(diasComAltaVenda);
}

filtrarVendasAcimaDe(totaisDiarios, 150);