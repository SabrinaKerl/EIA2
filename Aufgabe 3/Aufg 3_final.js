/*
Aufgabe: 3 Events - Memory
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 22.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Memory;
(function (Memory) {
    //>>>>Reihenfolge Code: DOM, alle Variablen, Hauptfunktionen/Hauptablauf, functions<<<<
    document.addEventListener("DOMContentLoaded", main);
    //Hinzuf�gen eines EventListener f�r das Dokument
    //"as DOMContentLoaded-Event wird ausgel�st, wenn das initiale HTML-Dokument vollst�ndig geladen und geparst ist."
    //"Parser: Computerprogramm, das in der Informatik f�r die Zerlegung + Umwandlung einer Eingabe in ein f�r die Weiterverarbeitung geeigneteres Format zust�ndig ist. H�ufig werden Parser eingesetzt, um im Anschluss an den Analysevorgang die Semantik der Eingabe zu erschlie�en und daraufhin Aktionen durchzuf�hren."
    // >>Variablen deklarieren<<
    var cardContent = ["Apfel", "Banane", "Kiwi", "Birne", "Mango", "Erdbeere", "Melone", "Himbeere", "Pfirsich", "Ananas"];
    //Karteninhalt ist Typ String, wird in ein Array gepackt
    var cardArray = [];
    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    var openArray = [];
    var openCards = 0;
    var numPairs;
    var numPlayers;
    //Festlegung, dass numPairs/numPlayers vom Typ numbers sind
    var playerInfo;
    var cardField;
    //Festlegung, dass playerInfo/cardField vom Typ HTMLElemente sind
    var score = 0;
    //0 ist Platzhalter f�r sp�teren tats�chlichen Punktestand
    var name = "Spieler ";
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
        for (var i = 0; i < numPairs; i++) {
            //Beginn des Z�hlvorgangs bei 0
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(cardContent[i]);
        }
        randomMix(cardArray);
        // Karten mischen - Funktionsaufruf!
        for (var i = 0; i < cardArray.length; i++) {
            // Karten dem Spielbrett hinzuf�gen
            cardField.appendChild(cardArray[i]);
        }
        for (var i = 0; i < numPlayers; i++) {
            // Spieler Anzeige generieren
            createPlayer(score, name + [i + 1]);
        }
        cardField.addEventListener("click", clickHandler);
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
    function createCard(_textDerAufDieKarteSoll) {
        //Inhalt der Karte + Status (verdeckt/genommen/offen)
        //"Eine Funktion ist ein Codeblock, der f�r die Ausf�hrung einer bestimmten Aufgabe entwickelt wurde; sie wird ausgef�hrt, wenn sie "aufgerufen" wird."
        //vor Parametern immer Unterstrich!
        var card = document.createElement("div");
        // div erzeugen f�r Karten
        card.innerHTML = "<span>" + _textDerAufDieKarteSoll + "</span>";
        // //  innerHTML erwartet string `` | span = HTMLElement Container mit spezifischer Zuweisung | $ = 'string' + variable + 'string'
        // Text aus dem Array soll auf eine Karte 
        //***warum ist Zugriff auf cardContent array m�glich?!***
        card.setAttribute("class", "card hidden");
        // Attribut hinzuf�gen: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
    }
    function createPlayer(_score, _name) {
        //Punktzahl + Spielername
        var player = document.createElement("div");
        //div erzeugen f�r Spieler
        var scoreField = document.createElement("div");
        //div erzeugen f�r Punktzahl
        var n = _score.toString();
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
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [_array[j], _array[i]], _array[i] = _a[0], _array[j] = _a[1];
        }
        return _array;
        var _a;
        // Ausgabe -> Array ist jetzt durchgemischt
    }
    function clickHandler(_event) {
        var cardClass = _event.target;
        // gibt ausl�sendes HTMLElement zur�ck
        if (cardClass.classList.contains("card")) {
            // "Die classList-Eigenschaft gibt den Klassennamen eines Elements als DOMTokenList-Objekt zur�ck. Diese Eigenschaft ist n�tzlich, um CSS-Klassen f�r ein Element hinzuzuf�gen, zu entfernen und umzuschalten."
            openCards++;
            //z�hlt mit, wie viele Karten den Status "aufgedeckt" haben
            if (cardClass.classList.contains("hidden")) {
                // wenn "hidden" enthalten dann...
                cardClass.classList.remove("hidden");
                // ...entferne "hidden" und...
                cardClass.classList.add("visible");
            }
        }
        if (openCards == 2) {
            // wenn der Z�hler der aufgedeckten Karten den Wert 2 erreicht, dann...
            setTimeout(matchCards, 2000);
        }
        if (openCards > 2) {
            // wenn der Z�hler der aufgedeckten Karten einen gr��er-gleichen Wert als 2 erreicht, dann...
            cardClass.classList.remove("visible");
            // ...entferne Status "visible" und...
            cardClass.classList.add("hidden");
        }
    }
    function matchCards() {
        var openArray = filterCardsByClass("visible");
        // lass openArray ein HTMLElement Array sein, welches die Funktion filterCardsByClass ausf�hren soll
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {
            // Vergleich Array [0] zu Array [1] und deren jeweils erstes Kind
            for (var s = 0; s > openArray.length; s++) {
                // lass s eine number sein, die den Wert 0 besitzt; lass s kleiner sein als die openArray.lenght; z�hle mit
                openArray[s].classList.remove("visible");
                // entferne  "visible"
                openArray[s].classList.add("taken");
            }
        }
        else {
            for (var s = 0; s < openArray.length; s++) {
                // siehe oben
                openArray[s].classList.remove("visible");
                // entferne "visible"
                openArray[s].classList.add("hidden");
            }
        }
        winAlert();
        // Aufruf Funktion
        openArray = [];
        // Aufruf Array
        openCards = 0;
        // openCards erh�lt den Wert 0
    }
    function winAlert() {
        var cardsTaken = filterCardsByClass("hidden");
        // lass cardsTaken in HTMLElement Array sein, welches die Funktion filterCardsByClass ausf�hren soll
        if (cardsTaken.length == 0) {
            // wenn alle Karten den Status "taken" haben erscheint der Gewinnalarm
            alert("Glueckwunsch, Du hast das Spiel beendet!");
        }
        cardsTaken = [];
    }
    function filterCardsByClass(_filter) {
        return cardArray.filter(function (card) { return card.classList.contains(_filter); });
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufg 3_final.js.map