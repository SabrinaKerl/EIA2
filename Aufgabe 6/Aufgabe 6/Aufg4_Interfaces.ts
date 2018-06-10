/*
Aufgabe: 4 Forms and Interface
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 26.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/ 

namespace Aufgabe6 {
    
    // Struktur des heterogenen assoziativen Arrays als Datensatz für eine studierende Person
    export interface Studi {
        firstname: string;
        name: string;       
        matrikel: number;
        age: number;
        gender: boolean;
        studyPath: string;
       
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {
        [matrikel: string]: Studi;
    }
 
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};  
}