/*
Aufgabe: 2 DynHTML - Memory
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 17.04.2018
Ich habe diesen Code zusammen mit der Lerngruppe Gr�n geschrieben, angeleitet von Melvin Busch.
*/
var Memory;
(function (Memory) {
    //>>>>Reihenfolge Code: DOM, alle Variablen, Hauptfunktionen/Hauptablauf<<<<
    document.addEventListener("DOMContentLoaded", main);
    //Hinzuf�gen eines EventListener f�r das Dokument
    //"as DOMContentLoaded-Event wird ausgel�st, wenn das initiale HTML-Dokument vollst�ndig geladen und geparst ist."
    //"Parser: Computerprogramm, das in der Informatik f�r die Zerlegung + Umwandlung einer Eingabe in ein f�r die Weiterverarbeitung geeigneteres Format zust�ndig ist. H�ufig werden Parser eingesetzt, um im Anschluss an den Analysevorgang die Semantik der Eingabe zu erschlie�en und daraufhin Aktionen durchzuf�hren."
    // >>Variablen deklarieren<<
    let cardContent = ["Apfel", "Banane", "Kiwi", "Birne", "Mango", "Erdbeere", "Melone", "Himbeere", "Pfirsich", "Ananas"];
    //Karteninhalt ist Typ String, wird in ein Array gepackt
    let cardArray = [];
    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    let numPairs;
    let numPlayers;
    //Festlegung, dass numPairs/numPlayers vom Typ numbers sind
    let playerInfo;
    let cardField;
    //Festlegung, dass playerInfo/cardField vom Typ HTMLElemente sind
    let score = 0;
    //0 ist Platzhalter f�r sp�teren tats�chlichen Punktestand
    let name = "Spieler ";
    //"Spieler" kommt als Wort auf die Spieleransicht
    function main() {
        //Aufbau: function bezeichnung (param1:typ, param2: typ, � ) : void { � }
        //"Der Void-Operator wertet einen Ausdruck aus und gibt undefined zur�ck. Dieser Operator wird h�ufig verwendet, um den undefinierten Grundelementwert unter Verwendung von "void (0)" zu erhalten (n�tzlich, wenn ein Ausdruck ausgewertet wird, ohne den R�ckgabewert zu verwenden)."
        cardPairs();
        //Spieler soll Anzahl der Kartenpaare eingeben - Funktionsaufruf --> Zugriff auf Popup-Fenster
        numsPlayer();
        // Spieler sollen angeben, wie viele spielen wollen - Funktionsaufruf --> Zugriff auf Popup-Fenster
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        // DOM abh�ngige Variablen deklarieren, Bezug von .ts ins .html - an welcher Stelle soll eingef�gt werden
        // Spielkarten erzeugen
        for (let i = 0; i < numPairs; i++) {
            //Beginn des Z�hlvorgangs bei 0
            createCard(cardContent[i], randomState());
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
        }
        randomMix(cardArray);
        // Karten mischen - Funktionsaufruf!
        for (let i = 0; i < cardArray.length; i++) {
            // Karten dem Spielbrett hinzuf�gen
            cardField.appendChild(cardArray[i]);
        }
        for (let i = 0; i < numPlayers; i++) {
            // Spieler Anzeige generieren
            createPlayer(score, name + [i + 1]);
        }
    }
    function cardPairs() {
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10);
        //Aufbau parseInt: parseInt(string, radix)
        //Aufbau prompt: prompt(text, defaultText)
        //"Die Funktion parseInt () analysiert eine Zeichenfolge und gibt eine Ganzzahl zur�ck. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll." 10 = Dezimal
        //"Die Methode prompt () zeigt ein Dialogfeld an, das den Besucher zur Eingabe auffordert. Die Methode prompt () gibt den Eingabewert zur�ck, wenn der Benutzer auf "OK" klickt. Wenn der Benutzer auf "Abbrechen" klickt, gibt die Methode null zur�ck."
        if (numPairs < 5 || numPairs > 10) {
            cardPairs();
        }
    }
    function numsPlayer() {
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            numsPlayer();
        }
    }
    function createCard(_textDerAufDieKarteSoll, _state) {
        //Inhalt der Karte + Status (verdeckt/genommen/offen)
        //"Eine Funktion ist ein Codeblock, der f�r die Ausf�hrung einer bestimmten Aufgabe entwickelt wurde; sie wird ausgef�hrt, wenn sie "aufgerufen" wird."
        //vor Parametern immer Unterstrich!
        let card = document.createElement("div");
        // div erzeugen f�r Karten
        card.innerText = _textDerAufDieKarteSoll;
        // Text aus dem Array soll auf eine Karte 
        //***warum ist Zugriff auf cardContent array m�glich?!***
        card.setAttribute("class", "card " + _state);
        // Attribut hinzuf�gen: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
    }
    function createPlayer(_score, _name) {
        //Punktzahl + Spielername
        let player = document.createElement("div");
        //div erzeugen f�r Spieler
        let scoreField = document.createElement("div");
        //div erzeugen f�r Punktzahl
        let n = _score.toString();
        // Umwandeln einer number in string
        player.innerText = _name;
        //innerText immer Bef�llung f�r div
        scoreField.innerText = n;
        // da n umgewandelt wird in string ist scoreField = n
        playerInfo.appendChild(player);
        //wird im HTML angeh�ngt
        playerInfo.appendChild(scoreField);
        //wird im HTML angeh�ngt
    }
    // Mischen des Arrays
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> Array ist jetzt durchgemischt
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufg 2_final.js.map