// variaveis nome e xp do heroi
let nomeHeroi = "Ashlas";
let xpHeroi = 8534;

// estrutura decisao nivel heroi
let nivelHeroi

if(xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <=2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000){
     nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else { //xp igual ou maior que 10001
    nivelHeroi = "Radiante"    
}

//saida final
console.log('O herói de nome ' + nomeHeroi + ' está no nível ' + nivelHeroi);
