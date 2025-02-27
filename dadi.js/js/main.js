/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Bonus
Invece di generare il numero random per l'utente, chiedilo con un prompt!

creo due numeri random da 1 a 6
stabilisco chi vince in base a chi fa il numero piu alto */

/*let numberUser = parseInt(Math.round(Math.random(max - min + 1)))
let numberCpu = parseInt(Math.round(Math.random() * 6))
console.log(numberCpu)
console.log(numberUser)*/

let minUser = 1;
let maxUser = 6;
let numberUser= parseInt(Math.random() * (maxUser - minUser + 1) + minUser);

let minCpu = 1;
let maxCpu = 6;
let numberCpu= parseInt(Math.random() * (maxCpu - minCpu + 1) + minCpu);

    if (numberUser > numberCpu) {
    console.log(`Il giocatore ha vinto con il numero ${numberUser} mentre il computer ha realizzato un punteggio di ${numberCpu}`);
    } else if (numberCpu > numberUser) {
    console.log(`Il computer ha vinto con il numero ${numberCpu} mentre il computer ha realizzato un punteggio di ${numberUser}`);
    } else {
    console.log(`Il punteggio finisce in pareggio con ${numberUser}`);
    }