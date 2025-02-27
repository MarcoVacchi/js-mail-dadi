/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email


Creo un’array contenente una lista di email (stringhe)
Creo un ciclo per verificare se la mail inserita dall’utente è presente all’interno della mia array
Con un prompt, chiedo all’utente di inserire la mail
SE presente
Stampo un messaggio appropriato 

Ad esempio console.log(‘Ci dispiace! La mail inserita non è presente all’interno della lista degli invitati!’)

ALTRIMENTI 
Stampo un messaggio appropriato 

Ad esempio console.log(‘Ci dispiace! La mail inserita non è presente all’interno della lista degli invitati!’)*/


const myArrListMail =
 ['pippo.mail',//[0];
  'pluto.mail',//[1];
  'giorgio.mail',//[2];
  'marco.mail',//[3];
  'giovanni.mail',//[4];
  'franco.mail',//[5];
  'michele.mail',//[6];
  'stefano.mail',//[7];
  'sandro.mail',//[8];
  'samuele.mail',//[9];
  'mirco.mail',//[10];
];

 const addMail = prompt('Aggiungi la tua email');

for (let i= 0; i < myArrListMail.length; i++) {
    const controlMail= myArrListMail[i];
    
    if (addMail === controlMail){
        console.log(`Fantastico! Questa mail può accedere! ${controlMail}`);  //se addMail(quello che l utente inserisce, equivale a una mail presente, faccio a altrimenti faccio b);

    } else { 
        console.log('Spiacenti, questa mail non fa parte della lista!');
    }
    


}



