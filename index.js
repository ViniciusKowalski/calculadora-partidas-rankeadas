let namePlayer = "He-man"
let nivel;

let level = rankingPlayer(30,10)
function rankingPlayer(win, loss){
    let level = win - loss
    return level
}

if (level < 10){
    nivel = "Ferro"
}
else if(level >= 11 && level <= 20){
     nivel = "Bronze"
}
else if(level >= 21 && level <= 50){
    nivel = "Prata"
}
else if(level >= 51 && level <= 80){
    nivel = "Ouro"
}
else if(level >= 81 && level <= 90){
    nivel = "Diamente"
}
else if(level >= 91 && level <= 100){
    nivel = "Lendário"
}
else{
    nivel = "Imortal"
}
switch(nivel){
    case "Ferro":
        console.log("O herói " + namePlayer + " tem saldo de " + level + " está no nível de " + nivel)
    break;
    case "Bronze":
        console.log("O herói " + namePlayer + " tem saldo de " + level + " está no nível de " + nivel)
    break;
    case "Prata":
        console.log("O herói " + namePlayer + " tem saldo de " + level + " está no nível de " + nivel)
    break;
    case "Ouro":
        console.log("O herói " + namePlayer + " tem saldo de " + level + " está no nível de " + nivel)
    break;
    case "Diamente":
        console.log("O herói " + namePlayer + " tem saldo de " + level + " está no nível de " + nivel)
    break;
    case "Lendário":
        console.log("O herói " + namePlayer + " tem saldo de " + level + " está no nível de " + nivel)
    break;
    case "Imortal":
        console.log("O herói " + namePlayer + " tem saldo de " + level + " está no nível de " + nivel)
    break;
}