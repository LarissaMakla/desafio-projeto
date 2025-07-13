let resultadosJogador1 = calcularRankeadas(5, 3)
console.log(`O Herói tem saldo de ${resultadosJogador1.saldoVitorias} vitórias e está no nível ${resultadosJogador1.nivel}`)

let resultadosJogador2 = calcularRankeadas(65, 30);
console.log(`O Herói tem saldo de ${resultadosJogador2.saldoVitorias} vitórias e está no nível ${resultadosJogador2.nivel}`)

let resultadosJogador3 = calcularRankeadas(110, 5);
console.log(`O Herói tem saldo de ${resultadosJogador3.saldoVitorias} vitórias e está no nível ${resultadosJogador3.nivel}`)

function calcularRankeadas (vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;
    if(vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <=20){
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <=50){
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <=80){
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <=90){
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <=100){
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal"
    }        

return {
    saldoVitorias: saldoVitorias,
    nivel: nivel
};
}
