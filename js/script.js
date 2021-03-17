// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome: 'Caterina',
    cognome: 'Bertotti',
    eta: 23
}

console.log(studente);

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for ( var key in studente ) {
    console.log(key + ': ' + studente[key]);
}

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
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.