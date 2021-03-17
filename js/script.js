// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome: 'Caterina',
    cognome: 'Bertotti',
    eta: 23
};

console.log(studente);

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for ( var key in studente ) {
    console.log(key + ': ' + studente[key]);
};

// Creare un array di oggetti di studenti.
var studenti = [
    {
        nome: 'Matteo',
        cognome: 'Rossi',
    },
    {
        nome: 'Filippo',
        cognome: 'Bianchi',
    },
    {
        nome: 'Claudio',
        cognome: 'Verdi',
    }
];


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for ( var i = 0; i < studenti.length; i++ ) {
    console.log(studenti[i]['nome'] + ' ' + studenti[i]['cognome']);
};

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuoviStudenti = [];
var nuovoStudente = {};

while ( oneMore !== 'stop' ) {
    var nome = prompt('Inserisci il nome del nuovo studente');
    nuovoStudente.nome = nome;
    console.log(nuovoStudente.nome);
    
    var cognome = prompt('Inserisci il cognome del nuovo studente');
    nuovoStudente.cognome = cognome;
    console.log(nuovoStudente.cognome);
    
    var eta = parseInt(prompt("Inserisci l'eta del nuovo studente"));
    nuovoStudente.eta = eta;
    console.log(nuovoStudente.eta);

    nuoviStudenti.push(nuovoStudente);

    var oneMore = prompt('Vuoi inserire un nuovo studente? Se no, scrivi stop, altrimenti fai click su un qualsiasi tasto e poi premi invio');
};
