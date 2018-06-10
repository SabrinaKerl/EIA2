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
    export interface Deck {
        content: string[];
        color: string;
        font: string;
        count: string;        
    }
    
    export let deck: Deck;
    
    export interface Decks {
        [deckName: string]: Deck;
        };
    
    export let decks: Decks = {};
        deck = {
        content: ["Apfel", "Banane", "Kiwi", "Birne", "Mango", "Erdbeere", "Melone", "Himbeere", "Pfirsich", "Ananas"],
        color: "hsla (120,100%,50%,0.3)",
        font: "Arial",
        count: "10"
        };
    
    decks["fruechte"] = deck;
    
        deck = {
        content: ["Affe", "Nashorn", "Giraffe", "Bär", "Panda", "Schlange", "Wal", "Robbe", "Hund", "Katze", "Maus", "Delfin", "Adler", "Kiwi", "Känguru"],
        color: "hsla (120,100%,75%,0.3)",   
        font: "TimesNewRoman",
        count: "12"
        };
    
    decks["tiere"] = deck;
    
        deck = {
        content: ["Berlin", "Prag", "Rom", "Oslo", "Stockholm", "Madrid", "Brüssel", "Kopenhagen", "London", "Reykjavik", "Athen", "Sofia", "Moskau", "Lissabon", "Amsterdam", "Paris", "Ankara"],
        color: "hsla (120,60%,70%,0.3)",
        font: "Calibri",
        count: "15"
        };
    
    decks["staedte"] = deck;
    
     export interface Scoreboard {
                player: string;
                score: number;
      }
    
     export let scoreboard: Scoreboard[] = [];

    }