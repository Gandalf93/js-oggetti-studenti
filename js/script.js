// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = {
    'nome' : 'Giulia',
    'cognome' : 'Fenu' ,
    'eta' : '27' ,
};

// ciclo for-in con proprietà dell'oggetto
for (var x in studente){
    
    console.log(studente[x]);
}

// Array di oggetti di studenti
var arStudenti = [
    {
        'nome' : 'Bilbo',
        'cognome' : 'Baggins' ,
    },
    {
        'nome' : 'Ennio',
        'cognome' : 'Annio' ,
    },
    {
        'nome' : 'Ivo',
        'cognome' : 'Avido' ,
    }
];

var nameU = prompt('scrivi il tuo nome');
var surname = prompt('scrivi il tuo cognome');
var age =parseInt(prompt('scrivi la tua età'));
var utente = {
    'nome' : nameU,
    'cognome' : surname ,
    'eta' : age
};


arStudenti.push(utente);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < arStudenti.length; i++){
    // console.log(arStudenti[i]);
   for(var k in arStudenti[i]){
       console.log(arStudenti[i][k]);
   }
   
}









