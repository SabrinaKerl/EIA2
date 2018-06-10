namespace Aufgabe8 {
    
/*  Aufgabe: Aufgabe 8: ClientServer - StudiVZ
    Name: Sabrina Kerl
    Matrikel: 257167
    Datum: 10.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst, Sofia Gschwend, Franziska Heiß, Anna Lotz und Tim Lieberherr erarbeitet*/
    
    
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