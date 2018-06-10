/*
Aufgabe: 4 FormElements und Interfaces
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 03.05.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Memory;
(function (Memory) {
    ;
    Memory.decks = {};
    Memory.deck = {
        content: ["Apfel", "Banane", "Kiwi", "Birne", "Mango", "Erdbeere", "Melone", "Himbeere", "Pfirsich", "Ananas"],
        color: "hsla (120,100%,50%,0.3)",
        font: "Arial",
        count: "10"
    };
    Memory.decks["fruechte"] = Memory.deck;
    Memory.deck = {
        content: ["Affe", "Nashorn", "Giraffe", "B�r", "Panda", "Schlange", "Wal", "Robbe", "Hund", "Katze", "Maus", "Delfin", "Adler", "Kiwi", "K�nguru"],
        color: "hsla (120,100%,75%,0.3)",
        font: "TimesNewRoman",
        count: "12"
    };
    Memory.decks["tiere"] = Memory.deck;
    Memory.deck = {
        content: ["Berlin", "Prag", "Rom", "Oslo", "Stockholm", "Madrid", "Br�ssel", "Kopenhagen", "London", "Reykjavik", "Athen", "Sofia", "Moskau", "Lissabon", "Amsterdam", "Paris", "Ankara"],
        color: "hsla (120,60%,70%,0.3)",
        font: "Calibri",
        count: "15"
    };
    Memory.decks["staedte"] = Memory.deck;
    Memory.scoreboard = [];
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufg 4-1.js.map