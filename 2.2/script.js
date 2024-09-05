function somarImpares(){
    let acc = 0;
    let i=0;
    for(i=1; i<=15; i++){
        if(i%2 !== 0){
            acc += i;
        }
    }
    alert(`O valor acumulado foi de: ${acc}!`);
}

somarImpares();