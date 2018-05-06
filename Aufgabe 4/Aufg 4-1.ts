/*
Aufgabe: 4 FormElements und Interfaces
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 03.05.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Memory {
    //Kartendecks
    
    //**Objekt Interface**
    interface Deck {
        content: string[];
        color: string;
        font: string;
        size: number;        
    }
    
    export interface Decks {
        [deckName: string]: Deck;
        }
    
    let fruechte: Deck = {
        content: ["Apfel", "Banane", "Kiwi", "Birne", "Mango", "Erdbeere", "Melone", "Himbeere", "Pfirsich", "Ananas"],
        color: "hsla (120,100%,50%,0.3)",
        font: "Arial",
        size: 10
        };
    
    let tiere: Deck = {
        content: ["Affe", "Nashorn", "Giraffe", "Bär", "Panda", "Schlange", "Wal", "Robbe", "Hund", "Katze", "Maus", "Delfin", "Adler", "Kiwi", "Känguru"],
        color: "hsla (120,100%,75%,0.3)",   
        font: "TimesNewRoman",
        size: 12
        };
    
    let staedte: Deck = {
        content: ["Berlin", "Prag", "Rom", "Oslo", "Stockholm", "Madrid", "Brüssel", "Kopenhagen", "London", "Reykjavik", "Athen", "Sofia", "Moskau", "Lissabon", "Amsterdam", "Paris", "Ankara"],
        color: "hsla (120,60%,70%,0.3)",
        font: "Calibri",
        size: 15
        };
    }